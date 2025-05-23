"use client";

import { Suspense, useState } from 'react'
import Constellation from '@/components/ui/Constellation';
import Header from "@/components/layout/Header";
import Hero from "@/components/marketing/Hero";
import Hello from "@/components/marketing/Hello";
import Problem from "@/components/marketing/Problem";
import FeaturesAccordion from "@/components/features/FeaturesAccordion";
import Pricing from "@/components/marketing/Pricing";
import Work from "@/components/marketing/Work";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";
import Modal from "@/components/marketing/Modal";
import Footer from "@/components/layout/Footer";
import TestimonialGrid from "@/components/marketing/testimonials/TestimonialGrid";

const testimonials = [
  {
    rating: 5,
    text: "Gene isn't just a coder - he understands that code has to ship and ultimately drive business results. He's creative, human, and has accommodated a lot of weird ideas for us over the years, usually making them better in the execution.",
    author: "Andy F",
    authorTitle: "GMB Fitness Founder",
    authorImage: "/testimonials/andy.jpeg"
  },
  {
    rating: 5,
    text: "Your UX is great! Best onboarding I've seen in any course period.",
    author: "Omar Z",
    authorTitle: "Praxis User, Founder of $100 MBA podcast",
    authorImage: "/testimonials/omar-zenhom.jpeg"  
  },
  {
    rating: 5,
    text: "Since the new site went live, we've received nothing but positive feedback from the teachers and coaches who use it",
    author: "Katy W",
    authorTitle: "Program Director, The Art of Learning Foundation",
    authorImage: "/testimonials/katy-wells.jpeg"
  },
  {
    rating: 5,
    text: "I also have to mention the Praxis platform (build by Lansky) - it's the best in the business!.",
    author: "Mark",
    authorTitle: "Praxis User",
    authorImage: "/testimonials/lion.jpeg"
  },
  {
    rating: 5,
    text: "A consummate professional with exceptional patience Gene worked tirelessly to deliver the work I wanted.",
    author: "Shawn S",
    authorTitle: "iLiveFit Founder, USAF Captain",
    authorImage: "/testimonials/shawn-swift.jpeg"
  },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <>
      <Suspense>
        <Header openModal={openModal} />
      </Suspense>
      <Constellation />
      <main>
        <Hero />
        <Problem />
        <Hello />
        <TestimonialGrid testimonials={testimonials} />
        <FeaturesAccordion />
        <Work />
        <Pricing openModal={openModal} />
        <FAQ />
        <CTA openModal={openModal} />
        <Modal 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen}
          title={modalTitle}
        >
          {modalContent}
        </Modal>
      </main>
      <Footer />
    </>
  );
}