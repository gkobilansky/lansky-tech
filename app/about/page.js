"use client";

import { Suspense } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Constellation from '@/components/ui/Constellation';
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";
import { useState } from 'react';
import UkraineCallOut from '@/components/marketing/UkraineCallOut';

const ComparisonTable = () => (
  <div className="grid md:grid-cols-2 gap-6 my-8 mx-20">
    <div className="space-y-4 p-6 rounded-xl bg-gray-900">
      <h3 className="font-semibold text-xl text-red-400">Other dev companies:</h3>
      <ul className="space-y-3">
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
    </div>
    <div className="space-y-4 p-6 rounded-xl bg-gray-900">
      <h3 className="font-semibold text-xl text-green-400">Lansky Tech:</h3>
      <ul className="space-y-3">
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
    </div>
  </div>
);

const ValueProps = () => (
  <div className="grid md:grid-cols-4 gap-6 my-12">
    <div className="relative overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="h-full space-y-3 p-6 rounded-xl bg-gradient-to-b from-blue-900/50 to-gray-900 border border-blue-900/30">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-xl text-blue-400">We're scrappy</h3>
        <p className="text-gray-300 text-sm">We do what it takes to get things done efficiently and effectively.</p>
      </div>
    </div>

    <div className="relative overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="h-full space-y-3 p-6 rounded-xl bg-gradient-to-b from-blue-900/50 to-gray-900 border border-blue-900/30">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="font-semibold text-xl text-blue-400">We're collaborative</h3>
        <p className="text-gray-300 text-sm">We partner with our clients to guide them down the right path to achieve their goals.</p>
      </div>
    </div>

    <div className="relative overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="h-full space-y-3 p-6 rounded-xl bg-gradient-to-b from-blue-900/50 to-gray-900 border border-blue-900/30">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h3 className="font-semibold text-xl text-blue-400">We're honest and open</h3>
        <p className="text-gray-300 text-sm">Open communication is key, so we're never afraid to challenge our clients (in a good way!) to help them get what they need.</p>
      </div>
    </div>

    <div className="relative overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="h-full space-y-3 p-6 rounded-xl bg-gradient-to-b from-blue-900/50 to-gray-900 border border-blue-900/30">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-xl text-blue-400">We're big picture thinkers</h3>
        <p className="text-gray-300 text-sm">We look at every project holistically, taking the full end-to-end experience into account for each piece of tech we build.</p>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 my-12">
    <div className="space-y-3 p-6 rounded-xl bg-gray-900 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Enterprise-grade solutions</h3>
      <p className="text-gray-300">Whether it's an Oracle ERP implementation or a custom e-commerce platform, we build scalable solutions that delight users. One recently launched video streaming upgrade saw a 93% improvement in user experience.</p>
    </div>
    <div className="space-y-3 p-6 rounded-xl bg-gray-900 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Growth-driven development</h3>
      <p className="text-gray-300">From helping a charity improve their donation conversion rate by 7% to generating $30,000+ in savings through a franchise billing system, we deliver measurable results. Our solutions combine technical excellence with proven business impact.</p>
    </div>
    <div className="space-y-3 p-6 rounded-xl bg-gray-900 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Full-stack expertise</h3>
      <p className="text-gray-300">With deep experience in React, Node.js, AWS, and modern web technologies, we can build exactly the end-to-end solutions your business needs to get you to your goals.</p>
    </div>
    <div className="space-y-3 p-6 rounded-xl bg-gray-900 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Product leadership</h3>
      <p className="text-gray-300">We've led development teams and managed multi-million dollar projects, bringing proven experience in product strategy and technical execution to every project.</p>
    </div>
  </div>
);

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] bg-opacity-80">
      <Suspense>
        <Header openModal={openModal} />
      </Suspense>
      <Constellation />
      
      <main className="max-w-6xl mx-auto px-4 pt-32">
        <section className="text-center my-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00] animate-hue">ABOUT LANSKY TECH</span>
          </h1>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Your go-to partners for fast, simple, and effective tech solutions.
          </p>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            We do things a little (okay, a lot) differently than most development companies.
          </h2>
          <ComparisonTable />
          <ValueProps />
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-8 text-center">Who's behind Lansky Tech?</h2>
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto">
            <p>That would be me, <a 
              href="https://www.linkedin.com/in/genekobilansky" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center hover:text-blue-400 group"
            >
              Gene Kobilansky
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>, Ukrainian-American dad of two 👯, wrestling coach 🤼, and management consultant turned developer 🧑🏻‍💻. I've built this company to offer an experience designed to delight, both my clients and <em>their</em> clients (the ones who will be using the tech I and my trusted team of developers build).</p>
            <p>No matter the project — big or small — I take my clients through a 4-step process that guarantees success:</p>
            <div className="my-12 p-6 border border-gray-800 rounded-xl bg-gray-900">
              <p className="text-xl font-semibold text-center text-blue-400">
                Listen → Build → Test → Iterate
              </p>
            </div>
            <p>Before jumping into building, I take the time to fully understand my clients' needs, their business goals, and how the tech I build will help them achieve those goals most effectively. I then build quickly (ask me about our One-Week MVP!) so we can get this tech in the hands of the end user. That allows us to test and iterate until we get things exactly where they need to be.</p>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-8 text-center">Gimme the good stuff</h2>
          <p className="mb-8 text-gray-400 text-center max-w-2xl mx-auto">Here's a bit more of what you can expect from Lansky Tech:</p>
          <Services />
        </section>

        <section className="text-center py-16 mb-32 border border-gray-800 rounded-2xl bg-gray-900">
          <h3 className="text-2xl font-semibold mb-6">Ready to build something amazing?</h3>
          <ButtonLead extraStyle="mx-auto" />
        </section>
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
