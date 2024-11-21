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
import UkraineCallOut from "@/components/marketing/UkraineCallOut";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setModalTitle("");
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
        <FeaturesAccordion />
        <Hello />
        <Work />
        <Pricing openModal={openModal} />
        <FAQ />
        <UkraineCallOut />
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