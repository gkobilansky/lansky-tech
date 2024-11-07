import Image from "next/image";

const Hello = () => {
  return (
    <>
      <section className="mx-auto bg-neutral text-neutral-content flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20" id="hello">
        <div className="lg:w-1/8 order-first lg:order-last relative">
          <Image
            src="/gene-and-fam.jpeg"
            alt="Gene Kobilansky"
            className="w-full rounded-2xl"
            priority={true}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start max-w-lg">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
            Hello. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">I'm Gene.</span>
          </h1>
          <p className="text-lg leading-relaxed">
            👋 Gene Kobi<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">lansky</span>. From online learning sysems to interactive nail-color pickers; over a career of nearly two decades, I've helped businesses implement technology successfully in many different ways. Two things I've learned: iterative improvements add up faster than you think, and can make a big difference, and collaboration is the true driver of business value. I started Lansky Technology with these learnings in mind — not just to offer expert development, but to be a trusted advisor.</p>
        </div>
      </section>

      <section className="mx-auto bg-neutral text-neutral-content px-8 py-8 lg:py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">🏢</div>
              <h3 className="text-xl font-bold">Enterprise Foundations</h3>
              <p className="text-lg leading-relaxed">
                My career began in enterprise environments, developing learning management systems, franchisee billing portals, and tackling Oracle ERP integrations. These experiences helped me develop a feel for aligning technology with business goals.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold">Modern Solutions</h3>
              <p className="text-lg leading-relaxed">
                Today, we create custom experiences for top brands and growing startups. We setup innovative ecommerce and payment systems, driving growth. We build marketing sites optimized for your perfect customer's journey.   
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-bold">Collaborative Approach</h3>
              <p className="text-lg leading-relaxed">
                Let's work together to create tailored, high-impact experiences for your customers and users.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">📈</div>
              <h3 className="text-xl font-bold">Results Driven</h3>
              <p className="text-lg leading-relaxed">
                Every project combines technical expertise with business acumen, focusing on driving growth and building lasting value.
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
