"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react/lazy";
import "@mux/mux-player/themes/minimal";
// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Web Apps",
    description:
      "State of the art performance, streaming video, transactional emails, integrated checkout and more on desktop and mobile",
    type: "video",
    path: "/gmb-praxis.mp4",
    playbackId: "t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g",
    format: "video/mp4",
    size: {
      width: 800,
      height: 600,
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Ecommerce & Payments",
    description:
      "Create checkout sessions, handle users accounts (subscriptions, one-time payments...) and optimize conversions.",
    type: "video",
    path: "/praxis-checkout.mp4",
    playbackId: "7R4yBGRAWOp1f5WFTGT01kTMmkmawmz8PkyNGgtGauFw",
    format: "video/mp4",
    size: {
      width: 800,
      height: 600,
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Marketing Sites",
    description:
      "Stunning landing pages, product showcases, and company websites. Our marketing sites convert visitors into customers.",
    type: "video",
    path: "/galaxy-wide.mp4",
    playbackId: "1aP4rWU7i5i5iSiMNl02BBOF4NtXHoygFnK00h3Fn19ec",
    format: "video/mp4",
    size: {
      height: 800,
      width: 600,
    },
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, playbackId, alt, size = { width: 500, height: 500 } } = feature;
  const style = "rounded-2xl max-h-[400px]";


  if (type === "video") {
    return (
      <MuxPlayer
        playbackId={playbackId}
        lazyLoad="viewport"
        theme="minimal"
        style={{ aspectRatio: 4/3, '--controls': 'none', display: 'block', borderRadius: '1rem', overflow: 'hidden' }}
        thumbnailTime={0}
        autoPlay
        muted
        loop
        playsInline
        controls="none"
      />
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 bg-opacity-80"
      id="solutions"
    >
      <div className="px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-4 h-4 text-primary"
          >
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
          </svg>
          <p className="font-medium text-primary text-sm">Solutions</p>
        </div>    
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-4 md:mb-8">
          We like to start small & iteratively<br/>
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed">
          build a lean, profitable product
          </span>
        </h2>
        <p className="text-base-content/80 text-lg mb-12 md:mb-24">
          We specialize in three core areas: building powerful web applications, implementing secure e-commerce solutions, and creating conversion-focused marketing sites.
        </p>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex items-center justify-center">
              <Media feature={features[featureSelected]} key={featureSelected} />
            </div>
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
