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
 * CONCEPT 1: "Bold Split-Screen"
 *
 * Design philosophy: Asymmetric layouts, dramatic split-screen sections,
 * oversized typography, and bold color blocking. Each section uses a
 * split layout with content on one side and a visual element on the other.
 * Inspired by high-end agency sites like Huge Inc, Rally, and Collins.
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

// ─── HERO: Full-viewport split screen ─────────────────────────────
function HeroBold() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left panel - dark with text */}
      <div className="lg:w-1/2 bg-neutral flex items-center justify-center px-8 py-24 lg:py-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">Lansky Tech</p>
            <h1 className="text-5xl md:text-7xl font-black text-neutral-content leading-[0.95] tracking-tight mb-8">
              Web tech
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
                that moves
              </span>
              <br />
              the needle.
            </h1>
            <p className="text-neutral-content/70 text-lg leading-relaxed mb-10 max-w-md">
              You&apos;re small but <strong className="text-neutral-content">mighty, and ready to grow</strong> — you just need the right tech to do it. We can build that for you. <em>Fast.</em>
            </p>
            <a
              href="#problem-bold"
              className="group inline-flex items-center gap-3 text-primary font-semibold text-lg hover:gap-5 transition-all"
            >
              See how we do it
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right panel - image/visual */}
      <div className="lg:w-1/2 bg-base-200 flex items-center justify-center p-8 lg:p-16 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-xl"
        >
          <Image
            src="/lansky-solutions.png"
            alt="Lansky Solutions"
            width={7041}
            height={5788}
            className="w-full h-auto"
            priority
          />
          {/* Floating stat cards */}
          <motion.div
            className="absolute -bottom-4 -left-4 bg-base-100 rounded-xl shadow-2xl p-4 border border-base-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-3xl font-black text-primary">5+</p>
            <p className="text-xs text-base-content/60">Years with clients</p>
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 bg-base-100 rounded-xl shadow-2xl p-4 border border-base-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-3xl font-black text-secondary">100%</p>
            <p className="text-xs text-base-content/60">5-star reviews</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── LOGO BAR ─────────────────────────────────────────────────────
function LogoBar() {
  const logos = ["Samsung", "Amazon", "GE", "GMB", "Touchtunes"];
  return (
    <div className="bg-base-100 border-y border-base-300 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-12 opacity-40">
        {logos.map((name) => (
          <span key={name} className="text-sm font-semibold tracking-widest uppercase whitespace-nowrap">{name}</span>
        ))}
      </div>
    </div>
  );
}

