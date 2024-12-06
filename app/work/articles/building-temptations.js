import Image from "next/image";
import introducingTemptations from "@/public/work/temptations/temptations-banner.jpeg";
import catQuiz from "@/public/work/temptations/cat-quiz-2.jpeg";
import lickablesLive from "@/public/work/temptations/lickables-live.jpeg";
import productDisplay from "@/public/work/temptations/product-display.jpeg";
import { categories, authors } from '../_assets/content';
import { styles } from '../_assets/styles';

export const buildingTemptations = {
  slug: "building-temptations",
  title: "Interactive Amazon Store Experience for Temptation's Cat Treats",
  description:
    "Temptation's Cat Treats is a popular pet food brand that specializes in cat treats. Their mission is to engage cat owners and offer tasty, fun treats for their feline companions. For this project, the goal was to create an engaging, playful mini ad site within their Amazon Store to boost user interaction and product awareness.",
  categories: [
    categories.find((category) => category.slug === "feature"),
  ],
  author: authors.find((author) => author.slug === "gene"),
  publishedAt: "2024-10-02",
  image: {
    src: introducingTemptations,
    urlRelative: "/work/temptations/temptations-banner.jpeg",
    alt: "Temptations cat treats",
  },
  content: (
    <>
      <Image
        src={introducingTemptations}
        alt="Temptations cat treats"
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
            Temptation's Cat Treats wanted to create an engaging, playful mini ad site within their Amazon Store to boost user interaction and product awareness. The client requested a React-powered mini site that would enhance their existing Amazon Store presence by including:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>A cat personality quiz</li>
            <li className={styles.li}>Live integration with Lickables Live game show</li>
            <li className={styles.li}>A design matching the playful Temptation's brand aesthetic</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={productDisplay}
            alt="Temptations cat treats product display"
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
              src={catQuiz}
              alt="Temptations cat personality quiz"
              width={400}
              height={300}
              className="rounded-box"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Cat Personality Quiz</h4>
            <p className={styles.p}>
              The "Purrr-éé Quiz" featured a bright yellow background with fun, multiple-choice questions to determine a cat's personality and eating habits. Based on the results, users received product recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Lickables Live Integration</h4>
            <p className={styles.p}>
              Users could watch Lickables Live, a quirky game show featuring cat judges trying out different Creamy Purrr-éé flavors. The live broadcast was integrated seamlessly, driving higher engagement.
            </p>
          </div>
          <div className="flex items-center justify-center order-2 md:order-1">
            <Image
              src={lickablesLive}
              alt="Lickables Live game show"
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
            <h4 className="text-xl font-semibold mb-2">Amazon Store Restrictions</h4>
            <p className={styles.p}>
              Building a complex, interactive React-powered experience within Amazon's platform was challenging. We optimized for performance while adhering to Amazon's guidelines.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Real-Time Integration</h4>
            <p className={styles.p}>
              Incorporating live TV content required backend coordination. We leveraged APIs to ensure a smooth experience between the mini site and Amazon Live.
            </p>
          </div>
        </div>
      </section>
      <h3 className={styles.h3}>Results</h3>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-200 p-6 rounded-box">
            <h4 className="text-xl font-semibold mb-2">Higher Engagement</h4>
            <p className={styles.p}>
              Users spent more time interacting with the personality quiz and watching Lickables Live.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-box">
            <h4 className="text-xl font-semibold mb-2">Increased Conversions</h4>
            <p className={styles.p}>
              Personalized quiz and product suggestions led to targeted purchases.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-box">
            <h4 className="text-xl font-semibold mb-2">Brand Awareness</h4>
            <p className={styles.p}>
              Integration of live content created a memorable way to engage with cat owners.
            </p>
          </div>
        </div>
      </section>
      <h3 className={styles.h3}>Wrap Up</h3>
      <section>
        <p className={styles.p}>
          This project demonstrated how combining interactive, personalized content with live entertainment can elevate a brand's presence on e-commerce platforms like Amazon. The playful design, quiz-driven personalization, and real-time integration created a unique and engaging shopping experience for both cats and their owners.
        </p>
      </section>
    </>
  ),
}; 