"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/*
 * Concept Index: Navigate between all five homepage redesign concepts.
 * Visit /concepts to see the overview, then click through to each design.
 */

const concepts = [
  {
    id: 1,
    title: "Bold Split-Screen",
    description: "Asymmetric layouts, dramatic split-screen sections, oversized typography, and bold color blocking. Each section uses a left/right split with content on one side and visuals on the other.",
    inspiration: "Huge Inc, Rally, Collins",
    color: "from-blue-600 to-yellow-500",
    highlights: ["Full-viewport split panels", "Floating stat cards", "Dark/light contrast", "Marquee testimonials"],
  },
  {
    id: 2,
    title: "Minimalist Editorial",
    description: "Clean whitespace, ultra-light typography, single-column centered layout, and a muted palette with one accent color. Content breathes with generous padding.",
    inspiration: "Apple Marketing, Stripe, Editorial Magazines",
    color: "from-gray-400 to-gray-600",
    highlights: ["Ultra-light font weights", "Numbered sections", "Featured quote block", "Centered single-column"],
  },
  {
    id: 3,
    title: "Bento Grid Dashboard",
    description: "Everything is a card in a bento-box grid with varying sizes. Rounded corners, subtle borders, and a cohesive dashboard feel throughout all sections.",
    inspiration: "Linear, Vercel, Apple Bento",
    color: "from-purple-500 to-pink-500",
    highlights: ["Bento grid layout", "Card-based everything", "Gradient accent cards", "Modular composition"],
  },
  {
    id: 4,
    title: "Gradient Glassmorphism",
    description: "Rich gradients, glassmorphism cards with backdrop blur, floating glowing orbs, and a premium dark aesthetic. Frosted glass panels over gradient backgrounds.",
    inspiration: "Raycast, Arc Browser, Linear Dark",
    color: "from-cyan-500 to-blue-600",
    highlights: ["Frosted glass cards", "Background glow orbs", "Gradient text effects", "Status indicator pill"],
  },
  {
    id: 5,
    title: "Scroll-Reveal Storytelling",
    description: "Full-viewport 'chapters' that reveal as you scroll. Dramatic parallax, narrative structure, and content that unfolds like a story with each scroll.",
    inspiration: "Apple Product Pages, Stripe Annual Reports",
    color: "from-orange-500 to-red-500",
    highlights: ["Chapter-based narrative", "Parallax hero", "Scroll-triggered reveals", "Alternating testimonials"],
  },
];

export default function ConceptsIndex() {
  return (
    <div className="min-h-screen bg-base-100 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase font-medium mb-4">Homepage Redesign</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            5 Concepts
          </h1>
          <p className="text-base-content/50 text-lg max-w-xl mx-auto">
            Five different design approaches for the Lansky Tech homepage. Same copy and content, completely different visual treatments. Click any concept to view it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/concepts/${concept.id}`}
                className="group block h-full rounded-2xl border border-base-300 bg-base-100 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Color bar */}
                <div className={`h-2 bg-gradient-to-r ${concept.color}`} />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-base-content/20 text-4xl font-black">{String(concept.id).padStart(2, "0")}</span>
                    <div>
                      <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{concept.title}</h2>
                      <p className="text-xs text-base-content/30">Inspired by {concept.inspiration}</p>
                    </div>
                  </div>

                  <p className="text-base-content/50 text-sm leading-relaxed mb-4">{concept.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {concept.highlights.map((h) => (
                      <span key={h} className="text-xs bg-base-200 text-base-content/50 px-2 py-1 rounded-full">{h}</span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-base-300/50 flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">View concept</span>
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Current design link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/"
              className="group block h-full rounded-2xl border border-dashed border-base-300 bg-base-200/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-6 flex flex-col items-center justify-center h-full text-center min-h-[200px]">
                <p className="text-base-content/30 text-sm mb-2">For comparison</p>
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">Current Homepage</h2>
                <p className="text-base-content/40 text-sm">View the existing live design</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