// ─── PROBLEM: Reversed split-screen ───────────────────────────────
function ProblemBold() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem-bold" className="min-h-screen flex flex-col-reverse lg:flex-row" ref={ref}>
      {/* Left: Visual/data */}
      <div className="lg:w-1/2 bg-base-200 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Failure flow */}
            {[
              { emoji: "💡", label: "Beautiful new idea", color: "bg-success/20 border-success/30" },
              { emoji: "👩🏻‍💻", label: "Design tons of features", color: "bg-info/20 border-info/30" },
              { emoji: "💰", label: "Project overruns", color: "bg-warning/20 border-warning/30" },
              { emoji: "😤", label: "Project fails", color: "bg-error/20 border-error/30" },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`flex items-center gap-4 p-4 rounded-xl border ${step.color}`}
              >
                <span className="text-3xl">{step.emoji}</span>
                <div>
                  <p className="font-bold">{step.label}</p>
                  {i < 3 && <p className="text-xs text-base-content/50 mt-1">leads to...</p>}
                </div>
                {i < 3 && (
                  <svg className="w-5 h-5 ml-auto text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right: Text content */}
      <div className="lg:w-1/2 bg-neutral flex items-center justify-center px-8 py-24 lg:py-0">
        <div className="max-w-lg">
          <p className="text-error font-mono text-sm tracking-widest uppercase mb-6">The problem</p>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-content leading-tight tracking-tight mb-8">
            70% of tech projects fail
          </h2>
          <p className="text-neutral-content/70 text-lg leading-relaxed mb-8">
            Not finding a <em>good enough</em> solution, too much complexity, ignoring users... There&apos;s so many ways good ideas can lose steam.
          </p>
          <div className="space-y-3 text-neutral-content/60">
            {[
              "Developers focus on the task, not the full picture",
              "They don't understand your business goals",
              "Complexity = more billable hours",
              "User experience is an afterthought",
              "Tech jargon instead of clear communication",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-primary mt-1">&#x2192;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-neutral-content font-bold text-lg">
            You need development designed for growth.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES: Stacked cards ──────────────────────────────────────
function ServicesBold() {
  const services = [
    { icon: "📺", title: "Web Apps", description: "Get a custom-built, high-performance web application that's lean, profitable, and designed to grow with you." },
    { icon: "💳", title: "Ecommerce", description: "Create seamless and effective e-commerce flows that take users from discovery to checkout in a fully integrated funnel." },
    { icon: "🎨", title: "Marketing Sites", description: "Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management." },
  ];

  return (
    <section className="py-24 md:py-32 bg-base-100" id="solutions-bold">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: sticky heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">What we do</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              We start small & iterate to build a lean, profitable product
            </h2>
            <p className="text-base-content/60 text-lg">
              We specialize in three core areas that drive real business results.
            </p>
          </div>

          {/* Right: service cards */}
          <div className="lg:w-2/3 space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-base-200 rounded-2xl p-8 md:p-12 border border-base-300 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-base-content/70 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS: Marquee strip ──────────────────────────────────
function TestimonialsBold() {
  return (
    <section className="py-24 bg-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-neutral-content tracking-tight">
          What people say about
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">working with us</span>
        </h2>
      </div>
      <div className="flex gap-6 animate-[scroll_30s_linear_infinite]" style={{ width: "max-content" }}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="w-80 shrink-0 bg-base-100/5 border border-neutral-content/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex mb-3">
              {[...Array(t.rating)].map((_, j) => (
                <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-warning">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-content/80 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <Image src={t.authorImage} alt={t.author} width={32} height={32} className="rounded-full" />
              <div>
                <p className="text-neutral-content font-medium text-sm">{t.author}</p>
                <p className="text-neutral-content/50 text-xs">{t.authorTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FOUNDER: Large portrait split ────────────────────────────────
function FounderBold({ openModal }) {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row" id="hello-bold">
      <div className="lg:w-2/5 bg-gradient-to-br from-[#0066CC] to-[#004499] flex items-center justify-center p-12 lg:p-16">
        <div className="text-center">
          <Image
            src="/gene-kobilansky-headshot-yellow-bg.png"
            alt="Gene Kobilansky"
            width={250}
            height={250}
            className="rounded-full mx-auto mb-8 ring-4 ring-white/20"
          />
          <Image
            src="/gk-initials-white.png"
            alt="Gene Kobilansky signature"
            width={1920}
            height={1080}
            className="max-w-40 mx-auto opacity-80"
          />
        </div>
      </div>
      <div className="lg:w-3/5 bg-base-100 flex items-center justify-center px-8 py-24 lg:py-0">
        <div className="max-w-xl">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">Hello</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
            What if web development could be <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">faster, easier, and simpler?</span>
          </h2>
          <div className="space-y-4 text-base-content/70 text-lg leading-relaxed">
            <p>Hi, I&apos;m Gene Kobilansky, founder of Lansky Tech, and that is <strong className="text-base-content">exactly my specialty</strong>.</p>
            <p>I&apos;ve worked with companies of all sizes — from small charity organizations just getting off the ground, to some of the biggest companies in the world, like McDonald&apos;s, Amazon, GE, and Samsung.</p>
            <p>They all needed the right tech solutions to help them grow, with as little tech bloat as possible.</p>
            <p className="font-medium text-base-content">I look forward to hearing from you.</p>
          </div>
          <div className="mt-8">
            <ButtonLead />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING: Bold cards with border accent ───────────────────────
function PricingBold({ openModal }) {
  return (
    <section className="py-24 md:py-32 bg-base-200" id="prices-bold">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Simple Pricing to Get Started
          </h2>
          <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
            We&apos;re transparent about our pricing and we&apos;re not interested in overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {config.stripe.plans.map((plan) => (
            <div
              key={plan.priceId}
              className={`relative rounded-2xl bg-base-100 p-8 flex flex-col ${
                plan.isFeatured ? "ring-2 ring-primary shadow-xl shadow-primary/10" : "border border-base-300"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-base-content/60 text-sm mb-6 flex-grow">{plan.description}</p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{f.name}</span>
                  </li>
                ))}
              </ul>
              <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-bold text-2xl mb-3">Not the right fit?</h3>
          <p className="text-base-content/60">
            Need something more custom, or just want to talk strategy?{" "}
            <button
              className="text-primary font-semibold hover:underline"
              onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
            >
              Send me a note →
            </button>{" "}
            No commitment.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ: Split layout ────────────────────────────────────────────
function FAQBold() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-24 md:py-32 bg-base-100" id="faq-bold">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-4xl font-black tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="lg:w-2/3">
          {faqList.map((item, i) => (
            <div key={i} className="border-b border-base-300">
              <button
                className="w-full py-6 flex items-center justify-between text-left text-lg font-semibold hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.question}
                <span className={`transition-transform ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                <p className="text-base-content/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TOOLS: Side-by-side cards ────────────────────────────────────
function ToolsBold() {
  const [url, setUrl] = useState("");
  const handleTestPage = (e) => {
    e.preventDefault();
    let testUrl = url.trim();
    if (!testUrl) return;
    if (!/^https?:\/\//i.test(testUrl)) testUrl = `https://${testUrl}`;
    window.open(`https://landingpage.report?url=${encodeURIComponent(testUrl)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 md:py-32 bg-base-200">
      <div className="max-w-6xl mx-auto px-8">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Free Tools</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Tools to Help Your Business Grow</h2>
        <p className="text-base-content/60 text-lg mb-12">We build tools that solve real problems. Try them free.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-base-100 rounded-2xl p-8 border border-base-300 hover:border-primary/30 transition-colors">
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="text-2xl font-bold mb-2">Landing Page Report</h3>
            <p className="text-base-content/60 mb-6">Get instant AI-powered feedback on your landing page&apos;s effectiveness.</p>
            <form onSubmit={handleTestPage} className="space-y-3">
              <input type="url" placeholder="https://your-landing-page.com" value={url} onChange={(e) => setUrl(e.target.value)} className="input input-bordered w-full" required />
              <button type="submit" className="btn btn-primary w-full">Analyze Your Page</button>
            </form>
          </div>
          <div className="bg-base-100 rounded-2xl p-8 border border-base-300 hover:border-primary/30 transition-colors">
            <span className="text-4xl mb-4 block">🚀</span>
            <h3 className="text-2xl font-bold mb-2">Compute Prices</h3>
            <p className="text-base-content/60 mb-6">Compare GPU prices across 27+ providers instantly.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["H100", "A100", "RTX 4090", "L40S", "+20 more"].map((g) => (
                <span key={g} className="badge badge-outline">{g}</span>
              ))}
            </div>
            <a href="https://computeprices.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
              Compare GPU Prices
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA: Full-width bold ─────────────────────────────────────────
function CTABold({ openModal }) {
  return (
    <section className="py-24 bg-neutral text-center">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl md:text-6xl font-black text-neutral-content tracking-tight mb-6">
          Ready to build something great?
        </h2>
        <p className="text-neutral-content/60 text-lg mb-10">
          Let&apos;s talk about your project. No strings attached.
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
export default function Concept1() {
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
        <HeroBold />
        <LogoBar />
        <ToolsBold />
        <ProblemBold />
        <ServicesBold />
        <TestimonialsBold />
        <FounderBold openModal={openModal} />
        <PricingBold openModal={openModal} />
        <FAQBold />
        <CTABold openModal={openModal} />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={modalTitle}>
          {modalContent}
        </Modal>
      </main>
      <Footer />
    </>
  );
}
