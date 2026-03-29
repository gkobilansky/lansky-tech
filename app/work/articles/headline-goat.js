import Image from "next/image";
import headlineGoatLogo from "@/public/work/headline-goat/headline-goat-logo.png";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const headlineGoat = {
    slug: "headline-goat",
    title: "Headline Goat: A/B testing in a single binary",
    description:
        "A self-hosted A/B testing tool for headlines — one Go binary with embedded SQLite, no external dependencies. Add it to any site, test your copy, and get statistically significant results.",
    categories: [
        categories.find((category) => category.slug === "product"),
    ],
    author: authors.find((author) => author.slug === "gene"),
    publishedAt: "2025-04-01",
    image: {
        src: headlineGoatLogo,
        urlRelative: "/work/headline-goat/headline-goat-logo.png",
        alt: "Headline Goat mascot logo",
    },
    content: (
        <>
            <div className="flex items-center justify-center mb-8">
                <Image
                    src={headlineGoatLogo}
                    alt="Headline Goat mascot"
                    width={300}
                    height={300}
                    priority={true}
                    className="rounded-box"
                    placeholder="blur"
                />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className={styles.h2}>Objectives</h2>
                    <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                        <li className={styles.li}>🙋🏻‍♀️ Build the simplest possible A/B testing tool for headlines</li>
                        <li className={styles.li}>🙋🏻‍♀️ Zero external dependencies — no databases, no SaaS, no SDKs</li>
                        <li className={styles.li}>🙋🏻‍♀️ Statistically rigorous winner detection</li>
                        <li className={styles.li}>🙋🏻‍♀️ Works with any site — drop in a script tag and go</li>
                    </ul>
                </div>
                <div>
                    <h2 className={styles.h2}>Results</h2>
                    <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                        <li className={styles.li}>✅ Single 18MB Go binary — runs anywhere, deploys in seconds</li>
                        <li className={styles.li}>✅ Embedded SQLite — no Postgres, no Redis, no config</li>
                        <li className={styles.li}>✅ Wilson score intervals + z-test for significance</li>
                        <li className={styles.li}>✅ CLI + web dashboard for monitoring tests</li>
                        <li className={styles.li}>✅ In production on lansky.tech itself</li>
                    </ul>
                </div>
            </section>

            <h2 className={styles.h2}>Highlights</h2>
            <section className="mb-12">
                <div className="grid grid-cols-1 gap-16 md:gap-24">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">How It Works</h4>
                            <p className={styles.p}>
                                Add <code className={styles.codeInline}>data-hlg-name</code> and <code className={styles.codeInline}>data-hlg-variants</code> attributes to any HTML element. Include the tiny client script. Headline Goat randomly assigns visitors to variants, tracks views and conversions, and tells you when it has a statistically significant winner. That&apos;s it.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Statistical Rigor</h4>
                            <p className={styles.p}>
                                No premature &quot;Winner!&quot; declarations. Headline Goat uses Wilson score confidence intervals and two-proportion z-tests to only declare a winner at 95% confidence. It even estimates how long you need to wait based on your current traffic rate.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Dual Interface</h4>
                            <p className={styles.p}>
                                Manage tests via CLI (<code className={styles.codeInline}>hlg create</code>, <code className={styles.codeInline}>hlg status</code>) or the built-in web dashboard. Every CLI command supports <code className={styles.codeInline}>--json</code> for automation. The dashboard is embedded in the binary — no separate frontend to deploy.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Bot Detection</h4>
                            <p className={styles.p}>
                                The client-side script detects headless browsers, Cypress, Phantom, and other automated tools — filtering them from your test data so results reflect real human behavior.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Deploy Anywhere</h4>
                            <p className={styles.p}>
                                Cross-compiled for Linux, macOS, and ARM. Ships with Docker support, systemd configs, and reverse proxy guides for Nginx, Caddy, and Cloudflare Tunnel. Install with a one-liner shell script.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className={styles.h2}>Challenges and Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Flash Prevention</h4>
                        <p className={styles.p}>
                            The biggest UX challenge with client-side A/B testing is content flash — visitors briefly seeing the wrong variant before JavaScript kicks in. I solved this with a CSS-first strategy that hides variants until assignment completes, ensuring a seamless experience.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Single Binary Philosophy</h4>
                        <p className={styles.p}>
                            Keeping everything in one binary (server, database, dashboard, client script) meant embedding assets at compile time and using SQLite in WAL mode for concurrent reads. The result: a tool you can audit in ~7,000 lines of Go.
                        </p>
                    </div>
                </div>
            </section>
            <h2 className={styles.h2}>Dogfooding in production</h2>
            <section className="mb-12">
                <p className={styles.p}>Headline Goat is running on this very site — the hero tagline you saw on the homepage is being A/B tested right now. I built this tool because existing A/B testing solutions were either too expensive, too complex, or required sending your data to a third party. Sometimes the best tool is the one you build yourself.</p>
            </section>
        </>
    ),
};
