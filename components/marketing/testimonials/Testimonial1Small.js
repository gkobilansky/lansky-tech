import Image from "next/image";
import { useState } from "react";

// A one or two sentences testimonial from a customer.
// Highlight the outcome for your customer (how did your product changed her/his life?) or the pain it's removing — Use <span className="bg-warning/25 px-1.5"> to highlight a part of the sentence
const Testimonial1Small = ({ rating, text, author, authorImage, authorTitle }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Determine if text needs to be truncated (more than 120 characters)
  const needsTruncation = text.length > 120;
  const truncatedText = needsTruncation && !expanded ? `${text.substring(0, 120)}...` : text;

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg h-full"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      {/* Gradient overlay for modern feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
      
      <div className="relative p-6 flex flex-col h-full">
        {/* Rating stars */}
        <div className="flex mb-3">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-warning"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        
        {/* Testimonial text */}
        <div className="text-sm leading-relaxed mb-4 flex-grow">
          <p className="relative">
            <span className="text-xl font-serif absolute -top-2 -left-1 text-primary/40">"</span>
            <span className="pl-3">{truncatedText}</span>
            <span className="text-xl font-serif absolute bottom-0 text-primary/40">"</span>
          </p>
          
          {/* Expand/collapse button for long testimonials */}
          {needsTruncation && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-primary-focus mt-2 hover:underline focus:outline-none"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
        
        {/* Author info */}
        <div className="flex items-center mt-auto pt-3 border-t border-base-300/30">
          <Image
            className="w-8 h-8 rounded-full object-cover ring-1 ring-base-300/30"
            src={authorImage}
            alt={`${author}'s testimonial`}
            width={32}
            height={32}
          />
          <div className="ml-3">
            <p className="font-medium text-sm">{author}</p>
            <p className="text-xs text-base-content/70">{authorTitle}</p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-base-200/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Testimonial1Small;

