"use client";

import { useState } from 'react';
import Testimonial1Small from './Testimonial1Small';

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

export default function TestimonialSlider({ testimonials }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prevIndex - 3
    );
  };

  return (
    <div className="relative max-w-full mx-auto px-2 sm:px-3 lg:px-4 pt-28 bg-base-200">
      <h2 className="text-4xl uppercase font-bold mb-4 text-center">What people say about working with us</h2>
      {testimonials.length > 4 && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <button
              onClick={previousTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {testimonials
          .slice(currentTestimonialIndex, currentTestimonialIndex + 4)
          .map((testimonial, index) => (
            <Testimonial1Small 
              key={`testimonial-${currentTestimonialIndex + index}`} 
              {...testimonial} 
            />
        ))}
      </div>
    </div>
  );
} 