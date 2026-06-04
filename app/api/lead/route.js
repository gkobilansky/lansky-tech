import { NextResponse } from "next/server";
// env DISCORD_WEBHOOK_URL

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL; // Get this from Discord channel settings

// Honeypot field rendered off-screen in the form. Humans never see or fill it;
// form-spam bots fill every input they find, so a non-empty value means a bot.
const HONEYPOT_FIELD = "contact_ref";

// A standalone token this long, with no spaces and mixed-case letters, is the
// signature of form-spam bots (e.g. "rwaxOnNDEThTLKqFivij"). Real messages this
// long almost always contain a space.
const GIBBERISH_MIN_LENGTH = 16;

// Good enough to reject obviously malformed addresses without false positives.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A browser submitting our own form always sends an Origin or Referer whose host
// matches the host it was served from. Direct server-side bot POSTs usually send
// neither, or send a mismatched host.
function isSameOrigin(req) {
  const source = req.headers.get("origin") || req.headers.get("referer");
  const host = req.headers.get("host");
  if (!source || !host) return false;
  try {
    return new URL(source).host === host;
  } catch {
    return false;
  }
}

function looksLikeGibberish(message) {
  if (typeof message !== "string") return false;
  const value = message.trim();
  if (value.length < GIBBERISH_MIN_LENGTH) return false;
  if (/\s/.test(value)) return false; // real messages have spaces
  if (/[.@/:]/.test(value)) return false; // leave URLs / emails alone
  return /[A-Z]/.test(value) && /[a-z]/.test(value); // mixed-case random token
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Silently accept (200, so the bot moves on) but drop anything that trips a
  // trap: cross-origin/header-less POSTs, a filled honeypot, or a random token.
  const tripped =
    !isSameOrigin(req) ||
    Boolean(body?.[HONEYPOT_FIELD]) ||
    looksLikeGibberish(body?.message);
  if (tripped) {
    return NextResponse.json({});
  }

  if (!body?.email || !EMAIL_REGEX.test(body.email)) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }

  if (!DISCORD_WEBHOOK_URL) {
    console.error("DISCORD_WEBHOOK_URL is not configured");
    return NextResponse.json({});
  }

  try {
    // Send to Discord
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `🎉 New lead submitted: ${body.email} says: ${body.message ?? ""}`,
      }),
    });

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
