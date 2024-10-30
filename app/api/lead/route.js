import { NextResponse } from "next/server";
// env DISCORD_WEBHOOK_URL


const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL; // Get this from Discord channel settings

export async function POST(req) {
  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Send to Discord
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `🎉 New lead submitted: ${body.email} says: ${body.message}`
      })
    });

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
