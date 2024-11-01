import Image from "next/image";

const Hello = () => {
  return (
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
        <div className="hidden lg:block absolute bottom-[-500px] left-1/2 transform -translate-x-1/2">
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
        <div className="hidden lg:block absolute bottom-[-1000px] left-1/2 transform -translate-x-1/2">
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
            <span className="text-sm mt-8">Almost there</span>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-[-1500px] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-primary">
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
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm mt-8">Thanks for reading!</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start max-w-lg">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Hello. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">I'm Gene.</span>
        </h1>
        <p className="text-lg leading-relaxed">
          👋 Gene Kobi<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">lansky</span>. Since 2007, I've been worked in different ways to businesses implement technology successfully. Over nearly two decades, I've been in the trenches of technology development, learning not just from projects that excel but also from those that missed the mark. This journey is what inspired me to start Lansky Technology—not just to offer expert development, but to be a strategic partner, one that genuinely understands the ingredients of sustainable growth.</p>
        <p className="text-lg leading-relaxed">
          My career began in enterprise environments, where I cut my teeth developing learning management systems and franchisee billing portals, tackling Oracle ERP integrations, MySQL reporting, and the world of on-site infrastructure. This foundation taught me the value of rigorous planning and the importance of efficient systems, skills that have only grown as I transitioned to web development and ventured into building my own products.
        </p>
        <p className="text-lg leading-relaxed">Today, Lansky Technology blends technical expertise with an eye for business results. Our experience covers everything from architecting custom Amazon experiences, like interactive product viewers for Samsung, to developing innovative eCommerce solutions that drive tangible revenue growth for clients. For instance, we helped Whittemore House, a top NYC salon, achieve a 10x increase in online sales through a thoughtfully crafted eCommerce platform.</p> 
        <p className="text-lg leading-relaxed"> My approach is deeply collaborative. At Lansky Technology, we work alongside our clients to create tailored, high-impact solutions—whether that's streamlining a customer's journey or managing a strategic roadmap. Every project we take on is a chance to combine technical expertise with a nuanced understanding of what drives business outcomes. Clients trust us not only because we can deliver, but because we're invested in their bottom line. </p>
        <p className="text-lg leading-relaxed">Let's transform your next big idea into a solution that drives growth and builds lasting value.</p>
        <p className="text-lg leading-relaxed">🇺🇦 On a personal note, the war in Ukraine has hit close to home for me. Every morning I check the news hoping the country where I was born has managed to deoccupy more land and free more of our people. I make it a point to work with Ukrainian devloper and Ukranian companies as much as I can.  The company has donated to varius charities that help civilians and the armed forces - this devestating agression in Europe can not stand. If you want to help too, here's some links:</p>
        <ul className="list-disc leading-relaxed">
          <li><a href="https://ukrainedefensefund.org/" className="underline" target="_blank" rel="noopener noreferrer">Ukraine Defense Fund</a> - One of the most effective USA based  charities working to provide high impact front line support.</li>
          <li><a href="https://gators4ukraine.org/" className="underline" target="_blank" rel="noopener noreferrer">Gators4Ukraine</a> - a Florida based charity working directly with front line troops.</li>
          <li><a href="https://ua24.com" className="underline" target="_blank" rel="noopener noreferrer">UA24</a> - Ukraian Government Fundraising Initiative</li>
          <li><a href="https://www.youtube.com/@timothysnyder5948" className="underline" target="_blank" rel="noopener noreferrer">Timothy Snyder</a> - Professor of History at Yale University, Author of "On Tyranny" - a must watch for understanding the situation in Ukraine.</li>
          <li><a href="https://www.youtube.com/@DenysDavydov" className="underline" target="_blank" rel="noopener noreferrer">Denys Davydov</a> - a Ukrainian pilot giving daily updates on the situation.</li>
        </ul>
      </div>
    </section>
  );
};

export default Hello;
