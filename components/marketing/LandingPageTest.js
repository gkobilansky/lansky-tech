"use client";

import { useState } from "react";

const LandingPageTest = () => {
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
    <section className="py-16 md:py-24 px-8 bg-base-200 bg-opacity-80">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
          <span>🎯</span>
          <p className="font-medium text-primary text-sm">Free Tool</p>
        </div>

        <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-4">
          Test Your Landing Page
        </h2>

        <p className="text-base-content/80 text-lg mb-8 max-w-2xl mx-auto">
          Get instant feedback on your landing page's effectiveness. Analyze copy, design, and conversion potential with our free Landing Page Report tool.
        </p>

        <form onSubmit={handleTestPage} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="url"
            placeholder="https://your-landing-page.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input input-bordered flex-1 bg-base-100"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Analyze Page
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </form>

        <p className="text-base-content/60 text-sm mt-4">
          Test one of your landing pages for a free report
        </p>
      </div>
    </section>
  );
};

export default LandingPageTest;
