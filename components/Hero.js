import TestimonialsAvatars from "./TestimonialsAvatars";
import MuxPlayer from "@mux/mux-player-react"; 
import "@mux/mux-player/themes/minimal";


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 bg-opacity-80 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 mt-32 lg:mt-40 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 brightness-150 contrast-150">
          Web dev to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]"> help you grow.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Listen. Build. Test. Repeat. A simple process with powerful results.
        </p>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        {/* <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 [box-shadow:4px_-4px_24px_-2px_rgba(59,130,246,0.3)]"> */}
        <MuxPlayer
          playbackId="ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg"
          metadata={{
            video_id: "ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg",
            video_title: "Lansky Tech Hero Video",
            video_description: "Try-on feature that leads to checkout",
          }}
          accentColor="#FFCC00"
          theme="minimal"
          style={{ aspectRatio: 4/3}}
          autoPlay
          muted 
          loop
          playsInline
         />
         </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;