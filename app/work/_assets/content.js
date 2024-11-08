import Image from "next/image";
import geneImg from "@/app/work/_assets/images/authors/gene.jpeg";
import introducingTemptations from "@/public/work/temptations/temptations-banner.jpeg";
import catQuiz from "@/public/work/temptations/cat-quiz-2.jpeg";
import lickablesLive from "@/public/work/temptations/lickables-live.jpeg";
import productDisplay from "@/public/work/temptations/product-display.jpeg";
import samsungExperience from "@/public/work/samsung/samsung-galaxy.png";
import goBig from "@/public/work/samsung/galaxy-go-big.png";
import praxis from "@/public/work/praxis/elements_macbook_iphone.webp";

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
    job: "Founder of Lansky Tech",
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
  ul: "list-inside list-disc text-base-content/90 leading-relaxed pl-4", // Added pl-4 for left padding
  li: "list-item pl-2", // Added pl-2 for additional indent on list items
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
    title: "Interactive Amazon Store Experience for Temptation's Cat Treats",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Temptation's Cat Treats is a popular pet food brand that specializes in cat treats. Their mission is to engage cat owners and offer tasty, fun treats for their feline companions. For this project, the goal was to create an engaging, playful mini ad site within their Amazon Store to boost user interaction and product awareness.",
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
              src={productDisplay.src}
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
                src={catQuiz.src}
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
                src={lickablesLive.src}
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
  },
  {
    slug: "samsung-amazon-experience",
    title: "Samsung x Amazon Store Interactive Experience",
    description:
      "A React-based interactive Amazon Store experience for Samsung's Galaxy lineup, integrating 360° views, immersive storytelling, and platform consistency across web and Amazon Fire.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    author: authors.find((author) => author.slug === authorSlugs.gene),
    publishedAt: "2024-10-30",
    image: {
      src: samsungExperience,
      urlRelative: "/work/samsung/samsung-banner.jpeg",
      alt: "Samsung Galaxy S24 Ultra",
    },
    content: (
      <>
        <Image
          src={samsungExperience}
          alt="Samsung Galaxy S24 Ultra"
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
              Samsung wanted a sleek, interactive Amazon Store experience to highlight their Galaxy product lineup. The goal was to showcase the Galaxy S24 Ultra and other flagship products while engaging users through high-quality visuals and an immersive interface. The project included:
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>A 360° product view using HTML canvas and Three.js</li>
              <li className={styles.li}>An engaging, narrative-driven design to feature product highlights</li>
              <li className={styles.li}>Consistency across Amazon's web store and Amazon Fire platforms</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={goBig.src}
              alt="Samsung Galaxy product display"
              width={400}
              height={400}
              className="rounded-box"
            />
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
              <Image
                src={goBig.src}
                alt="360-degree view of Samsung Galaxy S24 Ultra"
                width={400}
                height={300}
                className="rounded-box"
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
              <Image
                src={goBig.src}
                alt="Samsung on Amazon Fire"
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
            This project highlighted how advanced interactive features like 360° views can elevate an e-commerce experience. By leveraging Three.js and an Amazon-friendly framework, I delivered an engaging, consistent experience that aligns Samsung’s brand with Amazon’s platform.
          </p>
        </section>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "gmb-praxis-app",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "GMB Praxis: Adaptive Fitness App for Physical Autonomy",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "GMB Praxis empowers users to improve strength, flexibility, and control with custom adaptive sessions, flexible durations, and seamless video streaming.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.gene),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-10-30",
    image: {
      // The image to display in <CardArticle /> components.
      src: praxis,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/work/praxis/praxis.jpeg",
      alt: "GMB Praxis web app interface",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
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
  }
];