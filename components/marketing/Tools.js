"use client";

import { useState } from "react";

const Tools = () => {
  const [url, setUrl] = useState("");

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
    <section className="py-16 md:py-24 px-8 bg-gradient-to-b from-base-200 to-base-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
            <span>🛠️</span>
            <p className="font-medium text-primary text-sm">Free Tools</p>
          </div>

          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-4">
            Tools to Help Your Business Grow
          </h2>

          <p className="text-base-content/80 text-lg max-w-2xl mx-auto">
            We build tools that solve real problems. Try them free and see the difference.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Landing Page Report Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <h3 className="card-title text-xl">Landing Page Report</h3>
                  <p className="text-sm text-base-content/60">Conversion optimization</p>
                </div>
              </div>

              <p className="text-base-content/80 mb-6">
                Get instant AI-powered feedback on your landing page's effectiveness. Analyze copy, design, and conversion potential.
              </p>

              <form onSubmit={handleTestPage} className="space-y-3">
                <input
                  type="url"
                  placeholder="https://your-landing-page.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="input input-bordered w-full bg-base-200/50 focus:bg-base-100"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Analyze Your Page
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Compute Prices Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-cyan-600 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <h3 className="card-title text-xl">Compute Prices</h3>
                  <p className="text-sm text-base-content/60">GPU cost comparison</p>
                </div>
              </div>

              <p className="text-base-content/80 mb-6">
                Looking for cloud GPUs? Compare prices across 27+ providers instantly. Find the cheapest H100, A100, RTX 4090 and more.
              </p>

              {/* GPU Icons Preview */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge badge-outline">H100</span>
                <span className="badge badge-outline">A100</span>
                <span className="badge badge-outline">RTX 4090</span>
                <span className="badge badge-outline">L40S</span>
                <span className="badge badge-outline">+20 more</span>
              </div>

              <a
                href="https://computeprices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                Compare GPU Prices
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <p className="text-center text-sm text-base-content/60 mt-3">
                Daily pricing updates from AWS, Lambda, RunPod, CoreWeave & more
              </p>
            </div>
          </div>
          {/* Headline Goat Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-2xl">
                  🐐
                </div>
                <div>
                  <h3 className="card-title text-xl">Headline Goat</h3>
                  <p className="text-sm text-base-content/60">A/B testing for text</p>
                </div>
              </div>

              <p className="text-base-content/80 mb-6">
                Test headlines, CTAs, and value props on any site. Self-hosted single Go binary with zero dependencies. Get statistically significant results with 95% confidence.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge badge-outline">Self-Hosted</span>
                <span className="badge badge-outline">Go Binary</span>
                <span className="badge badge-outline">SQLite</span>
                <span className="badge badge-outline">MIT License</span>
              </div>

              <a
                href="https://github.com/gkobilansky/headline-goat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <p className="text-center text-sm text-base-content/60 mt-3">
                Ultra flexible, minimalist A/B testing in a single binary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
