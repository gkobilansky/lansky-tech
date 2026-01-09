"use client";

import { Suspense, useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Constellation from '@/components/ui/Constellation';
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";

// Service cards component with detailed information about each service
const ServiceCards = () => (
  <div className="grid md:grid-cols-2 gap-8 my-12">
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 h-full space-y-4 p-8 border border-gray-800 rounded-xl bg-gray-900/80 backdrop-blur-sm">
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25" />
          </svg>
        </div>
        <h3 className="font-semibold text-2xl text-blue-400">Web Applications</h3>
        <p className="text-gray-300">Custom-built, high-performance web applications that are lean, profitable, and designed to grow with your business.</p>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Full-stack development with React, Node.js, and modern frameworks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>User-centered design with intuitive interfaces</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Scalable architecture that grows with your business</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>One-week MVP development to test ideas quickly</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 h-full space-y-4 p-8 border border-gray-800 rounded-xl bg-gray-900/80 backdrop-blur-sm">
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
        </div>
        <h3 className="font-semibold text-2xl text-blue-400">E-commerce Solutions</h3>
        <p className="text-gray-300">Seamless and effective e-commerce flows that take users from discovery to checkout in a fully integrated funnel.</p>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Optimized checkout processes with A/B tested CTAs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Strategic upsell and cross-sell opportunities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Mobile-first shopping experiences</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Integration with payment gateways and shipping solutions</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 h-full space-y-4 p-8 border border-gray-800 rounded-xl bg-gray-900/80 backdrop-blur-sm">
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
        </div>
        <h3 className="font-semibold text-2xl text-blue-400">Marketing Sites</h3>
        <p className="text-gray-300">Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management.</p>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>SEO-optimized site architecture</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Conversion-focused design and copywriting</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Performance-optimized for speed and engagement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Analytics integration for data-driven improvements</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 h-full space-y-4 p-8 border border-gray-800 rounded-xl bg-gray-900/80 backdrop-blur-sm">
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        </div>
        <h3 className="font-semibold text-2xl text-blue-400">Growth Engineering</h3>
        <p className="text-gray-300">Build systems that drive user acquisition, engagement, and retention through gamified experiences and data-driven optimization.</p>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Gamified onboarding experiences</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Optimized media streaming for better engagement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Social sharing and viral growth mechanisms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Retention-focused feature development</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// Process section showing how we work
const ProcessSection = () => (
  <div className="my-16">
    <h2 className="text-3xl font-semibold mb-8 text-center">Our Process</h2>
    <div className="relative">
      {/* Connection line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
      
      {/* Process steps */}
      <div className="space-y-16 relative z-10">
        {/* Step 1 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="md:text-right mb-8 md:mb-0 md:pr-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4 md:ml-auto">1</div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Listen</h3>
            <p className="text-gray-300">We take the time to fully understand your needs, business goals, and how our tech solutions will help you achieve those goals most effectively.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>In-depth discovery sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Stakeholder interviews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Competitive analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Business goal alignment</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 order-2 md:order-1">
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>One-week MVP development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Agile development sprints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Regular progress updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Transparent communication</span>
              </li>
            </ul>
          </div>
          <div className="md:text-left mb-8 md:mb-0 md:pl-12 order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4">2</div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Build</h3>
            <p className="text-gray-300">We build quickly so we can get the technology in the hands of end users as soon as possible, focusing on core functionality first.</p>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="md:text-right mb-8 md:mb-0 md:pr-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4 md:ml-auto">3</div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Test</h3>
            <p className="text-gray-300">We put your solution in front of real users to gather feedback and identify opportunities for improvement.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>User testing sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>A/B testing key features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Performance monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Feedback collection systems</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 order-2 md:order-1">
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Rapid implementation of improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Data-driven decision making</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Continuous optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Scaling successful features</span>
              </li>
            </ul>
          </div>
          <div className="md:text-left mb-8 md:mb-0 md:pl-12 order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4">4</div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Iterate</h3>
            <p className="text-gray-300">Based on testing and feedback, we refine and improve your solution until it perfectly meets your needs and business goals.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Services() {
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
            <span className="bg-clip-text text-transparent bg-[length:100%_100%] bg-gradient-to-tr from-[#0066CC] to-[#FFCC00] animate-hue">OUR SERVICES</span>
          </h1>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Transforming your business with fast, simple, and effective tech solutions.
          </p>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-8 text-center">What We Offer</h2>
          <p className="mb-12 text-gray-400 text-center max-w-3xl mx-auto">
            We specialize in building digital products that drive real business results. Our services are designed to help you grow your business, improve user experience, and increase your bottom line.
          </p>
          <ServiceCards />
        </section>

        <section className="mb-32">
          <ProcessSection />
        </section>

        <section className="text-center py-16 mb-32 border border-gray-800 rounded-2xl bg-gray-900">
          <h3 className="text-2xl font-semibold mb-6">Ready to transform your business with technology?</h3>
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