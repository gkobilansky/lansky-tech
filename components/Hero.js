import TestimonialsAvatars from "./TestimonialsAvatars";
import MuxPlayer from "@mux/mux-player-react/lazy"; 
import "@mux/mux-player/themes/minimal";


const Hero = () => {

  return (
    <section className="max-w-7xl mx-auto bg-base-100 bg-opacity-80 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 mt-32 lg:mt-40 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4 brightness-150 contrast-150">
          Web Dev.<br/>
          <span className="bg-clip-text whitespace-nowrap text-transparent bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00] animate-shimmer">Done Right.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Listen. Build. Test. Repeat. A simple process with powerful results. 
        </p>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <MuxPlayer
          lazyLoad="viewport"
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