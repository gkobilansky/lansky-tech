"use client";

import { Suspense, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Constellation from '@/components/ui/Constellation';
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";
import { useState } from 'react';
import UkraineCallOut from '@/components/marketing/UkraineCallOut';

const ComparisonTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6 my-8">
      <motion.div
        className="space-y-4 p-8 rounded-xl bg-base-200 border border-error/20"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="font-serif font-semibold text-2xl text-error">Other dev companies:</h3>
        <ul className="space-y-3 text-base-content/90">
          <li className="flex items-start gap-2">
            <span className="text-2xl">😖</span>
            <span>Rack up costs with overly complex tech</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😖</span>
            <span>Take months to build before pushing their code live</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😖</span>
            <span>Understand tech, but not business</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😖</span>
            <span>Can't explain the tech they're building in simple terms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😖</span>
            <span>Make sure clients are dependent on them for everything</span>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="space-y-4 p-8 rounded-xl bg-base-200 border border-success/20"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="font-serif font-semibold text-2xl text-success">Lansky Tech:</h3>
        <ul className="space-y-3 text-base-content/90">
          <li className="flex items-start gap-2">
            <span className="text-2xl">😃</span>
            <span>Will always guide you to best and simplest option that'll save you the most money</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😃</span>
            <span>Builds you a testable MVP in just one week, iterating and improving once users can get their hands on it</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😃</span>
            <span>Has a background in business and finance, and always views tech through that lens</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😃</span>
            <span>Great at breaking down even the most complex ideas into terms any non-techie person can understand</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">😃</span>
            <span>Leans on teaching and coaching experience to empower clients to own their tech as much as possible</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

const ValueProps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "We're scrappy",
      description: "We do what it takes to get things done efficiently and effectively.",
      delay: 0.1
    },
    {
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      title: "We're collaborative",
      description: "We partner with our clients to guide them down the right path to achieve their goals.",
      delay: 0.2
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: "We're honest and open",
      description: "Open communication is key, so we're never afraid to challenge our clients (in a good way!) to help them get what they need.",
      delay: 0.3
    },
    {
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
      title: "We're big picture thinkers",
      description: "We look at every project holistically, taking the full end-to-end experience into account for each piece of tech we build.",
      delay: 0.4
    }
  ];

  return (
    <div ref={ref} className="grid md:grid-cols-4 gap-6 my-12">
      {values.map((value, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: value.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-full space-y-3 p-6 rounded-xl bg-base-200 border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-xl text-primary">{value.title}</h3>
            <p className="text-base-content/80 text-sm leading-relaxed">{value.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Enterprise-grade solutions",
      description: "Whether it's an Oracle ERP implementation or a custom e-commerce platform, we build scalable solutions that delight users. One recently launched video streaming upgrade saw a 93% improvement in user experience.",
      delay: 0.1
    },
    {
      title: "Growth-driven development",
      description: "From helping a charity improve their donation conversion rate by 7% to generating $30,000+ in savings through a franchise billing system, we deliver measurable results. Our solutions combine technical excellence with proven business impact.",
      delay: 0.2
    },
    {
      title: "Full-stack expertise",
      description: "With deep experience in React, Node.js, AWS, and modern web technologies, we can build exactly the end-to-end solutions your business needs to get you to your goals.",
      delay: 0.3
    },
    {
      title: "Product leadership",
      description: "We've led development teams and managed multi-million dollar projects, bringing proven experience in product strategy and technical execution to every project.",
      delay: 0.4
    }
  ];

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12 my-12">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group space-y-3 p-6 rounded-xl bg-base-200 border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif font-semibold text-xl text-primary">{service.title}</h3>
          <p className="text-base-content/80 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-base-100">
      <Suspense>
        <Header openModal={openModal} />
      </Suspense>
      <Constellation />

      <main className="max-w-6xl mx-auto px-8 pt-32">
        <section ref={heroRef} className="text-center my-32">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="gradient-text bg-gradient-to-br from-[#0066CC] via-[#0088FF] to-[#FFCC00]">About Lansky Tech</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Your go-to partners for fast, simple, and effective tech solutions.
          </motion.p>
        </section>

        <section className="mb-32">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            We do things a little (okay, a lot) differently than most development companies.
          </motion.h2>
          <ComparisonTable />
          <ValueProps />
        </section>

        <section ref={aboutRef} className="mb-32">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Who's behind Lansky Tech?
          </motion.h2>
          <motion.div
            className="prose prose-lg prose-invert max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base-content/90 leading-relaxed">That would be me, <a
              href="https://www.linkedin.com/in/genekobilansky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 group transition-colors"
            >
              Gene Kobilansky
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>, Ukrainian-American dad of two 👯, wrestling coach 🤼, and management consultant turned developer 🧑🏻‍💻. I've built this company to offer an experience designed to delight, both my clients and <em className="font-serif">their</em> clients (the ones who will be using the tech I and my trusted team of developers build).</p>
            <p className="text-base-content/90 leading-relaxed">No matter the project — big or small — I take my clients through a 4-step process that guarantees success:</p>
            <div className="my-12 p-8 border border-primary/20 rounded-xl bg-base-200">
              <p className="font-serif text-2xl font-semibold text-center text-primary">
                Listen → Build → Test → Iterate
              </p>
            </div>
            <p className="text-base-content/90 leading-relaxed">Before jumping into building, I take the time to fully understand my clients' needs, their business goals, and how the tech I build will help them achieve those goals most effectively. I then build quickly (ask me about our One-Week MVP!) so we can get this tech in the hands of the end user. That allows us to test and iterate until we get things exactly where they need to be.</p>
          </motion.div>
        </section>

        <section className="mb-32">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Gimme the good stuff
          </motion.h2>
          <motion.p
            className="mb-12 text-base-content/80 text-center max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Here's a bit more of what you can expect from Lansky Tech:
          </motion.p>
          <Services />
        </section>

        <motion.section
          ref={ctaRef}
          className="text-center py-16 mb-32 border border-primary/20 rounded-2xl bg-base-200"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif text-3xl font-semibold mb-6">Ready to build something amazing?</h3>
          <ButtonLead extraStyle="mx-auto" />
        </motion.section>
        <UkraineCallOut />
      </main>

      <Modal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
        title={modalTitle}
      >
        {modalContent}
      </Modal>
      
      <Footer />
    </div>
  );
}
