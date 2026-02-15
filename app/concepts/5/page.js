"use client";

import { Suspense, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import config from "@/config";
import Header from "@/components/layout/Header";
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";
import ButtonCheckout from "@/components/ui/ButtonCheckout";
import Footer from "@/components/layout/Footer";

/*
 * CONCEPT 5: "Vertical Rhythm / Scroll-Reveal Storytelling"
 *
 * Design philosophy: Full-viewport sections that reveal as you scroll.
 * Each section is a "chapter" with dramatic reveals, parallax elements,
 * and a narrative arc. Inspired by Apple product pages, Stripe's annual
 * reports, and long-form storytelling sites. Each section takes the
 * full viewport height and content fades/slides in on scroll.
 */

const testimonials = [
  { rating: 5, text: "Gene isn't just a coder - he understands that code has to ship and ultimately drive business results. He's creative, human, and has accommodated a lot of weird ideas for us over the years, usually making them better in the execution.", author: "Andy F", authorTitle: "GMB Fitness Founder", authorImage: "/testimonials/andy.jpeg" },
  { rating: 5, text: "Your UX is great! Best onboarding I've seen in any course period.", author: "Omar Z", authorTitle: "Praxis User, Founder of $100 MBA podcast", authorImage: "/testimonials/omar-zenhom.jpeg" },
  { rating: 5, text: "Since the new site went live, we've received nothing but positive feedback from the teachers and coaches who use it", author: "Katy W", authorTitle: "Program Director, The Art of Learning Foundation", authorImage: "/testimonials/katy-wells.jpeg" },
  { rating: 5, text: "I also have to mention the Praxis platform (build by Lansky) - it's the best in the business!.", author: "Mark", authorTitle: "Praxis User", authorImage: "/testimonials/lion.jpeg" },
  { rating: 5, text: "A consummate professional with exceptional patience Gene worked tirelessly to deliver the work I wanted.", author: "Shawn S", authorTitle: "iLiveFit Founder, USAF Captain", authorImage: "/testimonials/shawn-swift.jpeg" },
];

const faqList = [
  { question: "What types of web applications do you specialize in building?", answer: "We specialize in high-performance web applications, custom e-commerce solutions, and conversion-focused marketing sites." },
  { question: "What's the difference between a web application and a website?", answer: "A website primarily delivers information. A web application is interactive software that lets users perform complex tasks, manipulate data, and create content in real-time." },
  { question: "How can I sell more online?", answer: "High-converting checkout pages, mobile-first design, smart upsell systems, subscription options, performance optimization, and analytics integration." },
  { question: "Can you build an app that does X?", answer: "Anything can be built. Our goal is to find the leanest version of your product. That's the hard part." },
  { question: "How do you measure success?", answer: "Through concrete business outcomes: conversion rates, user engagement, retention metrics, lead generation, and performance benchmarks." },
  { question: "I have another question", answer: "Contact us at hi@lansky.tech" },
];

// Reusable reveal wrapper
const RevealSection = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── CHAPTER 1: HERO ──────────────────────────────────────────────
function ChapterHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral via-neutral/95 to-base-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary/60 text-sm tracking-[0.4em] uppercase mb-8">Lansky Tech</p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85]">
            <span className="text-neutral-content/90">Web</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">tech.</span>
          </h1>
          <p className="text-neutral-content/40 text-xl md:text-2xl mt-8 max-w-lg mx-auto leading-relaxed">
            That moves the needle. That ships fast. That scales with you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-neutral-content/20 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-neutral-content/20 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── CHAPTER 2: THE PROMISE ───────────────────────────────────────
function ChapterPromise() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <RevealSection>
          <p className="text-7xl md:text-9xl font-black text-base-content/[0.03] absolute -top-8 left-0 select-none pointer-events-none">01</p>
          <div className="relative">
            <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Chapter One</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8">
              You&apos;re small but mighty, and ready to grow.
            </h2>
            <p className="text-base-content/40 text-xl leading-relaxed">
              You just need the right tech to do it. We can build that for you. <em className="text-base-content/60">Fast.</em>
            </p>
          </div>
        </RevealSection>

        <RevealSection className="mt-24">
          <div className="flex justify-center">
            <Image
              src="/lansky-solutions.png"
              alt="Lansky Solutions"
              width={7041}
              height={5788}
              className="w-full max-w-2xl h-auto rounded-2xl"
              priority
            />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ─── CHAPTER 3: THE PROBLEM ───────────────────────────────────────
function ChapterProblem() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24 bg-neutral" id="problem-story">
      <div className="max-w-3xl mx-auto">
        <RevealSection>
          <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Chapter Two</p>
          <h2 className="text-5xl md:text-7xl font-black text-neutral-content tracking-tight leading-[0.95] mb-12">
            70% of tech projects
            <br />
            <span className="text-error/70">fail.</span>
          </h2>
        </RevealSection>

        <RevealSection>
          <p className="text-neutral-content/40 text-xl leading-relaxed mb-16">
            Not finding a good enough solution, too much complexity, ignoring users... There&apos;s so many ways good ideas can lose steam.
          </p>
        </RevealSection>

        {/* Steps revealed one by one */}
        <div className="space-y-6">
          {[
            { emoji: "💡", text: "It starts with a beautiful new idea", line: "bg-gradient-to-r from-success/50 to-success/0" },
            { emoji: "👩🏻‍💻", text: "Then you design tons of features", line: "bg-gradient-to-r from-info/50 to-info/0" },
            { emoji: "💰", text: "The project overruns budget", line: "bg-gradient-to-r from-warning/50 to-warning/0" },
            { emoji: "😤", text: "And the project fails.", line: "bg-gradient-to-r from-error/50 to-error/0" },
          ].map((step, i) => (
            <RevealSection key={step.text}>
              <div className="flex items-center gap-6">
                <span className="text-4xl shrink-0">{step.emoji}</span>
                <div className="flex-1">
                  <p className="text-neutral-content/70 text-xl font-medium">{step.text}</p>
                  <div className={`h-px mt-3 ${step.line}`} />
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-20">
          <div className="border-l-2 border-primary/30 pl-8">
            <p className="text-neutral-content/50 text-lg leading-relaxed mb-4">
              Developers who don&apos;t see the big picture. Who don&apos;t understand your business. Who profit from complexity.
            </p>
            <p className="text-2xl font-bold text-neutral-content">
              You need development designed for growth.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ─── CHAPTER 4: THE SOLUTION ──────────────────────────────────────
function ChapterSolution() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24" id="solutions-story">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Chapter Three</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-20">
            We start small & iterate
            <br />
            to build a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">lean, profitable product.</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            { icon: "📺", title: "Web Apps", desc: "Custom-built, high-performance web applications that are lean, profitable, and designed to grow with you." },
            { icon: "💳", title: "Ecommerce", desc: "Seamless e-commerce flows from discovery to checkout in a fully integrated funnel." },
            { icon: "🎨", title: "Marketing Sites", desc: "Fast-loading landing pages, immersive showcases, and easy content management that converts." },
          ].map((service, i) => (
            <RevealSection key={service.title}>
              <div className="text-center md:text-left">
                <span className="text-5xl block mb-6">{service.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-base-content/40 leading-relaxed">{service.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CHAPTER 5: SOCIAL PROOF ──────────────────────────────────────
function ChapterProof() {
  return (
    <section className="py-24 md:py-32 bg-base-200 px-8">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Chapter Four</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            Don&apos;t take our word for it.
          </h2>
        </RevealSection>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <RevealSection key={i}>
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-start`}>
                <div className="shrink-0">
                  <Image src={t.authorImage} alt={t.author} width={64} height={64} className="rounded-full" />
                </div>
                <div className={`flex-1 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                  <div className={`flex mb-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-warning">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-lg leading-relaxed text-base-content/60 mb-3 ${i === 0 ? "text-xl md:text-2xl" : ""}`}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-sm"><span className="font-medium">{t.author}</span> <span className="text-base-content/30">/ {t.authorTitle}</span></p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CHAPTER 6: MEET THE FOUNDER ──────────────────────────────────
function ChapterFounder() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24" id="hello-story">
      <div className="max-w-3xl mx-auto text-center">
        <RevealSection>
          <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Chapter Five</p>
          <Image
            src="/gene-kobilansky-headshot-yellow-bg.png"
            alt="Gene Kobilansky"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8">
            What if web development could be{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
              faster, easier, and simpler?
            </span>
          </h2>
        </RevealSection>

        <RevealSection>
          <div className="text-left text-base-content/40 text-lg leading-[1.9] space-y-6 max-w-2xl mx-auto">
            <p>Hi, I&apos;m Gene Kobilansky, founder of Lansky Tech, and that is <strong className="text-base-content/70">exactly my specialty</strong>.</p>
            <p>I&apos;ve worked with companies of all sizes — from small charity organizations just getting off the ground, to some of the biggest companies in the world, like McDonald&apos;s, Amazon, GE, and Samsung.</p>
            <p>They all needed the right tech solutions to help them grow, with as little tech bloat as possible.</p>
            <p className="text-base-content/60 font-medium">I look forward to hearing from you.</p>
          </div>
          <div className="flex justify-center mt-8">
            <Image src="/gk-initials-white.png" alt="Signature" width={1920} height={1080} className="max-w-40 opacity-50" />
          </div>
          <div className="mt-8">
            <ButtonLead />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ─── TOOLS ────────────────────────────────────────────────────────
function ChapterTools() {
  const [url, setUrl] = useState("");
  const handleTestPage = (e) => {
    e.preventDefault();
    let testUrl = url.trim();
    if (!testUrl) return;
    if (!/^https?:\/\//i.test(testUrl)) testUrl = `https://${testUrl}`;
    window.open(`https://landingpage.report?url=${encodeURIComponent(testUrl)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 md:py-32 bg-base-200 px-8">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Free Tools</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            Tools to Help Your Business Grow
          </h2>
        </RevealSection>

        <div className="space-y-8">
          <RevealSection>
            <div className="bg-base-100 rounded-2xl p-8 md:p-12 border border-base-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <span className="text-4xl block mb-4">🎯</span>
                  <h3 className="text-2xl font-bold mb-2">Landing Page Report</h3>
                  <p className="text-base-content/50">Get instant AI-powered feedback on your landing page&apos;s effectiveness.</p>
                </div>
                <div className="md:w-1/2">
                  <form onSubmit={handleTestPage} className="space-y-3">
                    <input type="url" placeholder="https://your-landing-page.com" value={url} onChange={(e) => setUrl(e.target.value)} className="input input-bordered w-full" required />
                    <button type="submit" className="btn btn-primary w-full">Analyze Your Page</button>
                  </form>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="bg-base-100 rounded-2xl p-8 md:p-12 border border-base-300">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <span className="text-4xl block mb-4">🚀</span>
                  <h3 className="text-2xl font-bold mb-2">Compute Prices</h3>
                  <p className="text-base-content/50">Compare GPU prices across 27+ providers instantly.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["H100", "A100", "RTX 4090", "L40S", "+20 more"].map((g) => (
                      <span key={g} className="badge badge-outline badge-sm">{g}</span>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <a href="https://computeprices.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">Compare GPU Prices</a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────
function ChapterPricing({ openModal }) {
  return (
    <section className="py-24 md:py-32 px-8" id="prices-story">
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">Chapter Six</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              Simple Pricing
            </h2>
            <p className="text-base-content/40 text-lg">Transparent. No overhead. No surprises.</p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {config.stripe.plans.map((plan, i) => (
            <RevealSection key={plan.priceId}>
              <div className={`h-full flex flex-col p-8 rounded-2xl border ${
                plan.isFeatured
                  ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                  : "border-base-300 bg-base-100"
              }`}>
                {plan.isFeatured && (
                  <span className="text-xs text-primary font-bold tracking-widest uppercase mb-4">Most Popular</span>
                )}
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-base-content/40 text-sm mb-6 flex-grow">{plan.description}</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm text-base-content/50 flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{f.name}</span>
                    </li>
                  ))}
                </ul>
                <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-16 text-center">
          <p className="text-base-content/30">
            Need something different?{" "}
            <button
              className="text-primary hover:underline"
              onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
            >
              Let&apos;s talk →
            </button>
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────
function ChapterFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-24 md:py-32 bg-base-200 px-8" id="faq-story">
      <div className="max-w-3xl mx-auto">
        <RevealSection>
          <h2 className="text-4xl font-black tracking-tight mb-16 text-center">
            Frequently Asked Questions
          </h2>
        </RevealSection>

        <div>
          {faqList.map((item, i) => (
            <RevealSection key={i}>
              <div className="border-b border-base-300">
                <button
                  className="w-full py-6 flex items-center justify-between text-left text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="pr-4">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                  <p className="text-base-content/40 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────────
function ChapterCTA({ openModal }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/95 to-base-100" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />

      <RevealSection className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-neutral-content tracking-tight leading-[0.95] mb-8">
          Ready to write
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
            your chapter?
          </span>
        </h2>
        <p className="text-neutral-content/40 text-xl mb-12">
          Let&apos;s talk about your project. No strings attached.
        </p>
        <button
          className="btn btn-primary btn-lg px-12"
          onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
        >
          Start the conversation
        </button>
      </RevealSection>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
export default function Concept5() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (content, title) => {
    setModalContent(content);
    setModalTitle(title || "");
    setIsModalOpen(true);
  };

  return (
    <>
      <Suspense><Header openModal={openModal} /></Suspense>
      <main>
        <ChapterHero />
        <ChapterPromise />
        <ChapterProblem />
        <ChapterSolution />
        <ChapterProof />
        <ChapterFounder />
        <ChapterTools />
        <ChapterPricing openModal={openModal} />
        <ChapterFAQ />
        <ChapterCTA openModal={openModal} />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={modalTitle}>
          {modalContent}
        </Modal>
      </main>
      <Footer />
    </>
  );
}
