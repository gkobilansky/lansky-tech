import Image from "next/image";

const Hello = () => {
  return (
    <section className="mx-auto bg-neutral text-neutral-content flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20" id="hello">
      <div className="lg:w-1/8 order-first lg:order-last relative">
        <Image
          src="/gene-and-fam.jpeg"
          alt="Gene Kobilansky"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
        <div className="hidden lg:block absolute bottom-[-350px] left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce flex flex-col items-center text-primary">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
            <span className="text-sm mt-8">A little further</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start max-w-lg">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Hello. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">I'm Gene.</span>
        </h1>
        <p className="text-lg leading-relaxed">
        👋 Gene Kobi<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">lansky</span>. I've been helping startups and businesses grow since 2007. In my 18 years of experience, I've seen enough projects fail— to learn what makes the special ones succeed. That's why I started Lansky Technology: to offer clients not just development expertise but a strategic partner who understands what drives sustainable growth.
        </p>
        <p className="text-lg leading-relaxed">
          I started my career building a learning management system and a franchisee facing billing portal. In those early days, I cut my technology teeth on Oracle ERP implementations, MySQL reports, waterfall development, and on-site infrastructure projects. I taught myself to web development and to built my own products after leaving the corporate world.
        </p>
        <p className="text-lg leading-relaxed">
          It's this unique blend of experience that allows us to get to the meat of any issue for our clients - whether that's nailing down frictionless user flows, building scalable systems, or managing product strategy.
        </p>
        <p className="text-lg leading-relaxed">🇺🇦 On a personal note, The war in Ukraine has hit close to home for me. Every morning I check the news  I've been donating to the Ukrainian army and spreading the word - this devestating agression in Europe can not stand. If you want to help too, here's some links:</p>
          <ul className="list-disc list-inside">
            <li><a href="https://ukrainedefensefund.org/" className="underline" target="_blank" rel="noopener noreferrer">Ukrainian Defense Fund</a></li>
            <li><a href="https://gators4ukraine.org/" className="underline" target="_blank" rel="noopener noreferrer">Gators4Ukraine</a></li>
            <li><a href="https://www.comebackalive.in.ua/en" className="underline" target="_blank" rel="noopener noreferrer">Come Back Alive</a></li>
            <li><a href="https://savelife.in.ua/en" className="underline" target="_blank" rel="noopener noreferrer">Save Life</a></li>
            <li><a href="https://war.ukraine.ua/en" className="underline" target="_blank" rel="noopener noreferrer">War.Ukraine.ua</a></li>
          </ul>
      </div>
    </section>
  );
};

export default Hello;
