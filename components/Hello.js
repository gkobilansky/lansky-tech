import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Link from "next/link";

const Hello = () => {
  return (
    <section className="mx-auto bg-neutral text-neutral-content flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start max-w-lg">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Hello. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">I'm Gene.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          I've been helping startups and businesses grow since 2007. In my 18 years of experience, I've seen a lot of projects fail.
        </p>
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
