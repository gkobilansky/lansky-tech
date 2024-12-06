import Image from "next/image";
import MuxVideoPlayer from "../_assets/components/MuxVideoPlayer";
import samsungExperience from "@/public/work/samsung/samsung-galaxy.png";
import goBig from "@/public/work/samsung/galaxy-go-big.png";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const samsungAmazonExperience = {
    slug: "samsung-amazon-experience",
    title: "Samsung x Amazon Store Interactive Experience",
    description:
        "A React-based interactive Amazon Store experience for Samsung's Galaxy lineup, integrating 360° views, immersive storytelling, and platform consistency across web and Amazon Fire.",
    categories: [
        categories.find((category) => category.slug === "feature"),
    ],
    author: authors.find((author) => author.slug === "gene"),
    publishedAt: "2024-10-30",
    image: {
        src: samsungExperience,
        urlRelative: "/work/samsung/samsung-banner.jpeg",
        alt: "Samsung Galaxy Unpacked",
    },
    content: (
        <>
          <div className="flex items-center justify-center">
                    <MuxVideoPlayer
                        playbackId={"udKnSFaWpxmqlruqWXtGMCxNWVJlQpFhubWKs0202EVYw"}
                        title={'360 Viewer'}
                    />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
            <h3 className={styles.h3}>Objectives</h3>
                <div>
                    <p className={styles.p}>
                        Samsung wanted a sleek, interactive Amazon Store experience to highlight their Galaxy product lineup. The goal was to showcase the Galaxy S24 Ultra and other flagship products while engaging users through high-quality visuals and an immersive interface. The project included:
                    </p>
                    <ul className={styles.ul}>
                        <li className={styles.li}>A 360° product view using HTML canvas and Three.js</li>
                        <li className={styles.li}>An engaging, narrative-driven design to feature product highlights</li>
                        <li className={styles.li}>Consistency across Amazon's web store and Amazon Fire platforms</li>
                    </ul>
                </div>
            </section>
            <h2 className={styles.h3}>Highlights</h2>
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">360° Product View</h4>
                        <p className={styles.p}>
                            A 360-degree product view, developed with HTML canvas and Three.js, allowed users to explore the Galaxy S24 Ultra from all angles, offering an immersive, hands-on feel for the device's design.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                    <MuxVideoPlayer
                        playbackId={"udKnSFaWpxmqlruqWXtGMCxNWVJlQpFhubWKs0202EVYw"}
                        title={'360 Viewer'}
                    />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Platform Consistency</h4>
                        <p className={styles.p}>
                            Created a cohesive design system compatible with both the Amazon Store and Amazon Fire, ensuring a seamless brand experience across platforms.
                        </p>
                    </div>
                    <div className="flex items-center justify-center order-2 md:order-1">
                    <MuxVideoPlayer
                        playbackId={"QET100NcFATspDr8FhSXQon4wUEcg4V7IGArj1kSaeJs"}
                        title={'Color Switcher'}
                    />
                    </div>
                </div>
            </section>

            <h3 className={styles.h3}>Challenges and Solutions</h3>
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Amazon Framework Adaptation</h4>
                        <p className={styles.p}>
                            Adapting Samsung's design within Amazon's in-house framework required balancing brand visuals with platform constraints. I optimized React components for smooth performance within Amazon's ecosystem.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">360° View Integration</h4>
                        <p className={styles.p}>
                            Implementing the 360° view was technically complex. Using Three.js with HTML canvas, I ensured the feature was performant and visually engaging, allowing users to inspect every product angle.
                        </p>
                    </div>
                </div>
            </section>

            <h3 className={styles.h3}>Results</h3>
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-base-200 p-6 rounded-box">
                        <h4 className="text-xl font-semibold mb-2">High Engagement</h4>
                        <p className={styles.p}>
                            Users engaged extensively with the interactive product views, leading to higher time-on-page and increased conversions.
                        </p>
                    </div>
                    <div className="bg-base-200 p-6 rounded-box">
                        <h4 className="text-xl font-semibold mb-2">Consistent Brand Presence</h4>
                        <p className={styles.p}>
                            Achieved a seamless Samsung experience across Amazon platforms, reinforcing brand identity.
                        </p>
                    </div>
                    <div className="bg-base-200 p-6 rounded-box">
                        <h4 className="text-xl font-semibold mb-2">Scalable Design</h4>
                        <p className={styles.p}>
                            Created reusable components, allowing for quick adaptation to future Samsung product pages on Amazon.
                        </p>
                    </div>
                </div>
            </section>

            <h3 className={styles.h3}>Wrap Up</h3>
            <section>
                <p className={styles.p}>
                    This project highlighted how advanced interactive features like 360° views can elevate an e-commerce experience. By leveraging Three.js and an Amazon-friendly framework, I delivered an engaging, consistent experience that aligns Samsung's brand with Amazon's platform.
                </p>
            </section>
        </>
    ),
}; 