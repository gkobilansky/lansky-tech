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
            👋 Gene Kobi<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">lansky</span>. Since 2007, I've been worked in different ways to businesses implement technology successfully. Over nearly two decades, I've been in the trenches of technology development, learning not just from projects that excel but also from those that missed the mark. This journey is what inspired me to start Lansky Technology—not just to offer expert development, but to be a strategic partner, one that genuinely understands the ingredients of sustainable growth.</p>
        </div>
      </section>

      <section className="mx-auto bg-neutral text-neutral-content px-8 py-8 lg:py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">🏢</div>
              <h3 className="text-xl font-bold">Enterprise Foundations</h3>
              <p className="text-lg leading-relaxed">
                My career began in enterprise environments, developing learning management systems, franchisee billing portals, and tackling Oracle ERP integrations.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold">Modern Solutions</h3>
              <p className="text-lg leading-relaxed">
                Today, we create custom experiences for brands like Samsung and develop innovative eCommerce solutions driving 10x growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-lg bg-neutral-focus">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-bold">Collaborative Approach</h3>
              <p className="text-lg leading-relaxed">
                We work alongside clients to create tailored, high-impact solutions that streamline customer journeys and manage strategic roadmaps.
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
        </div>
      </section>
    </>
  );
};

export default Hello;
