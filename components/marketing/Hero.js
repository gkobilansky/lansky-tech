import TestimonialsAvatars from "./testimonials/TestimonialsAvatars";
import Image from "next/image";

const goToIntro = (e) => {
  e.preventDefault();
  document.getElementById('prices').scrollIntoView({ behavior: 'smooth' });
}


const Hero = () => {


  return (
    <section className="max-w-7xl mx-auto bg-base-100 bg-opacity-90 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-24 md:py-32 lg:pt-52">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-5xl md:-mb-4 brightness-150 contrast-150">
          <span className="bg-clip-text text-5xl lg:text-6xl uppercase text-transparent tracking-tight leading-relaxed bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00]">Web tech</span>
          <br />
          <span
            data-hlg-name="hero-tagline"
            data-hlg-variants='["that moves the needle.", "that helps you ship faster.", "that scales with you."]'
            suppressHydrationWarning
          >that moves the needle.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        You're small but <strong>mighty, and ready to grow</strong> — you just need the right tech to do it. We can build that for you. <em>Fast.</em><br/>
        <a href="#intro" className="link link-hover" onClick={(e) => {
            goToIntro(e);
          }} data-hlg-convert="hero-tagline"><span className="bg-warning/25 px-1.5 leading-10">↓ Let's get started</span></a>
        </p>

        <div className="lg:hidden w-full">
          <Image src="/lansky-solutions.png" alt="Lansky Solutions" width={7041} height={5788} className="mx-auto max-w-full m-10" priority />
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full hidden lg:block">
        <Image src="/lansky-solutions.png" alt="Lansky Solutions" width={7041} height={5788} className="mx-auto max-w-full m-10" priority />
      </div>
    </section>
  );
};

export default Hero;