"use client";

import Testimonial1Small from './Testimonial1Small';

export default function TestimonialGrid({ testimonials }) {
  return (
    <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-base-200">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-300/30 to-base-200 pointer-events-none" />
      
      <div className="relative">
        {/* Heading with gradient text */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What people say about working with us
          </span>
        </h2>
        
        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial1Small 
              key={`testimonial-${index}`} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
      <div className="absolute top-40 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
} 