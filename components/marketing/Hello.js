import Image from "next/image";

const Hello = () => {
  return (
    <>
      <section className="mx-auto bg-neutral text-neutral-content flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-20 px-8 py-24 md:py-32" id="hello">
        <div className="lg:w-1/8 order-first lg:order-last relative">
          <Image
            src="/gene-and-fam.jpeg"
            alt="Gene Kobilansky"
            className="rounded-2xl object-cover"
            priority={true}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start max-w-lg">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
            Hello. <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">I'm Gene.</span>
          </h1>
          <p className="text-lg leading-relaxed">
            👋 Gene Kobi<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">lansky</span>, a technology leader with proven success at Fortune 100 companies and startups alike. From creating a custom Amazon experience for Samsung to scaling a fitness and training platforms to 120,000+ users, I specialize in creating high-impact digital solutions that drive measurable business growth.
          </p>
        </div>
      </section>

      <section className="mx-auto bg-neutral text-neutral-content px-8 py-8 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl flex justify-center w-full">🚀</div>
              <h3 className="text-xl font-bold text-center w-full">Enterprise-Grade Solutions</h3>
              <p className="text-lg leading-relaxed text-justify">
                Whether it's an Oracle ERP implementation or a custom e-commerce platform, we deliver scalable solutions that delight users. One recently launched video streaming upgrate achieved a 93% improvement in user experience.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl flex justify-center w-full">📈</div>
              <h3 className="text-xl font-bold text-center w-full">Growth-Driven Development</h3>
              <p className="text-lg leading-relaxed text-justify">
                From helping a charity improve their donation conversion rate by 7% to generating $30,000+ in savings through a franchise billing system, we deliver measurable results. Our solutions combine technical excellence with proven business impact.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl flex justify-center w-full">🤝</div>
              <h3 className="text-xl font-bold text-center w-full">Full-Stack Expertise</h3>
              <p className="text-lg leading-relaxed text-justify">
                With deep experience in React, Node.js, AWS, and modern web technologies, we build end-to-end solutions that directly address your business needs.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl flex justify-center w-full">🎯</div>
              <h3 className="text-xl font-bold text-center w-full">Product Leadership</h3>
              <p className="text-lg leading-relaxed text-justify">
                From leading development teams to managing multi-million dollar projects, we bring proven experience in product strategy and technical execution to every engagement.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg leading-relaxed">
              Whether you're looking to launch a new digital product, market your brand, or improve your checkout experience, our blend of enterprise experience and startup agility positions us uniquely to help. We don't just build solutions — we partner with you to create lasting technological change that drives real business growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hello;
