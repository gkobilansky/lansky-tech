import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import praxis from "@/public/work/praxis/elements_macbook_iphone.webp";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const gmbPraxisApp = {
  slug: "gmb-praxis-app",
  title: "GMB Praxis: Adaptive Fitness App for Physical Autonomy",
  description:
    "GMB Praxis empowers users to improve strength, flexibility, and control with custom adaptive sessions, flexible durations, and seamless video streaming.",
  categories: [
    categories.find((category) => category.slug === "feature"),
  ],
  author: authors.find((author) => author.slug === "gene"),
  publishedAt: "2024-10-30",
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
      <h3 className={styles.h3}>Objectives</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className={styles.p}>
            GMB Praxis was designed to deliver a seamless, adaptive fitness experience. The goal was to provide users with customizable workout durations, high-quality video streaming, and real-time progress tracking. The project involved:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Custom video controls for personalized sessions</li>
            <li className={styles.li}>Dynamic scheduling and session adaptability</li>
            <li className={styles.li}>Scalable architecture to support high traffic</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={praxis}
            alt="GMB Praxis session management"
            width={400}
            height={400}
            className="rounded-box"
          />
        </div>
      </section>
      <h2 className={styles.h3}>Highlights</h2>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={praxis}
              alt="Custom video controls"
              width={400}
              height={300}
              className="rounded-box"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Custom Video Controls</h4>
            <p className={styles.p}>
              Our custom video controls allow users to set session duration and adjust exercise intensity. This flexible design helps users tailor workouts to their schedules and fitness levels.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Adaptive Video Quality</h4>
            <p className={styles.p}>
              Using Mux for video streaming, the app automatically adjusts video quality based on the user's bandwidth, delivering uninterrupted sessions across all devices.
            </p>
          </div>
          <div className="flex items-center justify-center order-2 md:order-1">
            <Image
              src={praxis}
              alt="Adaptive video streaming with Mux"
              width={400}
              height={300}
              className="rounded-box"
            />
          </div>
        </div>
      </section>
      <h3 className={styles.h3}>Challenges and Solutions</h3>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <h3 className={styles.h3}>Results</h3>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-200 p-6 rounded-box">
            <h4 className="text-xl font-semibold mb-2">User Engagement</h4>
            <p className={styles.p}>
              Users have reported greater consistency and motivation, thanks to the adaptable session lengths and personalized controls.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-box">
            <h4 className="text-xl font-semibold mb-2">Positive Feedback</h4>
            <p className={styles.p}>
              GMB Praxis users frequently praise the app's flexibility and seamless streaming, which contribute to a smooth training experience.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-box">
            <h4 className="text-xl font-semibold mb-2">Scalable Design</h4>
            <p className={styles.p}>
              The backend architecture supports future growth, ensuring long-term stability and easy feature integration.
            </p>
          </div>
        </div>
      </section>
      <h3 className={styles.h3}>Wrap Up</h3>
      <section>
        <p className={styles.p}>
          Developing GMB Praxis was a rewarding experience that highlighted the importance of user-focused adaptive design in fitness applications. This project reflects my commitment to building scalable, flexible solutions tailored to user needs, aligning technology with GMB's mission to promote Physical Autonomy.
        </p>
      </section>
    </>
  ),
}; 