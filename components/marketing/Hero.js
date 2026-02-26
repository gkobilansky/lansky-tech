import TestimonialsAvatars from "./testimonials/TestimonialsAvatars";
import Image from "next/image";

const goToIntro = (e) => {
  e.preventDefault();
  document.getElementById('prices').scrollIntoView({ behavior: 'smooth' });
}


const Hero = () => {


  return (
    <section className="relative max-w-7xl mx-auto bg-base-100 bg-opacity-90 px-8 py-24 md:py-32 lg:pt-52">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Text Content - Overlapping */}
        <div className="lg:col-span-7 lg:col-start-1 z-10 flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="opacity-0 animate-fade-in-up" style={{ fontFamily: 'var(--font-serif)' }}>
          <span className="block text-6xl lg:text-8xl font-normal mb-2 gradient-text bg-gradient-to-br from-[#0066CC] via-[#0088FF] to-[#FFCC00] tracking-tight leading-[1.1]">
            Web tech
          </span>
          <span
            className="block text-4xl lg:text-6xl font-light tracking-tight leading-tight opacity-90"
            data-hlg-name="hero-tagline"
            data-hlg-variants='["that moves the needle.", "that helps you ship faster.", "that scales with you."]'
            suppressHydrationWarning
          >
            that moves the needle.
          </span>
        </h1>
        <p className="text-lg lg:text-xl opacity-80 leading-relaxed max-w-xl opacity-0 animate-fade-in-up delay-200">
          You're small but <strong className="font-semibold text-white">mighty, and ready to grow</strong> — you just need the right tech to do it. We can build that for you. <em className="font-serif italic">Fast.</em>
          <br/>
          <a
            href="#intro"
            className="inline-block mt-4 link link-hover group transition-all duration-300"
            onClick={(e) => {
              goToIntro(e);
            }}
            data-hlg-convert="hero-tagline"
          >
            <span className="bg-warning/20 hover:bg-warning/30 px-3 py-1 leading-10 transition-all duration-300 border-l-2 border-warning/60 group-hover:border-warning group-hover:pl-4">
              ↓ Let's get started
            </span>
          </a>
        </p>

        <div className="opacity-0 animate-fade-in-up delay-400">
            <TestimonialsAvatars priority={true} />
          </div>
        </div>

        {/* Image - Overlapping and breaking out */}
        <div className="lg:col-span-6 lg:col-start-6 opacity-0 animate-fade-in delay-300 relative">
          {/* Decorative gradient blob behind image */}
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />

          <div className="relative scale-[1.4] origin-left">
            <Image
              src="/lansky-solutions.png"
              alt="Lansky Solutions"
              width={7041}
              height={5788}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full opacity-0 animate-fade-in delay-300">
          <Image
            src="/lansky-solutions.png"
            alt="Lansky Solutions"
            width={7041}
            height={5788}
            className="mx-auto max-w-full m-10 scale-[1.4]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;