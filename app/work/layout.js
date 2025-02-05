"use client";

import { Suspense } from "react";
import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/layout/Footer";
import Modal from '@/components/marketing/Modal'
import { useState } from 'react';

export default function LayoutBlog({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Suspense>
        <HeaderBlog openModal={openModal} />
      </Suspense>

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

      <Footer />

      <Modal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
        title={modalTitle}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
