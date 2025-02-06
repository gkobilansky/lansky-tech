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
        <span className="bg-clip-text uppercase text-transparent bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00] animate-hue">Engage with your customers in weeks.</span><br/>
          <span className="leading-relaxed"><em>Not months</em>.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        You're small but <strong>mighty, and ready to grow</strong> — you just need the right tech to do it. We can build that for you. <em>Fast.</em><br/>
        <a href="#intro" className="link link-hover" onClick={(e) => {
            goToIntro(e);
          }}><span className="bg-warning/25 px-1.5 leading-10">↓ Let's get started</span></a>
        </p>

        <div className="lg:hidden w-full">
          <Image src="/lansky-solutions.png" alt="Lansky Solutions" width={7041} height={5788} className="mx-auto max-w-full m-10" />
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full hidden lg:block">
        <Image src="/lansky-solutions.png" alt="Lansky Solutions" width={7041} height={5788} className="mx-auto max-w-full m-10" />
      </div>
    </section>
  );
};

export default Hero;