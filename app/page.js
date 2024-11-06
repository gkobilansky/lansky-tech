"use client";

import { Suspense, useState } from 'react'
import Constellation from '@/components/Constellation';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hello from "@/components/Hello";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import UkraineCallOut from "@/components/UkraineCallOut";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />
    </>
  );
}