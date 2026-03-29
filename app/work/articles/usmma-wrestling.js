import Image from "next/image";
import usmmaHero from "@/public/work/usmma-wrestling/usmma-hero.png";
import usmmaChatResult from "@/public/work/usmma-wrestling/usmma-chat-result.jpg";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const usmmaWrestling = {
    slug: "usmma-wrestling",
    title: "USMMA Wrestling: AI-powered site management for non-technical stakeholders",
    description:
        "Built a recruitment platform for the US Merchant Marine Academy wrestling program — stakeholders describe changes in plain English, a Claude Code sandbox makes the edits, creates a PR, and returns a Vercel preview link for approval.",
    categories: [
        categories.find((category) => category.slug === "feature"),
    ],
    author: authors.find((author) => author.slug === "gene"),
    publishedAt: "2025-05-01",
    image: {
        src: usmmaHero,
        urlRelative: "/work/usmma-wrestling/usmma-hero.png",
        alt: "USMMA Wrestling recruitment website",
    },
    content: (
        <>
            <Image
                src={usmmaHero}
                alt="USMMA Wrestling recruitment website"
                width={700}
                height={500}
                priority={true}
                className="rounded-box mb-8"
                placeholder="blur"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className={styles.h2}>Objectives</h2>
                    <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                        <li className={styles.li}>🙋🏻‍♀️ Build a recruitment site for the USMMA wrestling program</li>
                        <li className={styles.li}>🙋🏻‍♀️ Let stakeholders update the site without contacting a developer</li>
                        <li className={styles.li}>🙋🏻‍♀️ Keep changes safe — preview before going live</li>
                        <li className={styles.li}>🙋🏻‍♀️ Minimize friction with passwordless authentication</li>
                    </ul>
                </div>
                <div>
                    <h2 className={styles.h2}>Results</h2>
                    <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                        <li className={styles.li}>✅ Live recruitment site serving the USMMA wrestling program</li>
                        <li className={styles.li}>✅ Stakeholders update the site by chatting — no code, no tickets</li>
                        <li className={styles.li}>✅ Every change creates a PR with a Vercel preview link for approval</li>
                        <li className={styles.li}>✅ Magic-link auth — no passwords to remember or reset</li>
                    </ul>
                </div>
            </section>

            <h2 className={styles.h2}>Highlights</h2>
            <section className="mb-12">
                <div className="grid grid-cols-1 gap-16 md:gap-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center justify-center">
                            <Image
                                src={usmmaChatResult}
                                alt="AI site editor showing PR with preview link"
                                width={600}
                                height={400}
                                className="rounded-box"
                            />
                        </div>
                        <div className="flex items-center">
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Chat-to-PR Workflow</h4>
                                <p className={styles.p}>
                                    Stakeholders describe what they want changed in plain English. The system spins up a temporary Claude Code sandbox, makes the edits, creates a GitHub PR, and returns a Vercel preview link — all within the chat. They review the preview, and if it looks good, the changes go live.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <div className="flex items-center">
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Sandboxed Code Execution</h4>
                                <p className={styles.p}>
                                    Each edit request spins up an ephemeral Vercel Sandbox — a Firecracker microVM running Claude Code. The AI reads the current site, makes the requested changes, commits to a branch, and pushes. No changes touch production until the stakeholder approves the preview. Safe enough for non-technical users to trigger updates daily.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <div className="flex items-center">
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Magic-Link Authentication</h4>
                                <p className={styles.p}>
                                    No passwords, no friction. Users enter their email and receive a secure sign-in link (JWT with 15-minute TTL). Sessions persist for 7 days via Upstash Redis. The entire auth flow takes seconds — critical when you want stakeholders to actually use the tool instead of emailing you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className={styles.h2}>Challenges and Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Mobile Session Reliability</h4>
                        <p className={styles.p}>
                            Mobile browsers aggressively kill background connections. I built reconnection logic that detects stale sessions, re-establishes SSE streams, and recovers chat history — so conversations survive phone sleep without losing context.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Making AI Edits Trustworthy</h4>
                        <p className={styles.p}>
                            The key insight: never let AI push to production. Every change goes through a PR → preview → approve flow. Stakeholders see exactly what changed before anything goes live. Rate limiting (10 requests/hour) and session management prevent runaway costs.
                        </p>
                    </div>
                </div>
            </section>
            <h2 className={styles.h2}>Beyond the day job</h2>
            <section className="mb-12">
                <p className={styles.p}>As an assistant wrestling coach at USMMA, I was the bottleneck for every site update. Now the coaching staff can update photos, copy, and layout themselves — just by describing what they want. This is the kind of tool I wish existed everywhere: AI that handles the implementation so domain experts can focus on their actual job.</p>
            </section>
        </>
    ),
};
