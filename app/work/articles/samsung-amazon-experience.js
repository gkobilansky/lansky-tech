import Image from "next/image";
import MuxVideoPlayer from "../_assets/components/MuxVideoPlayer";
import samsungExperience from "@/public/work/samsung/samsung-galaxy.png";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const samsungAmazonExperience = {
    slug: "samsung-amazon-experience",
    title: "Samsung Galaxy: interactive Amazon store experience",
    description:
        "Samsung wanted a sleek, interactive Amazon Store experience to highlight their Galaxy product lineup, integrating 360° views, immersive storytelling, and platform consistency across web and Amazon Fire.",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="mb-12">
                    <h2 className={styles.h2}>Objectives</h2>
                    <div>
                        <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                            <li className={styles.li}>🙋🏻‍♀️ Showcase the Galaxy S24 Ultra and other flagship products while engaging users through high-quality visuals and an immersive interface</li>
                            <li className={styles.li}>🙋🏻‍♀️ Provide a showstopping user experience with a 360° product view using HTML canvas and Three.js</li>
                            <li className={styles.li}>🙋🏻‍♀️ Engage users with a narrative-driven design to feature product highlights</li>
                            <li className={styles.li}>🙋🏻‍♀️ Ensure consistency across Amazon's web store, mobile app, and Amazon Fire platforms</li>
                        </ul>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className={styles.h2}>Results</h2>
                    <div>
                        <ul className={styles.ul} style={{ listStyleType: 'none' }}>
                            <li className={styles.li}>✅ High user engagement (as evidenced by higher time-on-page and increased conversions)</li>
                            <li className={styles.li}>✅ Seamless Samsung experience across Amazon platforms, creating a consistent brand presence</li>
                            <li className={styles.li}>✅ Scalable design using reusable components to allow for quick adaptation to future Samsung product pages on Amazon</li>
                        </ul>
                    </div>
                </section>
            </div>

            <h2 className={styles.h2}>Highlights</h2>
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <MuxVideoPlayer
                            playbackId={"udKnSFaWpxmqlruqWXtGMCxNWVJlQpFhubWKs0202EVYw"}
                            title={'360 Viewer'}
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">360° Product View</h4>
                        <p className={styles.p}>
                            A 360-degree product view, developed with HTML canvas and Three.js, allowed users to explore the Galaxy S24 Ultra from all angles, offering an immersive, hands-on feel for the device's design.
                        </p>
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

            <section className="mb-12">
                <div>
                    <h4 className="text-xl font-semibold mb-2">Pixel Perfect Design Implementation</h4>
                    <p className={styles.p}>
                        With millions of users engaging in this experience, it was essential that the design implementation was pixel perfect across all devices and screens.
                    </p>
                </div>
            </section>

            <h2 className={styles.h2}>Challenges and Solutions</h2>
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
            <h2 className={styles.h2}>Ready for an interactive e-commerce experience?</h2>
            <section className="mb-12">
                <p className={styles.p}>This project highlighted how advanced interactive features like 360° views can elevate an e-commerce experience, if executed properly. Ready to take your e-commerce experience to the next level with interactive features like this? Let’s chat.</p>
            </section>


        </>
    ),
}; 