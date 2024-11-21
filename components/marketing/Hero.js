import TestimonialsAvatars from "./testimonials/TestimonialsAvatars";
import MuxPlayer from "@mux/mux-player-react"; 
import "@mux/mux-player/themes/minimal";


const Hero = () => {

  return (
    <section className="max-w-7xl mx-auto bg-base-100 bg-opacity-80 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-24 md:py-32 lg:pt-52">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4 brightness-150 contrast-150">
          Web Dev.<br/>
          <span className="bg-clip-text whitespace-nowrap text-transparent bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00] animate-shimmer">Done Right.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Listen. Build. Test. Repeat. A simple process with powerful results. 
        </p>

        <TestimonialsAvatars priority={true} />
        <a
          href="#intro"
          className="group flex items-center gap-2 text-lg font-semibold hover:underline lg:hidden"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
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
        <MuxPlayer
          playbackId="ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg"
          metadata={{
            video_id: "ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg",
            video_title: "Lansky Tech Hero Video",
            video_description: "Try-on feature that leads to checkout",
          }}
          accentColor="#FFCC00"
          theme="minimal"
          style={{ aspectRatio: 4/3, '--controls': 'none', display: 'block', borderRadius: '1rem', overflow: 'hidden' }}
          thumbnailTime={0}
          autoPlay
          muted 
          loop
          playsInline
          controls="none"
         />
         </div>
    </section>
  );
};

export default Hero;