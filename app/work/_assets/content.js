import Image from "next/image";
import geneImg from "@/app/work/_assets/images/authors/gene.jpeg";
import introducingTemptations from "@/public/work/temptations/temptations-banner.jpeg";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /work/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /work/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "Recent Works",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Work",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Here are some of the recent projects I've worked on.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Recent projects.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
      // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /work/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  gene: "Gene",
};

// All the blog authors data display in the /work/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.gene,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Gene Kobilansky",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Founder of Lancekey Advisors",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Gene is a developer and an entrepreneur.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: geneImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/genekobilansky/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/gkobilansky",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /work/[articleId].js pages.
export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "building-temptations",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Interactive Amazon Store Experience for Temptation’s Cat Treats",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Temptation’s Cat Treats is a popular pet food brand that specializes in cat treats. Their mission is to engage cat owners and offer tasty, fun treats for their feline companions. For this project, the goal was to create an engaging, playful mini ad site within their Amazon Store to boost user interaction and product awareness.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.gene),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-10-02",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingTemptations,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/work/temptations/temptations-banner.jpeg",
      alt: "Temptations cat treats",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingTemptations}
          alt="Temptations cat treats"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Project Objective</h2>
          <p className={styles.p}>The client requested a React-powered mini site that would enhance their existing Amazon Store presence by including:
            <ul className={styles.ul}>
              <li className={styles.li}>A cat personality quiz to recommend the best treat flavors based on a cat's behavior and preferences.</li>
              <li className={styles.li}>Live integration with a cat-themed game show, Lickables Live, which aired on Amazon TV.</li>
              <li className={styles.li}>A design that matched the playful and cutesy aesthetic of the Temptation's brand, complete with bright, animated visuals to appeal to cat owners.</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Project Highlights</h3>
          <p className={styles.p}>
            <ol className={styles.ul}>
              <li className={styles.li}>
                <strong>Cat Personality Quiz:</strong>
                <ul className={styles.ul}>
                  <li className={styles.li}>The quiz, titled "Purrr-éé Quiz," was designed with a bright yellow background and dotted pattern, reflecting a fun, upbeat tone.</li>
                  <li className={styles.li}>The quiz consisted of three multiple-choice questions aimed at determining a cat's personality and eating habits. For example, questions like, "When you serve your cat food, the first thing they do is…", with humorous answers like, "Scarf the whole bowl down" or "Take one look at the food and nonchalantly walk away."</li>
                  <li className={styles.li}>Based on the quiz results, the user was given a recommendation, such as "Your cat is an Immersive Eater!", along with specific Temptation's product suggestions (e.g., Temptation's Creamy Puree with Chicken and Salmon).</li>
                </ul>
              </li>
              <li className={styles.li}>
                <strong>Lickables Live Integration:</strong>
                <ul className={styles.ul}>
                  <li className={styles.li}>Users could watch Lickables Live, a quirky game show featuring cat judges trying out different Creamy Purrr-éé flavors. The live broadcast was promoted prominently on the site and linked directly to Amazon Live for real-time viewing.</li>
                  <li className={styles.li}>The integration created a seamless experience where users could engage with the brand in real time, driving higher engagement.</li>
                </ul>
              </li>
              <li className={styles.li}>
                <strong>Cutesy Design and Interactive Features:</strong>
                <ul className={styles.ul}>
                  <li className={styles.li}>The visual design was heavily branded with bright yellow, playful fonts, and cartoon-like icons. Screenshots show cats enjoying the Temptations treats, enhancing the appeal to cat lovers.</li>
                  <li className={styles.li}>Animations were used throughout to reinforce the brand's cheerful, friendly vibe, particularly in the quiz and product showcase sections.</li>
                </ul>
              </li>
              <li className={styles.li}>
                <strong>Shopping and CTA:</strong>
                <ul className={styles.ul}>
                  <li className={styles.li}>After completing the quiz, users could instantly add suggested products to their carts via clear "Add to Cart" buttons, boosting conversion rates.</li>
                  <li className={styles.li}>The site featured a direct call to action: "Shop Creamy Purrr-éé," offering easy access to Temptation's Creamy Puree products, complete with reviews and pricing.</li>
                </ul>
              </li>
            </ol>
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Challenges and Solutions</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Amazon Store Restrictions:</strong> Building a complex, interactive React-powered experience within the confines of Amazon's platform was challenging. Careful attention was given to optimizing for performance and responsiveness while adhering to Amazon's guidelines.</li>
            <li className={styles.li}><strong>Real-Time Integration:</strong> Incorporating live TV content required backend coordination to ensure a smooth experience between the mini site and Amazon Live. By leveraging APIs and integrating the broadcast effectively, this hurdle was overcome.</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Results</h3>
          <p className={styles.p}>
            The final product successfully enhanced user interaction on the Temptation's Amazon Store and increased product engagement:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Higher Engagement:</strong> Users spent more time on the site interacting with the personality quiz and watching Lickables Live.</li>
            <li className={styles.li}><strong>Increased Conversions:</strong> The personalized quiz and product suggestions led to targeted purchases, with direct product links making the shopping experience seamless.</li>
            <li className={styles.li}><strong>Brand Awareness:</strong> By integrating live content with the store experience, the brand created a memorable and interactive way to engage with cat owners.</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Conclusion</h3>
          <p className={styles.p}>
            This project demonstrated how combining interactive, personalized content with live entertainment can elevate a brand's presence on e-commerce platforms like Amazon. The playful, cutesy design, quiz-driven personalization, and real-time integration with a live show created a unique and engaging shopping experience for both cats and their owners.
          </p>
        </section>


      </>
    ),
  },
];
