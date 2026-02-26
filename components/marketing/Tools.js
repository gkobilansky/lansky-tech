"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Tools = () => {
  const [url, setUrl] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTestPage = (e) => {
    e.preventDefault();
    let testUrl = url.trim();
    if (!testUrl) return;

    // Add https:// if no protocol is provided
    if (!/^https?:\/\//i.test(testUrl)) {
      testUrl = `https://${testUrl}`;
    }

    const encodedUrl = encodeURIComponent(testUrl);
    window.open(`https://landingpage.report?url=${encodedUrl}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section ref={ref} className="py-16 md:py-24 px-8 bg-gradient-to-b from-base-200 to-base-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
            <span>🛠️</span>
            <p className="font-medium text-primary text-sm">Free Tools</p>
          </div>

          <h2 className="font-serif font-bold text-3xl lg:text-5xl tracking-tight mb-4">
            Tools to Help Your Business Grow
          </h2>

          <p className="text-base-content/80 text-lg max-w-2xl mx-auto">
            We build tools that solve real problems. Try them free and see the difference.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Landing Page Report Card */}
          <motion.div
            className="group card bg-base-100 shadow-xl border border-base-300/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  📝
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold mb-1">Landing Page Report</h3>
                  <p className="text-sm text-primary font-medium">Conversion optimization</p>
                </div>
              </div>

              <p className="text-base-content/80 mb-6 leading-relaxed">
                Get instant AI-powered feedback on your landing page's effectiveness. Analyze copy, design, and conversion potential.
              </p>

              <form onSubmit={handleTestPage} className="space-y-4 mt-auto">
                <input
                  type="url"
                  placeholder="https://your-landing-page.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="input input-bordered w-full bg-base-200/30 focus:bg-base-100 focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-gradient w-full group/btn"
                >
                  Analyze Your Page
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Compute Prices Card */}
          <motion.div
            className="group card bg-base-100 shadow-xl border border-base-300/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                  <Image
                    src="/cp-logo.svg"
                    alt="Compute Prices"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold mb-1">Compute Prices</h3>
                  <p className="text-sm text-primary font-medium">GPU cost comparison</p>
                </div>
              </div>

              <p className="text-base-content/80 mb-6 leading-relaxed">
                Looking for cloud GPUs? Compare prices across 27+ providers instantly. Find the cheapest H100, A100, RTX 4090 and more.
              </p>

              {/* GPU Icons Preview */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge badge-outline border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors">H100</span>
                <span className="badge badge-outline border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors">A100</span>
                <span className="badge badge-outline border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors">RTX 4090</span>
                <span className="badge badge-outline border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors">L40S</span>
                <span className="badge badge-outline border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors">+20 more</span>
              </div>

              <div className="mt-auto space-y-3">
                <a
                  href="https://computeprices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gradient w-full group/btn"
                >
                  Compare GPU Prices
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <p className="text-center text-xs text-base-content/60">
                  Daily pricing updates from AWS, Lambda, RunPod, CoreWeave & more
                </p>
              </div>
            </div>
          </motion.div>

          {/* Headline Goat Card */}
          <motion.div
            className="group card bg-base-100 shadow-xl border border-base-300/50 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                  <Image
                    src="/headline-goat-logo.png"
                    alt="Headline Goat"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold mb-1">Headline Goat</h3>
                  <p className="text-sm text-secondary font-medium">A/B testing for text</p>
                </div>
              </div>

              <p className="text-base-content/80 mb-6 leading-relaxed">
                Test headlines, CTAs, and value props on any site. Self-hosted single Go binary with zero dependencies. Get statistically significant results with 95% confidence.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge badge-outline border-secondary/30 text-secondary/80 hover:bg-secondary/10 transition-colors">Self-Hosted</span>
                <span className="badge badge-outline border-secondary/30 text-secondary/80 hover:bg-secondary/10 transition-colors">Go Binary</span>
                <span className="badge badge-outline border-secondary/30 text-secondary/80 hover:bg-secondary/10 transition-colors">SQLite</span>
                <span className="badge badge-outline border-secondary/30 text-secondary/80 hover:bg-secondary/10 transition-colors">MIT License</span>
              </div>

              <div className="mt-auto space-y-3">
                <a
                  href="https://github.com/gkobilansky/headline-goat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gradient w-full group/btn"
                >
                  View on GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <p className="text-center text-xs text-base-content/60">
                  Ultra flexible, minimalist A/B testing in a single binary
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
