"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What types of web applications do you specialize in building?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We specialize in three main areas:
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>High-performance web applications with real-time features, streaming video, authentication, and payment systems</li>
          <li>Custom e-commerce solutions with optimized checkout flows, subscription management, and payment processing</li>
          <li>Conversion-focused marketing sites with immersive product showcases and content management systems</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can you handle both front-end and back-end development?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, we provide full-stack development services. Our experience spans from creating engaging user interfaces to building robust server architectures. We handle everything from database design and API development to responsive front-end implementations and third-party integrations.
      </div>
    ),
  },
  {
    question: "How do you measure success?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Success is measured through concrete business outcomes:
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>For e-commerce: conversion rates, average order value, and checkout completion rates</li>
          <li>For web applications: user engagement, retention metrics, and system performance</li>
          <li>For marketing sites: lead generation, bounce rates, and conversion goals</li>
        </ul>
        We establish clear KPIs at the start of each project and continuously monitor these metrics to ensure we're delivering real business value.
      </div>
    ),
  },
  {
    question: "Can you build an app that does X?",
    answer: <div className="space-y-2 leading-relaxed">Anything can be built. Our goals is to find the leanest version of your product. That's the hard part.</div>,
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">Cool, contact us by email: 💌 <strong><a href="mailto:hi@lansky.tech" className="link link-accent">hi@lansky.tech</a></strong></div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 md:py-32 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
