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
 * CONCEPT 2: "Minimalist Editorial"
 *
 * Design philosophy: Clean whitespace, oversized serif-style headings,
 * single-column centered layout, muted palette with one accent.
 * Inspired by Apple's marketing pages, Stripe, and editorial magazines.
 * Content breathes — generous padding, no visual clutter.
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

// ─── HERO: Centered, typographic ──────────────────────────────────
function HeroEditorial() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-base-100 via-base-100 to-base-200 pointer-events-none" />
      <div className="relative z-10 text-center max-w-4xl mx-auto py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-8">Lansky Tech</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9] mb-8">
            Web tech
            <br />
            <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
              that moves
            </span>
            <br />
            the needle.
          </h1>
          <p className="text-base-content/50 text-xl md:text-2xl max-w-xl mx-auto leading-relaxed mt-12">
            You&apos;re small but mighty, and ready to grow — you just need the right tech to do it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="#problem-editorial"
            className="inline-flex items-center gap-2 text-base-content/40 hover:text-primary transition-colors text-sm tracking-widest uppercase"
          >
            <span>Scroll to explore</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── STAT: Large number + text ────────────────────────────────────
function StatLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 border-y border-base-300" ref={ref}>
      <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {[
          { number: "70%", label: "of tech projects fail" },
          { number: "5+", label: "years with our clients" },
          { number: "100%", label: "five-star reviews" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <p className="text-6xl md:text-7xl font-extralight tracking-tight text-primary">{stat.number}</p>
            <p className="text-base-content/40 text-sm tracking-widest uppercase mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── PROBLEM: Long-form editorial ─────────────────────────────────
function ProblemEditorial() {
  return (
    <section id="problem-editorial" className="py-24 md:py-40">
      <div className="max-w-2xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-12">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight mb-12">
            70% of technology projects fail because they solve the <em className="font-medium not-italic text-primary">wrong problem</em>
          </h2>
          <div className="text-base-content/60 text-lg leading-[1.8] space-y-6">
            <p>Not finding a good enough solution, too much complexity, ignoring users... There&apos;s so many ways good ideas can lose steam.</p>
            <p>Here&apos;s where most businesses run into trouble when hiring developers:</p>
          </div>

          <div className="my-12 space-y-4">
            {[
              "The developers focus on the task in front of them, without looking at the full picture.",
              "They don't understand the overall business goals.",
              "They don't mind making things overly complicated — more billable hours.",
              "They fail to account for user experience.",
              "They're techies who just don't get how to communicate to non-techies.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 py-3 border-b border-base-300/50"
              >
                <span className="text-primary/40 font-light text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base-content/70">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pl-6 border-l-2 border-primary/30">
            <p className="text-lg text-base-content/60 leading-relaxed">
              Projects that run over budget, over schedule, are prone to breaking, or worst case scenario: they never see the light of day.
            </p>
            <p className="text-xl font-medium text-base-content mt-4">
              You need development designed for growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SERVICES: Numbered list ──────────────────────────────────────
function ServicesEditorial() {
  const services = [
    { num: "01", title: "Web Apps", description: "Get a custom-built, high-performance web application that's lean, profitable, and designed to grow with you." },
    { num: "02", title: "Ecommerce", description: "Create seamless and effective e-commerce flows that take users from discovery to checkout in a fully integrated funnel." },
    { num: "03", title: "Marketing Sites", description: "Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management." },
  ];

  return (
    <section className="py-24 md:py-40 bg-base-200" id="solutions-editorial">
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-12">What we do</p>
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight mb-20">
          We start small & iterate to build a lean, profitable product
        </h2>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group py-12 border-t border-base-300 flex flex-col md:flex-row gap-6 md:gap-16"
            >
              <div className="md:w-16 shrink-0">
                <span className="text-primary/30 text-sm font-light">{service.num}</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-base-content/50 text-lg leading-relaxed max-w-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS: Single featured + grid ─────────────────────────
function TestimonialsEditorial() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-12">Testimonials</p>

        {/* Featured testimonial */}
        <blockquote className="mb-20">
          <p className="text-3xl md:text-4xl font-extralight leading-relaxed tracking-tight text-base-content/80">
            &ldquo;{featured.text}&rdquo;
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Image src={featured.authorImage} alt={featured.author} width={48} height={48} className="rounded-full" />
            <div>
              <p className="font-medium">{featured.author}</p>
              <p className="text-base-content/40 text-sm">{featured.authorTitle}</p>
            </div>
          </div>
        </blockquote>

        {/* Grid of others */}
        <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-base-300">
          {rest.map((t, i) => (
            <div key={i} className="py-6">
              <div className="flex mb-2">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-warning">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-base-content/60 text-sm leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Image src={t.authorImage} alt={t.author} width={28} height={28} className="rounded-full" />
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-base-content/40">{t.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER: Centered portrait ───────────────────────────────────
function FounderEditorial() {
  return (
    <section className="py-24 md:py-40 bg-base-200" id="hello-editorial">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/gene-kobilansky-headshot-yellow-bg.png"
            alt="Gene Kobilansky"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-8"
          />
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-8">
            What if web development could be{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] to-[#FFCC00]">
              faster, easier, and simpler?
            </span>
          </h2>
          <div className="text-base-content/50 text-lg leading-[1.8] space-y-6 text-left">
            <p>Hi, I&apos;m Gene Kobilansky, founder of Lansky Tech, and that is <strong className="text-base-content">exactly my specialty</strong>.</p>
            <p>I&apos;ve worked with companies of all sizes — from small charity organizations just getting off the ground, to some of the biggest companies in the world, like McDonald&apos;s, Amazon, GE, and Samsung.</p>
            <p>They all needed the right tech solutions to help them grow, with as little tech bloat as possible.</p>
          </div>
          <div className="mt-8 flex justify-center">
            <Image src="/gk-initials-white.png" alt="Gene Kobilansky signature" width={1920} height={1080} className="max-w-40 opacity-60" />
          </div>
          <div className="mt-8">
            <ButtonLead />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TOOLS: Minimal cards ─────────────────────────────────────────
function ToolsEditorial() {
  const [url, setUrl] = useState("");
  const handleTestPage = (e) => {
    e.preventDefault();
    let testUrl = url.trim();
    if (!testUrl) return;
    if (!/^https?:\/\//i.test(testUrl)) testUrl = `https://${testUrl}`;
    window.open(`https://landingpage.report?url=${encodeURIComponent(testUrl)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-12">Free Tools</p>
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-16">
          Tools to Help Your Business Grow
        </h2>

        <div className="space-y-8">
          <div className="p-8 md:p-12 border border-base-300 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-medium mb-2">Landing Page Report</h3>
                <p className="text-base-content/50 leading-relaxed">Get instant AI-powered feedback on your landing page&apos;s effectiveness. Analyze copy, design, and conversion potential.</p>
              </div>
              <div className="md:w-1/2">
                <form onSubmit={handleTestPage} className="space-y-3">
                  <input type="url" placeholder="https://your-landing-page.com" value={url} onChange={(e) => setUrl(e.target.value)} className="input input-bordered w-full bg-base-200/50" required />
                  <button type="submit" className="btn btn-primary w-full">Analyze Your Page</button>
                </form>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 border border-base-300 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-medium mb-2">Compute Prices</h3>
                <p className="text-base-content/50 leading-relaxed">Compare GPU prices across 27+ providers instantly. Find the cheapest H100, A100, RTX 4090 and more.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["H100", "A100", "RTX 4090", "L40S", "+20 more"].map((g) => (
                    <span key={g} className="text-xs text-base-content/40 border border-base-300 px-2 py-1 rounded">{g}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <a href="https://computeprices.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  Compare GPU Prices
                </a>
                <p className="text-center text-xs text-base-content/40 mt-3">Daily pricing updates from 27+ providers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING: Clean centered ──────────────────────────────────────
function PricingEditorial({ openModal }) {
  return (
    <section className="py-24 md:py-40 bg-base-200" id="prices-editorial">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-8">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-6">
            Simple Pricing to Get Started
          </h2>
          <p className="text-base-content/40 text-lg max-w-xl mx-auto">
            Transparent pricing. No overhead. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-base-300 rounded-xl overflow-hidden">
          {config.stripe.plans.map((plan, i) => (
            <div
              key={plan.priceId}
              className={`p-8 flex flex-col ${
                plan.isFeatured ? "bg-base-100 relative" : "bg-base-100/50"
              } ${i < 2 ? "border-b md:border-b-0 md:border-r border-base-300" : ""}`}
            >
              {plan.isFeatured && (
                <span className="absolute top-4 right-4 text-xs text-primary font-medium tracking-widest uppercase">Popular</span>
              )}
              <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
              <p className="text-base-content/40 text-sm mb-8 flex-grow">{plan.description}</p>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="text-sm text-base-content/60 flex items-start gap-2">
                    <span className="text-primary/50 mt-0.5">&#x2713;</span>
                    <span>{f.name}</span>
                  </li>
                ))}
              </ul>
              <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base-content/40">
            Need something custom?{" "}
            <button
              className="text-primary hover:underline"
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

// ─── FAQ: Clean accordion ─────────────────────────────────────────
function FAQEditorial() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-24 md:py-40" id="faq-editorial">
      <div className="max-w-2xl mx-auto px-8">
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-12">FAQ</p>
        <h2 className="text-4xl font-extralight tracking-tight mb-16">
          Frequently Asked Questions
        </h2>
        {faqList.map((item, i) => (
          <div key={i} className="border-t border-base-300/50">
            <button
              className="w-full py-6 flex items-center justify-between text-left text-base hover:text-primary transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="pr-4">{item.question}</span>
              <svg className={`w-4 h-4 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-6" : "max-h-0"}`}>
              <p className="text-base-content/50 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA: Simple centered ─────────────────────────────────────────
function CTAEditorial({ openModal }) {
  return (
    <section className="py-32 md:py-48 bg-base-200">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
          Let&apos;s build something
          <br />
          <span className="font-medium">together.</span>
        </h2>
        <p className="text-base-content/40 text-lg mb-12">No strings attached. Just a conversation.</p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => openModal(<div className="w-full max-w-md mx-auto"><ButtonLead /></div>)}
        >
          Start a conversation
        </button>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
export default function Concept2() {
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
        <HeroEditorial />
        <StatLine />
        <ProblemEditorial />
        <FounderEditorial />
        <ServicesEditorial />
        <TestimonialsEditorial />
        <ToolsEditorial />
        <PricingEditorial openModal={openModal} />
        <FAQEditorial />
        <CTAEditorial openModal={openModal} />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={modalTitle}>
          {modalContent}
        </Modal>
      </main>
      <Footer />
    </>
  );
}
