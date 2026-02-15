"use client";

import { Suspense, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import config from "@/config";
import Header from "@/components/layout/Header";
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";
import ButtonCheckout from "@/components/ui/ButtonCheckout";
import Footer from "@/components/layout/Footer";

/*
 * CONCEPT 3: "Bento Grid / Dashboard"
 *
 * Design philosophy: Everything is a card. Bento-box grid layouts
 * with varying card sizes, rounded corners, subtle borders, and
 * a cohesive "dashboard" feel. Inspired by the Linear, Vercel,
 * and Apple's latest bento-style marketing pages.
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

const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`rounded-2xl border border-base-300 bg-base-100 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

// ─── HERO: Bento hero grid ────────────────────────────────────────
function HeroBento() {
  return (
    <section className="pt-28 lg:pt-36 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main hero card - spans 2 cols */}
          <BentoCard className="lg:col-span-2 p-8 md:p-12 bg-gradient-to-br from-neutral to-neutral/90" delay={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-medium mb-6">Lansky Tech</p>
            <h1 className="text-4xl md:text-6xl font-black text-neutral-content leading-[0.95] tracking-tight mb-6">
              Web tech
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
                that moves the needle.
              </span>
            </h1>
            <p className="text-neutral-content/60 text-lg max-w-lg mb-8">
              You&apos;re small but <strong className="text-neutral-content">mighty, and ready to grow</strong> — you just need the right tech to do it. We can build that for you. <em>Fast.</em>
            </p>
            <a href="#prices-bento" className="btn btn-primary">Get started</a>
          </BentoCard>

          {/* Image card */}
          <BentoCard className="p-6 flex items-center justify-center bg-base-200" delay={0.1}>
            <Image
              src="/lansky-solutions.png"
              alt="Lansky Solutions"
              width={7041}
              height={5788}
              className="w-full h-auto"
              priority
            />
          </BentoCard>

          {/* Stats row */}
          <BentoCard className="p-6 flex items-center justify-center" delay={0.2}>
            <div className="text-center">
              <p className="text-4xl font-black text-primary">70%</p>
              <p className="text-base-content/40 text-sm mt-1">of tech projects fail</p>
            </div>
          </BentoCard>

          <BentoCard className="p-6 flex items-center justify-center" delay={0.25}>
            <div className="text-center">
              <p className="text-4xl font-black text-secondary">100%</p>
              <p className="text-base-content/40 text-sm mt-1">5-star reviews</p>
            </div>
          </BentoCard>

          <BentoCard className="p-6 flex items-center justify-center" delay={0.3}>
            <div className="text-center">
              <p className="text-4xl font-black text-accent">5+</p>
              <p className="text-base-content/40 text-sm mt-1">years with clients</p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

// ─── TOOLS: Bento tool cards ──────────────────────────────────────
function ToolsBento() {
  const [url, setUrl] = useState("");
  const handleTestPage = (e) => {
    e.preventDefault();
    let testUrl = url.trim();
    if (!testUrl) return;
    if (!/^https?:\/\//i.test(testUrl)) testUrl = `https://${testUrl}`;
    window.open(`https://landingpage.report?url=${encodeURIComponent(testUrl)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Section header card */}
          <BentoCard className="p-8 bg-base-200" delay={0}>
            <span className="text-3xl mb-3 block">🛠️</span>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Free Tools</h2>
            <p className="text-base-content/50">We build tools that solve real problems. Try them free.</p>
          </BentoCard>

          {/* Landing Page Report */}
          <BentoCard className="p-8" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl">🎯</div>
              <h3 className="font-bold text-lg">Landing Page Report</h3>
            </div>
            <p className="text-base-content/50 text-sm mb-4">Get instant AI-powered feedback on your landing page&apos;s effectiveness.</p>
            <form onSubmit={handleTestPage} className="space-y-2">
              <input type="url" placeholder="https://your-page.com" value={url} onChange={(e) => setUrl(e.target.value)} className="input input-bordered input-sm w-full" required />
              <button type="submit" className="btn btn-primary btn-sm w-full">Analyze</button>
            </form>
          </BentoCard>

          {/* Compute Prices */}
          <BentoCard className="p-8" delay={0.15}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-cyan-600 flex items-center justify-center text-xl">🚀</div>
              <h3 className="font-bold text-lg">Compute Prices</h3>
            </div>
            <p className="text-base-content/50 text-sm mb-4">Compare GPU prices across 27+ providers instantly.</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["H100", "A100", "RTX 4090", "L40S"].map((g) => (
                <span key={g} className="badge badge-sm badge-outline">{g}</span>
              ))}
            </div>
            <a href="https://computeprices.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-full">Compare Prices</a>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM: Bento problem grid ──────────────────────────────────
function ProblemBento() {
  return (
    <section className="py-4 px-4 md:px-8" id="problem-bento">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main problem text - spans 2 */}
          <BentoCard className="lg:col-span-2 p-8 md:p-12 bg-neutral" delay={0}>
            <p className="text-error/80 text-xs tracking-widest uppercase font-medium mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-content tracking-tight leading-tight mb-4">
              70% of technology projects fail because they solve the wrong problem
            </h2>
            <p className="text-neutral-content/60 leading-relaxed">
              Not finding a good enough solution, too much complexity, ignoring users... There&apos;s so many ways good ideas can lose steam.
            </p>
          </BentoCard>

          {/* Failure flow steps */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[
              { emoji: "💡", label: "Beautiful new idea", bg: "bg-success/5 border-success/20" },
              { emoji: "👩🏻‍💻", label: "Design tons of features", bg: "bg-info/5 border-info/20" },
              { emoji: "💰", label: "Project overruns", bg: "bg-warning/5 border-warning/20" },
              { emoji: "😤", label: "Project fails", bg: "bg-error/5 border-error/20" },
            ].map((step, i) => (
              <BentoCard key={step.label} className={`p-6 flex flex-col items-center justify-center text-center ${step.bg}`} delay={i * 0.08}>
                <span className="text-4xl mb-2">{step.emoji}</span>
                <p className="font-bold text-sm">{step.label}</p>
              </BentoCard>
            ))}
          </div>

          {/* Pain points - full width */}
          <BentoCard className="lg:col-span-4 p-8 bg-base-200" delay={0.2}>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: "🎯", text: "Developers focus on the task, not the full picture" },
                { icon: "📊", text: "They don't understand your business goals" },
                { icon: "⏰", text: "Complexity = more billable hours" },
                { icon: "👤", text: "User experience is an afterthought" },
                { icon: "💬", text: "Tech jargon instead of clear communication" },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center text-center p-4">
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <p className="text-sm text-base-content/60">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-lg mt-6">You need development designed for growth.</p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES: Large bento cards ──────────────────────────────────
function ServicesBento() {
  return (
    <section className="py-4 px-4 md:px-8" id="solutions-bento">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Section header */}
          <BentoCard className="lg:col-span-3 p-8 md:p-12" delay={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-medium mb-3">What we do</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              We start small & iterate to build a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">lean, profitable product</span>
            </h2>
          </BentoCard>

          {/* Service cards */}
          {[
            { icon: "📺", title: "Web Apps", desc: "Get a custom-built, high-performance web application that's lean, profitable, and designed to grow with you.", gradient: "from-blue-500/10 to-purple-500/10" },
            { icon: "💳", title: "Ecommerce", desc: "Create seamless and effective e-commerce flows that take users from discovery to checkout in a fully integrated funnel.", gradient: "from-green-500/10 to-emerald-500/10" },
            { icon: "🎨", title: "Marketing Sites", desc: "Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management.", gradient: "from-orange-500/10 to-yellow-500/10" },
          ].map((service, i) => (
            <BentoCard key={service.title} className={`p-8 hover:shadow-lg transition-shadow bg-gradient-to-br ${service.gradient}`} delay={i * 0.1}>
              <span className="text-5xl mb-6 block">{service.icon}</span>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-base-content/60 leading-relaxed">{service.desc}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS: Masonry bento ──────────────────────────────────
function TestimonialsBento() {
  return (
    <section className="py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Header card */}
          <BentoCard className="md:col-span-2 lg:col-span-3 p-8" delay={0}>
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                What people say about working with us
              </span>
            </h2>
          </BentoCard>

          {testimonials.map((t, i) => (
            <BentoCard key={i} className={`p-6 ${i === 0 ? "md:row-span-2" : ""}`} delay={i * 0.08}>
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-warning">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className={`text-base-content/70 leading-relaxed mb-4 ${i === 0 ? "text-lg" : "text-sm"}`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <Image src={t.authorImage} alt={t.author} width={32} height={32} className="rounded-full" />
                <div>
                  <p className="font-medium text-sm">{t.author}</p>
                  <p className="text-xs text-base-content/40">{t.authorTitle}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER: Profile card + bio ──────────────────────────────────
function FounderBento() {
  return (
    <section className="py-4 px-4 md:px-8" id="hello-bento">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Profile card */}
          <BentoCard className="p-8 bg-gradient-to-br from-[#0066CC]/10 to-[#FFCC00]/10 flex flex-col items-center text-center" delay={0}>
            <Image
              src="/gene-kobilansky-headshot-yellow-bg.png"
              alt="Gene Kobilansky"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Gene Kobilansky</h3>
            <p className="text-base-content/50 text-sm">Founder, Lansky Tech</p>
            <Image src="/gk-initials-white.png" alt="Signature" width={1920} height={1080} className="max-w-24 opacity-50 mt-4" />
          </BentoCard>

          {/* Bio card */}
          <BentoCard className="lg:col-span-2 p-8 md:p-12" delay={0.1}>
            <p className="text-primary text-xs tracking-widest uppercase font-medium mb-4">Hello</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              What if web development could be{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
                faster, easier, and simpler?
              </span>
            </h2>
            <div className="text-base-content/60 leading-relaxed space-y-4">
              <p>Hi, I&apos;m Gene Kobilansky, founder of Lansky Tech, and that is <strong className="text-base-content">exactly my specialty</strong>.</p>
              <p>I&apos;ve worked with companies of all sizes — from small charity organizations to McDonald&apos;s, Amazon, GE, and Samsung. They all needed the right tech solutions to help them grow, with as little tech bloat as possible.</p>
            </div>
            <div className="mt-6">
              <ButtonLead />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING: Bento pricing grid ──────────────────────────────────
function PricingBento({ openModal }) {
  return (
    <section className="py-4 px-4 md:px-8" id="prices-bento">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Header card */}
          <BentoCard className="lg:col-span-3 p-8 md:p-12 bg-base-200 text-center" delay={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-medium mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Simple Pricing to Get Started</h2>
            <p className="text-base-content/50 max-w-xl mx-auto">Transparent pricing. No overhead. Grab one of our services or reach out for a chat.</p>
          </BentoCard>

          {/* Price cards */}
          {config.stripe.plans.map((plan, i) => (
            <BentoCard
              key={plan.priceId}
              className={`p-8 flex flex-col ${plan.isFeatured ? "ring-2 ring-primary bg-primary/5" : ""}`}
              delay={i * 0.1}
            >
              {plan.isFeatured && (
                <span className="bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-full self-start mb-4">Most Popular</span>
              )}
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <p className="text-base-content/50 text-sm mb-6 flex-grow">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="text-sm text-base-content/60 flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{f.name}</span>
                  </li>
                ))}
              </ul>
              <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
            </BentoCard>
          ))}

          {/* CTA card */}
          <BentoCard className="lg:col-span-3 p-8 text-center bg-base-200" delay={0.3}>
            <p className="text-base-content/50">
              Not the right fit? Need something custom?{" "}
              <button
                className="text-primary font-semibold hover:underline"
                onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
              >
                Send me a note →
              </button>
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ: Bento FAQ ───────────────────────────────────────────────
function FAQBento() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-4 px-4 md:px-8" id="faq-bento">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <BentoCard className="p-8 bg-base-200" delay={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-medium mb-3">FAQ</p>
            <h2 className="text-3xl font-black tracking-tight">Frequently Asked Questions</h2>
          </BentoCard>

          <BentoCard className="lg:col-span-2 p-8" delay={0.1}>
            {faqList.map((item, i) => (
              <div key={i} className={i > 0 ? "border-t border-base-300/50" : ""}>
                <button
                  className="w-full py-4 flex items-center justify-between text-left text-sm font-semibold hover:text-primary transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {item.question}
                  <svg className={`w-4 h-4 shrink-0 ml-2 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-4" : "max-h-0"}`}>
                  <p className="text-base-content/50 text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

// ─── CTA: Final bento ─────────────────────────────────────────────
function CTABento({ openModal }) {
  return (
    <section className="py-4 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <BentoCard className="p-12 md:p-20 bg-gradient-to-br from-neutral to-neutral/90 text-center" delay={0}>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-content tracking-tight mb-6">
            Ready to build something great?
          </h2>
          <p className="text-neutral-content/50 text-lg mb-8 max-w-lg mx-auto">
            Let&apos;s talk about your project. No strings attached.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
          >
            Get in touch
          </button>
        </BentoCard>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
export default function Concept3() {
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
      <main className="bg-base-200">
        <HeroBento />
        <ToolsBento />
        <ProblemBento />
        <FounderBento />
        <ServicesBento />
        <TestimonialsBento />
        <PricingBento openModal={openModal} />
        <FAQBento />
        <CTABento openModal={openModal} />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={modalTitle}>
          {modalContent}
        </Modal>
      </main>
      <Footer />
    </>
  );
}
