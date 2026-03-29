import Image from "next/image";
import praxis from "@/public/work/praxis/elements_macbook_iphone.webp";
import praxisSuccess from "@/public/work/praxis/praxis-success.png";
import gmb2025 from "@/public/work/praxis/gmb-2025.png";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';
import MuxVideoPlayer from "../_assets/components/MuxVideoPlayer";

export const gmbPraxisApp = {
  slug: "gmb-praxis-app",
  title: "GMB Praxis: adaptive fitness app for physical autonomy",
  description: "GMB is a tech-enabled fitness company that helps its clients achieve the foundations of physical autonomy: strength, flexibility, and control. We built and optimized GMB Praxis, a web app with custom adaptive sessions, flexible scheduling and durations, and seamless video streaming.",
  categories: [
    categories.find((category) => category.slug === "feature"),
  ],
  author: authors.find((author) => author.slug === "gene"),
  publishedAt: "2025-01-15",
  image: {
    src: praxis,
    urlRelative: "/work/praxis/praxis.jpeg",
    alt: "GMB Praxis web app interface",
  },
  content: (
    <>
      <Image
        src={praxis}
        alt="GMB Praxis web app interface"
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
            <li className={styles.li}>🙋🏻‍♀️ Create a delightful experience for users</li>
            <li className={styles.li}>🙋🏻‍♀️ Increase client engagement in GMB's fitness programs</li>
            <li className={styles.li}>🙋🏻‍♀️ Seamlessly integrate all of GMB's programs to allow for full user customization</li>
            <li className={styles.li}>🙋🏻‍♀️ Allow for dynamic scheduling and session adaptability</li>
            <li className={styles.li}>🙋🏻‍♀️ Support high traffic with a scalable architecture</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.h2}>Results</h2>
          <ul className={styles.ul} style={{ listStyleType: 'none' }}>
            <li className={styles.li}>✅ App supports over 10k active monthly users</li>
            <li className={styles.li}>✅ Designed for growth and scalability</li>
            <li className={styles.li}>✅ Increased user engagement</li>
            <li className={styles.li}>✅ Improved video streaming experience by 35%</li>
            <li className={styles.li}>✅ 47% improvement in page experience score</li>
            <li className={styles.li}>✅ 4.9 star rating from users</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
      <h2 className={styles.h2}>Highlights</h2>
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {/* First highlight - Image on left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
             <MuxVideoPlayer
                playbackId={"t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g"}
                controls={true}
              />
            </div>
            <div className="flex items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Daily User Customization</h4>
                <p className={styles.p}>
                  Users can adjust the intensity level, workout schedule, and session duration each day, depending on how they are feeling that day. This flexible design is unlike any other fitness apps on the market.
                </p>
              </div>
            </div>
          </div>

          {/* Second highlight - Image on right */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="flex items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Adaptive Video Quality</h4>
                <p className={styles.p}>
                  Using Mux for video streaming, the app automatically adjusts video quality based on the user's bandwidth, delivering uninterrupted sessions across all devices.
                </p>
              </div>
            </div>
          </div>

          {/* Third highlight - Image on left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <MuxVideoPlayer
                playbackId={"II9mWO3uKi49PP00q700lNSaN8gjIAy81lIGohwUymDj00"}
                controls={true}
              />
            </div>
            <div className="flex items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Simplified App</h4>
                <p className={styles.p}>
                  We took the initial app from buggy and complex to simple and seamless by simplifying the tech and prioritizing ease of use — for both the end user and admins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
      <h2 className={styles.h2}>Challenges and Solutions</h2>
      <Image
        src={praxisSuccess}
        alt="GMB Praxis success story"
        width={700}
        height={500}
        className="mb-12 !mt-0"
        priority={true}
      />
        <p className={styles.p}>The two biggest challenges we faced with this project were <strong>scalability</strong> and <strong>simplicity</strong>.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Scalability</h4>
            <p className={styles.p}>
              To handle high user traffic, I implemented a scalable backend using Nest.js and PostgreSQL, ensuring smooth data management and performance.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">User Interface Simplicity</h4>
            <p className={styles.p}>
              Balancing the complexity of adaptive controls with a simple interface was a priority. The solution involved minimalistic, intuitive designs that enhance user engagement without overwhelming them.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className={styles.h2}>2025: Continued Evolution</h2>
        <Image
          src={gmb2025}
          alt="GMB Praxis 2025 interface"
          width={700}
          height={500}
          className="rounded-box mb-8"
          placeholder="blur"
        />
        <p className={styles.p}>In 2025, I shipped 52+ releases to the GMB platform — a testament to continuous delivery and close collaboration with the team. Major improvements included:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Achievement System</h4>
            <p className={styles.p}>
              Built a gamified achievements system to celebrate user milestones — workout streaks, program completions, and personal bests. This drove measurable increases in user retention and daily engagement.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Video Management Overhaul</h4>
            <p className={styles.p}>
              Rebuilt the video asset pipeline with improved subtitle extraction, better Mux API integration, and analysis tools. This gave the content team faster turnaround on new programs and exercises.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
      <h2 className={styles.h2}>Ready to build an adaptive, scalable app?</h2>
        <p className={styles.p}>
        GMB Praxis is a good representation of my commitment to building scalable, flexible solutions tailored to the needs of both the client and the end-user. Ready to build yours? Let&apos;s chat.
        </p>
      </section>
    </>
  ),
}; 