"use client";

import { Suspense } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Constellation from '@/components/ui/Constellation';
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";
import { useState } from 'react';

const ComparisonTable = () => (
  <div className="grid md:grid-cols-2 gap-6 my-8">
    <div className="space-y-4 p-6 rounded-xl bg-gray-900/30">
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
    <div className="space-y-4 p-6 rounded-xl bg-gray-900/30">
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
  <div className="grid md:grid-cols-2 gap-8 my-12">
    <div className="space-y-2 p-6 rounded-xl bg-gray-900/30">
      <h3 className="font-semibold text-xl text-blue-400">We're scrappy</h3>
      <p className="text-gray-300">We do what it takes to get things done efficiently and effectively.</p>
    </div>
    <div className="space-y-2 p-6 rounded-xl bg-gray-900/30">
      <h3 className="font-semibold text-xl text-blue-400">We're collaborative</h3>
      <p className="text-gray-300">We partner with our clients to guide them down the right path to achieve their goals.</p>
    </div>
    <div className="space-y-2 p-6 rounded-xl bg-gray-900/30">
      <h3 className="font-semibold text-xl text-blue-400">We're honest and open</h3>
      <p className="text-gray-300">Open communication is key, so we're never afraid to challenge our clients (in a good way!) to help them get what they need.</p>
    </div>
    <div className="space-y-2 p-6 rounded-xl bg-gray-900/30">
      <h3 className="font-semibold text-xl text-blue-400">We're big picture thinkers</h3>
      <p className="text-gray-300">We look at every project holistically, taking the full end-to-end experience into account for each piece of tech we build.</p>
    </div>
  </div>
);

const Services = () => (
  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 my-12">
    <div className="space-y-3 p-6 rounded-xl bg-gray-900/30 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Enterprise-grade solutions</h3>
      <p className="text-gray-300">Whether it's an Oracle ERP implementation or a custom e-commerce platform, we build scalable solutions that delight users. One recently launched video streaming upgrade saw a 93% improvement in user experience.</p>
    </div>
    <div className="space-y-3 p-6 rounded-xl bg-gray-900/30 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Growth-driven development</h3>
      <p className="text-gray-300">From helping a charity improve their donation conversion rate by 7% to generating $30,000+ in savings through a franchise billing system, we deliver measurable results. Our solutions combine technical excellence with proven business impact.</p>
    </div>
    <div className="space-y-3 p-6 rounded-xl bg-gray-900/30 border border-gray-800">
      <h3 className="font-semibold text-xl text-blue-400">Full-stack expertise</h3>
      <p className="text-gray-300">With deep experience in React, Node.js, AWS, and modern web technologies, we can build exactly the end-to-end solutions your business needs to get you to your goals.</p>
    </div>
    <div className="space-y-3 p-6 rounded-xl bg-gray-900/30 border border-gray-800">
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
    <div className="min-h-screen bg-[#0A0A0A]">
      <Suspense>
        <Header openModal={openModal} />
      </Suspense>
      <Constellation />
      
      <main className="max-w-6xl mx-auto px-4 pt-32">
        <section className="text-center my-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Lansky Tech
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
            <p>That would be me, Gene Kobilansky, Ukrainian-American dad of two, wrestling coach, and management consultant turned developer. I've built this company to offer an experience designed to delight, both my clients and <em>their</em> clients (the ones who will be using the tech I and my trusted team of developers build).</p>
            <p>No matter the project — big or small — I take my clients through a 4-step process that guarantees success:</p>
            <div className="my-12 p-6 border border-gray-800 rounded-xl bg-gray-900/30">
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

        <section className="text-center py-16 mb-32 border border-gray-800 rounded-2xl bg-gray-900/30">
          <h3 className="text-2xl font-semibold mb-6">Ready to build something amazing?</h3>
          <ButtonLead extraStyle="mx-auto" />
        </section>
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
