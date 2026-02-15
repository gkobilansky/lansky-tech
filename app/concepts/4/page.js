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
 * CONCEPT 4: "Gradient Glassmorphism / Premium"
 *
 * Design philosophy: Rich gradients, glassmorphism cards with backdrop blur,
 * glowing orbs, and a dark premium feel. Inspired by Raycast, Arc Browser,
 * and Linear's dark mode. The whole page has a "premium software" aesthetic
 * with frosted glass panels over a gradient-rich background.
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

// Reusable glass card
const GlassCard = ({ children, className = "", glow = false }) => (
  <div className={`relative rounded-2xl border border-white/[0.08] overflow-hidden ${className}`}
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      backdropFilter: "blur(20px)",
    }}
  >
    {glow && <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />}
    {children}
  </div>
);

// Background orbs
const BackgroundOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#FFCC00]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
    <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "4s" }} />
  </div>
);

// ─── HERO: Centered with glow ─────────────────────────────────────
function HeroGlass() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-base-content/60">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/40">
              Web tech that
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] via-[#4488DD] to-[#FFCC00]">
              moves the needle.
            </span>
          </h1>

          <p className="text-base-content/40 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            You&apos;re small but <strong className="text-base-content/70">mighty, and ready to grow</strong> — you just need the right tech to do it. We can build that for you. <em>Fast.</em>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#prices-glass" className="btn btn-primary btn-lg px-8">
              Get started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#solutions-glass" className="btn btn-ghost btn-lg border border-white/10">
              See our work
            </a>
          </div>
        </motion.div>

        {/* Floating image with glass frame */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <GlassCard className="p-2 max-w-3xl mx-auto" glow>
            <Image
              src="/lansky-solutions.png"
              alt="Lansky Solutions"
              width={7041}
              height={5788}
              className="w-full h-auto rounded-xl"
              priority
            />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TOOLS: Glass tool cards ──────────────────────────────────────
function ToolsGlass() {
  const [url, setUrl] = useState("");
  const handleTestPage = (e) => {
    e.preventDefault();
    let testUrl = url.trim();
    if (!testUrl) return;
    if (!/^https?:\/\//i.test(testUrl)) testUrl = `https://${testUrl}`;
    window.open(`https://landingpage.report?url=${encodeURIComponent(testUrl)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-primary/80 font-medium tracking-widest uppercase">Free Tools</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/50">
              Tools to Help Your Business Grow
            </span>
          </h2>
          <p className="text-base-content/40 text-lg">We build tools that solve real problems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-8" glow>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg">🎯</div>
              <h3 className="font-bold text-xl">Landing Page Report</h3>
            </div>
            <p className="text-base-content/50 mb-6">Get instant AI-powered feedback on your landing page&apos;s effectiveness.</p>
            <form onSubmit={handleTestPage} className="space-y-3">
              <input type="url" placeholder="https://your-landing-page.com" value={url} onChange={(e) => setUrl(e.target.value)} className="input input-bordered w-full bg-white/5 border-white/10" required />
              <button type="submit" className="btn btn-primary w-full">Analyze Your Page</button>
            </form>
          </GlassCard>

          <GlassCard className="p-8" glow>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-cyan-600 flex items-center justify-center text-lg">🚀</div>
              <h3 className="font-bold text-xl">Compute Prices</h3>
            </div>
            <p className="text-base-content/50 mb-6">Compare GPU prices across 27+ providers instantly.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["H100", "A100", "RTX 4090", "L40S", "+20 more"].map((g) => (
                <span key={g} className="text-xs border border-white/10 text-base-content/50 px-2.5 py-1 rounded-full">{g}</span>
              ))}
            </div>
            <a href="https://computeprices.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">Compare GPU Prices</a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM: Glass panels ────────────────────────────────────────
function ProblemGlass() {
  return (
    <section className="relative py-24 md:py-32 px-8" id="problem-glass">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-error/80 font-medium tracking-widest uppercase">The Problem</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/50">
              70% of tech projects fail
            </span>
          </h2>
          <p className="text-base-content/40 text-lg max-w-xl mx-auto">
            Not finding a good enough solution, too much complexity, ignoring users... There&apos;s so many ways good ideas can lose steam.
          </p>
        </div>

        {/* Failure flow as a glass pipeline */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          {[
            { emoji: "💡", label: "Beautiful new idea" },
            { emoji: "👩🏻‍💻", label: "Design tons of features" },
            { emoji: "💰", label: "Project overruns" },
            { emoji: "😤", label: "Project fails" },
          ].map((step, i) => (
            <motion.div key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1"
            >
              <GlassCard className="p-6 text-center">
                <span className="text-3xl block mb-2">{step.emoji}</span>
                <p className="font-semibold text-sm">{step.label}</p>
              </GlassCard>
              {i < 3 && (
                <div className="flex justify-center py-2 md:hidden">
                  <svg className="w-4 h-4 text-base-content/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" /></svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <GlassCard className="p-8 md:p-12 max-w-3xl mx-auto">
          <p className="text-base-content/60 mb-6">Here&apos;s where most businesses run into trouble:</p>
          <div className="space-y-3 mb-8">
            {[
              "Developers focus on the task, not the full picture",
              "They don't understand your business goals",
              "Complexity means more billable hours",
              "User experience is an afterthought",
              "Tech jargon instead of clear communication",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-primary/50 mt-2.5 shrink-0" />
                <span className="text-base-content/50">{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/[0.06]">
            <p className="text-base-content/40 mb-2">Projects run over budget, over schedule, or never ship.</p>
            <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              You need development designed for growth.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

// ─── SERVICES: Glass grid ─────────────────────────────────────────
function ServicesGlass() {
  return (
    <section className="relative py-24 md:py-32 px-8" id="solutions-glass">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-primary/80 font-medium tracking-widest uppercase">What we do</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/50">
              Start small. Iterate. Build lean.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📺", title: "Web Apps", desc: "Get a custom-built, high-performance web application that's lean, profitable, and designed to grow with you.", gradient: "from-blue-500/20 via-transparent to-transparent" },
            { icon: "💳", title: "Ecommerce", desc: "Create seamless and effective e-commerce flows that take users from discovery to checkout in a fully integrated funnel.", gradient: "from-green-500/20 via-transparent to-transparent" },
            { icon: "🎨", title: "Marketing Sites", desc: "Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management.", gradient: "from-orange-500/20 via-transparent to-transparent" },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-8 h-full group hover:border-white/[0.15] transition-colors">
                <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl`} />
                <div className="relative">
                  <span className="text-4xl block mb-6">{service.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-base-content/40 leading-relaxed">{service.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS: Glass cards ────────────────────────────────────
function TestimonialsGlass() {
  return (
    <section className="relative py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What people say about working with us
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className={`p-6 h-full ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-warning">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-base-content/60 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image src={t.authorImage} alt={t.author} width={32} height={32} className="rounded-full ring-1 ring-white/10" />
                  <div>
                    <p className="font-medium text-sm">{t.author}</p>
                    <p className="text-xs text-base-content/30">{t.authorTitle}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER: Glass profile ───────────────────────────────────────
function FounderGlass() {
  return (
    <section className="relative py-24 md:py-32 px-8" id="hello-glass">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-16" glow>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl" />
                <Image
                  src="/gene-kobilansky-headshot-yellow-bg.png"
                  alt="Gene Kobilansky"
                  width={150}
                  height={150}
                  className="relative rounded-full ring-2 ring-white/10"
                />
              </div>
            </div>
            <div>
              <span className="text-sm text-primary/80 font-medium tracking-widest uppercase">Hello</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-6">
                What if web development could be{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
                  faster, easier, and simpler?
                </span>
              </h2>
              <div className="text-base-content/40 space-y-4 leading-relaxed">
                <p>Hi, I&apos;m Gene Kobilansky, founder of Lansky Tech, and that is <strong className="text-base-content/70">exactly my specialty</strong>.</p>
                <p>I&apos;ve worked with companies of all sizes — from small charity organizations to McDonald&apos;s, Amazon, GE, and Samsung. They all needed the right tech solutions with as little bloat as possible.</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Image src="/gk-initials-white.png" alt="Signature" width={1920} height={1080} className="max-w-32 opacity-40" />
              </div>
              <div className="mt-6">
                <ButtonLead />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

// ─── PRICING: Glass cards ─────────────────────────────────────────
function PricingGlass({ openModal }) {
  return (
    <section className="relative py-24 md:py-32 px-8" id="prices-glass">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-primary/80 font-medium tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/50">
              Simple Pricing to Get Started
            </span>
          </h2>
          <p className="text-base-content/40 text-lg max-w-xl mx-auto">Transparent pricing. No overhead. No surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {config.stripe.plans.map((plan, i) => (
            <motion.div
              key={plan.priceId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className={`p-8 h-full flex flex-col ${plan.isFeatured ? "ring-1 ring-primary/50" : ""}`} glow={plan.isFeatured}>
                {plan.isFeatured && (
                  <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs text-primary font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-base-content/40 text-sm mb-6 flex-grow">{plan.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm text-base-content/50 flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{f.name}</span>
                    </li>
                  ))}
                </ul>
                <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base-content/30">
            Need something custom?{" "}
            <button
              className="text-primary/80 hover:text-primary transition-colors"
              onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
            >
              Let&apos;s talk →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ: Glass accordion ─────────────────────────────────────────
function FAQGlass() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="relative py-24 md:py-32 px-8" id="faq-glass">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/50">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqList.map((item, i) => (
            <GlassCard key={i} className="overflow-visible">
              <button
                className="w-full p-5 flex items-center justify-between text-left font-medium hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4">{item.question}</span>
                <svg className={`w-4 h-4 shrink-0 transition-transform text-base-content/30 ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                <p className="text-base-content/40 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA: Gradient glass ──────────────────────────────────────────
function CTAGlass({ openModal }) {
  return (
    <section className="relative py-24 md:py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-12 md:p-20 text-center overflow-hidden" glow>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Ready to build something great?
              </span>
            </h2>
            <p className="text-base-content/40 text-lg mb-10 max-w-lg mx-auto">
              Let&apos;s talk about your project. No strings attached.
            </p>
            <button
              className="btn btn-primary btn-lg px-8"
              onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
            >
              Get in touch
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
export default function Concept4() {
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
      <main className="relative bg-base-100 overflow-hidden">
        <BackgroundOrbs />
        <div className="relative z-10">
          <HeroGlass />
          <ToolsGlass />
          <ProblemGlass />
          <FounderGlass />
          <ServicesGlass />
          <TestimonialsGlass />
          <PricingGlass openModal={openModal} />
          <FAQGlass />
          <CTAGlass openModal={openModal} />
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={modalTitle}>
          {modalContent}
        </Modal>
      </main>
      <Footer />
    </>
  );
}
