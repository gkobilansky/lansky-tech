"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { articles } from "@/app/work/articles";
import CardArticle from "@/app/work/_assets/components/CardArticle";
import MuxVideoSlider from "@/app/work/_assets/components/MuxVideoSlider";

const videos = [
  {
    playbackId: "ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg",
    metadata: {
      video_id: "ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg",
      video_title: "Lansky Tech Hero Video",
      video_description: "Try-on feature that leads to checkout",
    }
  },
  {
    playbackId: "t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g",
    metadata: {
      video_id: "t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g",
      video_title: "GMB Praxis",
      video_description: "Video driven web app",
    }
  }
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get the latest 6 articles sorted by date
  const latestArticles = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);

  return (
    <section ref={ref} className="pt-12 pb-24 bg-base-100 bg-opacity-80 px-4 max-w-full mx-auto" id="work">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-serif font-bold text-4xl lg:text-6xl uppercase tracking-tight mb-6">
          Recent Work
        </h2>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          Check out some of our latest projects and case studies
        </p>
      </motion.div>
      <motion.div
        className="relative mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex justify-center items-center max-w-2xl px-10 mx-auto my-15">
          <MuxVideoSlider videos={videos} />
        </div>
        {/* Mobile arrow (vertical) */}
        <div className="absolute right-10 top-full -translate-y-6 lg:hidden">
          <div className="flex flex-col items-end gap-2">
            <svg width="60" height="120" viewBox="0 0 60 120">
              <path
                d="M30,95 Q40,60 30,5 M15,30 L30,5 L45,30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-primary"
                style={{ strokeDasharray: "5,5" }}
              />
            </svg>
            <span className="font-handwriting text-lg text-primary -translate-y-8 rotate-2">
              Some videos of our latest work
            </span>
          </div>
        </div>
        {/* Desktop arrow (horizontal) */}
        <div className="absolute right-0 top-full -translate-y-6 hidden lg:block">
          <div className="flex items-end gap-2">
            <svg width="120" height="80" viewBox="0 0 120 80" className="transform -scale-x-100 -translate-x-8">
              <path
                d="M5,60 Q40,60 60,30 T115,10 M90,0 L115,10 L90,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-primary"
                style={{ strokeDasharray: "5,5" }}
              />
            </svg>
            <span className="font-handwriting text-lg text-primary rotate-2 -translate-x-8">
              Some videos of our latest work
            </span>
          </div>
        </div>
      </motion.div>
      <motion.h2
        className="text-center uppercase text-3xl font-bold lg:mt-28 mt-32 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        Case studies
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 lg:gap-16 lg:px-32 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {latestArticles.map((article) => (
          <CardArticle
            key={article.slug}
            article={article}
            showCategory={true}
            isImagePriority={true}
          />
        ))}
      </motion.div>
    </section>
  );
}
