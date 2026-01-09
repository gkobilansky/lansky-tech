import Image from "next/image";
import introducingTemptations from "@/public/work/temptations/temptations-banner.jpeg";
import catQuiz from "@/public/work/temptations/cat-quiz-2.jpeg";
import lickablesLive from "@/public/work/temptations/lickables-live.jpeg";
import templationsMarketing from "@/public/work/temptations/temptations-marketing.png";
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
  content: () => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="mb-12">
          <h2 className={styles.h2}>Objectives</h2>
          <div>
            <ul className={styles.ul} style={{ listStyleType: 'none' }}>
              <li className={styles.li}>🙋🏻‍♀️ Boost user engagement</li>
              <li className={styles.li}>🙋🏻‍♀️ Increase product awareness</li>
              <li className={styles.li}>🙋🏻‍♀️ Integration with broader marketing campaign through interactive quiz and live content</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={styles.h2}>Results</h2>
          <div>
            <ul className={styles.ul} style={{ listStyleType: 'none' }}>
              <li className={styles.li}>✅ High user engagement with personality quiz and Lickables Live</li>
              <li className={styles.li}>✅ Increased conversions through personalized recommendations</li>
              <li className={styles.li}>✅ Improved brand awareness with memorable live content integration</li>
            </ul>
          </div>
        </section>
      </div>


      <h2 className={styles.h2}>Highlights</h2>
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-16 md:gap-24">
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
            <div className="flex items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Interactive Cat Personality Quiz</h4>
                <p className={styles.p}>
                  The "Purrr-éé Quiz" featured a bright yellow background with engaging, multiple-choice questions to determine a cat's personality and eating habits. Based on the results, users received targeted product recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center md:order-last">
              <Image
                src={lickablesLive}
                alt="Lickables Live game show"
                width={400}
                height={300}
                className="rounded-box"
              />
            </div>
            <div className="flex items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Lickables Live Integration</h4>
                <p className={styles.p}>
                  Users could watch Lickables Live, a quirky game show featuring cat judges trying out different Creamy Purrr-éé flavors. The live broadcast was integrated seamlessly, driving higher engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className={styles.h2}>Challenges and Solutions</h2>
        <Image src={templationsMarketing}
          alt="Temptations Marketing" width={700} height={500} className="rounded-box mb-8" />
        <p className={styles.p}>The two biggest challenges we faced with this project were <strong>Amazon Store restrictions</strong> and <strong>real-time integration</strong>.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Amazon Store Restrictions</h4>
            <p className={styles.p}>
              Building a complex, interactive React-powered experience within Amazon's platform was challenging, but we successfully optimized for performance while adhering to Amazon's guidelines.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Real-Time Integration</h4>
            <p className={styles.p}>
              Incorporating live TV content required backend coordination. We leveraged APIs to ensure a smooth and seamless experience between the mini site and Amazon Live.
            </p>
          </div>
        </div>
      </section>

      <h2 className={styles.h2}>Ready for a Super Engaging Marketing Campaign?</h2>
      <section>
        <p className={styles.p}>
          This project demonstrated how combining interactive, personalized content with live entertainment can elevate a brand's presence on e-commerce platforms like Amazon. The playful design, quiz-driven personalization, and real-time integration created a unique and engaging shopping experience for both cats and their owners.
        </p>
      </section>
    </>
  ),
}; 