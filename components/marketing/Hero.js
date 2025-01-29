import TestimonialsAvatars from "./testimonials/TestimonialsAvatars";
import Image from "next/image";

const goToIntro = (e) => {
  e.preventDefault();
  document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
}


const Hero = () => {


  return (
    <section className="max-w-7xl mx-auto bg-base-100 bg-opacity-90 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-24 md:py-32 lg:pt-52">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4 brightness-150 contrast-150">
        <span className="bg-clip-text text-transparent bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00] animate-hue">TECH MADE FOR GROWTH.</span><br/>
          <span className="leading-relaxed">NOT BLOAT.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        You're small but <strong>mighty, and ready to grow</strong> — you just need the right tech to do it. You've come to the right place.<br/>
        <a href="#intro" className="link link-hover" onClick={(e) => {
            goToIntro(e);
          }}><span className="bg-warning/25 px-1.5 leading-10">↓ Let's chat</span></a>
        </p>

        <TestimonialsAvatars priority={true} />
        <a
          href="#intro"
          className="group flex items-center gap-2 text-lg font-semibold hover:underline lg:hidden"
          onClick={(e) => {
            goToIntro(e);
          }}
        >
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:animate-bounce"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="lg:w-full">
      <Image src="/lansky-solutions.png" alt="Lansky Solutions" width={7041} height={5788} className="mx-auto max-w-full m-10" />

        {/* <MuxVideoSlider videos={videos} /> */}
      </div>
    </section>
  );
};

export default Hero;