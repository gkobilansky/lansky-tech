import Image from "next/image";
import computepricesHero from "@/public/work/computeprices/computeprices-home.png";
import computepricesGpus from "@/public/work/computeprices/computeprices-hero.png";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const computePrices = {
    slug: "computeprices",
    title: "ComputePrices: real-time GPU pricing across 8+ cloud providers",
    description:
        "I built a product from scratch that helps ML engineers find the cheapest GPU instances across cloud providers — with real-time pricing, filterable comparison, and affiliate monetization.",
    categories: [
        categories.find((category) => category.slug === "product"),
    ],
    author: authors.find((author) => author.slug === "gene"),
    publishedAt: "2025-06-15",
    image: {
        src: computepricesHero,
        urlRelative: "/work/computeprices/computeprices-home.png",
        alt: "ComputePrices GPU pricing comparison",
    },
    content: (
        <>
            <Image
                src={computepricesHero}
                alt="ComputePrices GPU pricing comparison dashboard"
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
                        <li className={styles.li}>🙋🏻‍♀️ Help ML practitioners quickly compare GPU pricing across cloud providers</li>
                        <li className={styles.li}>🙋🏻‍♀️ Build a sustainable product with affiliate revenue</li>
                        <li className={styles.li}>🙋🏻‍♀️ Create a fast, SEO-optimized comparison tool</li>
                        <li className={styles.li}>🙋🏻‍♀️ Aggregate data from providers with wildly different APIs and pricing models</li>
                    </ul>
                </div>
                <div>
                    <h2 className={styles.h2}>Results</h2>
                    <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                        <li className={styles.li}>✅ Live at computeprices.com with organic search traffic</li>
                        <li className={styles.li}>✅ Real-time pricing from 8+ providers (AWS, RunPod, Vast.ai, Lambda, CoreWeave, and more)</li>
                        <li className={styles.li}>✅ Affiliate partnerships generating revenue</li>
                        <li className={styles.li}>✅ 215+ commits — built from domain purchase to production in weekends</li>
                    </ul>
                </div>
            </section>

            <h2 className={styles.h2}>Highlights</h2>
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src={computepricesGpus}
                            alt="GPU selection and pricing comparison"
                            width={600}
                            height={400}
                            className="rounded-box"
                            placeholder="blur"
                        />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Multi-Provider Aggregation</h4>
                            <p className={styles.p}>
                                Each cloud provider structures their pricing differently — some have APIs, some have HTML tables, some change formats without notice. I built a scraping pipeline that normalizes all of this into a single, filterable interface so you can compare an H100 across every provider in seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Affiliate Monetization</h4>
                            <p className={styles.p}>
                                Rather than charge users, I partnered with GPU cloud providers directly. Every &quot;Visit Website&quot; click carries a referral link — the site earns commission when users sign up through ComputePrices. Revenue without friction.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={computepricesHero}
                            alt="ComputePrices provider comparison"
                            width={600}
                            height={400}
                            className="rounded-box"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className={styles.h2}>Challenges and Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Data Reliability</h4>
                        <p className={styles.p}>
                            Cloud providers change their pricing pages, API schemas, and availability constantly. I built resilient scrapers with error handling and fallback strategies so the site stays accurate even when upstream sources break.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">SEO for Data-Heavy Pages</h4>
                        <p className={styles.p}>
                            Comparison pages with hundreds of GPU configurations need careful optimization — proper metadata, structured data, fast load times, and useful filtering so both search engines and users can navigate the data effectively.
                        </p>
                    </div>
                </div>
            </section>
            <h2 className={styles.h2}>Built in public, built to last</h2>
            <section className="mb-12">
                <p className={styles.p}>ComputePrices started as a weekend experiment — &quot;just bought computeprices.com, let&apos;s see if I can make something useful.&quot; Two weekends later, the first version was live. It&apos;s now a real product with real users and real revenue. Need a product built from zero to one? Let&apos;s chat.</p>
            </section>
        </>
    ),
};
