import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Link from "next/link";

const Hello = () => {
  return (
    <section className="mx-auto bg-neutral text-neutral-content flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start max-w-lg">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Hello. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">I'm Gene.</span>
        </h1>
        <p className="text-lg leading-relaxed">
        👋 Gene Kobi<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">lansky</span>. I've been helping startups and businesses grow since 2007. In my 18 years of experience, I've seen enough projects fail— to learn what makes the special ones succeed. That's why I started Lansky Technology: to offer clients not just development expertise but a strategic partner who understands what drives sustainable growth.
        </p>
        <p className="text-lg leading-relaxed">🇺🇦 On a personal note, I've been torn up about the war in Ukraine. I've been donating to the Ukrainian army and helping refugees. If you want to help too, here's a <a href="https://ukrainedefensefund.org/" target="_blank" rel="noopener noreferrer">link</a> to the Ukrainian army.</p>
      </div>
      <div className="lg:w-1/8">
        <Image
          src="/gene-and-fam.jpeg"
          alt="Gene Kobilansky"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hello;
