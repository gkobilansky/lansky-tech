import Image from "next/image";
import ButtonLead from "../ui/ButtonLead";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hello = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: false });

  return (
    <>
      <section className="mx-auto bg-base-100 bg-opacity-80 text-neutral-content px-10 lg:px-24 pt-24 md:pt-32 md:pb-12" id="hello">
        <div className="px-10 lg:px-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-8">
            👋
            <p className="font-medium text-primary text-sm">Hello</p>
          </div>
          <h2 className="font-extrabold text-3xl lg:text-6xl text-center tracking-tight mb-4 md:mb-8">
            What if web development could be <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">faster, easier, and simpler?</span>
          </h2>
        </div>
        <div className="leading-relaxed text-base-content/80 my-20 max-w-xl mx-auto flex flex-col gap-6 justify-start">
          <div className="flex items-center gap-6">
            <motion.div
              ref={imageRef}
              animate={{ rotate: isInView ? 7 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/gene-kobilansky-headshot-yellow-bg.png"
                alt="Gene Kobilansky photo on yellow background"
                width={125}
                height={125}
                className="rounded-full"
              />
            </motion.div>

            <p className="text-base-content text-lg font-medium">Hi, I'm Gene Kobilansky, founder of Lansky Tech, and that is <strong>exactly my specialty</strong>.</p>
          </div>
          <p className="text-lg max-w-4xl">I've worked with companies of all sizes — from small charity organizations just getting off the ground, to some of the biggest companies in the world, like Amazon and Samsung.
            You know what they've all had in common?
            They needed the right tech solutions to help them grow, with as little tech bloat as possible (yes, even the Amazons of the world want high-quality tech as quickly and simply as possible).
          </p>
          <p className="text-lg max-w-4xl">I look forward to hearing from you. Send me a note below.</p>
          <Image 
            src="/gk-initials-white.png" 
            alt="Gene Kobilansky signature" 
            width={1920} 
            height={1080} 
            className="ml-auto max-w-60 mb-12" 
          />
          <ButtonLead />

        </div>
      </section>
    </>
  );
};

export default Hello;
