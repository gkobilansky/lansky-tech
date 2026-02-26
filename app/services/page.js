"use client";

import { Suspense, useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Constellation from '@/components/ui/Constellation';
import Modal from "@/components/marketing/Modal";
import ButtonLead from "@/components/ui/ButtonLead";

// Service cards component with detailed information about each service
const ServiceCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25",
      title: "Web Applications",
      description: "Custom-built, high-performance web applications that are lean, profitable, and designed to grow with your business.",
      features: [
        "Full-stack development with React, Node.js, and modern frameworks",
        "User-centered design with intuitive interfaces",
        "Scalable architecture that grows with your business",
        "One-week MVP development to test ideas quickly"
      ],
      delay: 0.1
    },
    {
      icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
      title: "E-commerce Solutions",
      description: "Seamless and effective e-commerce flows that take users from discovery to checkout in a fully integrated funnel.",
      features: [
        "Optimized checkout processes with A/B tested CTAs",
        "Strategic upsell and cross-sell opportunities",
        "Mobile-first shopping experiences",
        "Integration with payment gateways and shipping solutions"
      ],
      delay: 0.2
    },
    {
      icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
      title: "Marketing Sites",
      description: "Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management.",
      features: [
        "SEO-optimized site architecture",
        "Conversion-focused design and copywriting",
        "Performance-optimized for speed and engagement",
        "Analytics integration for data-driven improvements"
      ],
      delay: 0.3
    },
    {
      icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
      title: "Growth Engineering",
      description: "Build systems that drive user acquisition, engagement, and retention through gamified experiences and data-driven optimization.",
      features: [
        "Gamified onboarding experiences",
        "Optimized media streaming for better engagement",
        "Social sharing and viral growth mechanisms",
        "Retention-focused feature development"
      ],
      delay: 0.4
    }
  ];

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8 my-12">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300"></div>
          <div className="relative z-10 h-full space-y-4 p-8 border border-primary/20 rounded-xl bg-base-200 backdrop-blur-sm group-hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-2xl text-primary">{service.title}</h3>
            <p className="text-base-content/90 leading-relaxed">{service.description}</p>
            <ul className="space-y-2 text-base-content/80">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Process section showing how we work
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: 1,
      title: "Listen",
      description: "We take the time to fully understand your needs, business goals, and how our tech solutions will help you achieve those goals most effectively.",
      items: ["In-depth discovery sessions", "Stakeholder interviews", "Competitive analysis", "Business goal alignment"],
      align: "right",
      delay: 0.1
    },
    {
      number: 2,
      title: "Build",
      description: "We build quickly so we can get the technology in the hands of end users as soon as possible, focusing on core functionality first.",
      items: ["One-week MVP development", "Agile development sprints", "Regular progress updates", "Transparent communication"],
      align: "left",
      delay: 0.2
    },
    {
      number: 3,
      title: "Test",
      description: "We put your solution in front of real users to gather feedback and identify opportunities for improvement.",
      items: ["User testing sessions", "A/B testing key features", "Performance monitoring", "Feedback collection systems"],
      align: "right",
      delay: 0.3
    },
    {
      number: 4,
      title: "Iterate",
      description: "Based on testing and feedback, we refine and improve your solution until it perfectly meets your needs and business goals.",
      items: ["Rapid implementation of improvements", "Data-driven decision making", "Continuous optimization", "Scaling successful features"],
      align: "left",
      delay: 0.4
    }
  ];

  return (
    <div ref={ref} className="my-16">
      <motion.h2
        className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        Our Process
      </motion.h2>
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 hidden md:block"></div>

        {/* Process steps */}
        <div className="space-y-16 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="md:grid md:grid-cols-2 md:gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: step.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              {step.align === "right" ? (
                <>
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-content font-bold text-xl mb-4 md:ml-auto shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-base-content/90 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="bg-base-200 p-6 rounded-xl border border-primary/20">
                    <ul className="space-y-2 text-base-content/80">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-base-200 p-6 rounded-xl border border-primary/20 order-2 md:order-1">
                    <ul className="space-y-2 text-base-content/80">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:text-left mb-8 md:mb-0 md:pl-12 order-1 md:order-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-content font-bold text-xl mb-4 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-base-content/90 leading-relaxed">{step.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Services() {
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

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

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
            <span className="gradient-text bg-gradient-to-br from-[#0066CC] via-[#0088FF] to-[#FFCC00]">Our Services</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Transforming your business with fast, simple, and effective tech solutions.
          </motion.p>
        </section>

        <section ref={servicesRef} className="mb-32">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="mb-12 text-base-content/80 text-center max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We specialize in building digital products that drive real business results. Our services are designed to help you grow your business, improve user experience, and increase your bottom line.
          </motion.p>
          <ServiceCards />
        </section>

        <section className="mb-32">
          <ProcessSection />
        </section>

        <motion.section
          ref={ctaRef}
          className="text-center py-16 mb-32 border border-primary/20 rounded-2xl bg-base-200"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif text-3xl font-semibold mb-6">Ready to transform your business with technology?</h3>
          <ButtonLead extraStyle="mx-auto" />
        </motion.section>
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