"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import MuxVideoPlayer from "@/app/work/_assets/components/MuxVideoPlayer";
import { motion } from "framer-motion";
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
      "High-performance, real-time web applications. Streaming video, auth, payments, and seamless UX across all devices",
    type: "video",
    path: "/gmb-praxis.mp4",
    playbackId: "t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g",
    format: "video/mp4",
    size: {
      width: 800,
      height: 600,
    },
    buttonSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 relative top-[0.5px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25"
        />
      </svg>
    ),
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
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12H3V5.25"
        />
      </svg>
    ),
  },
  {
    title: "Ecommerce",
    description:
      "Customize and optimize your checkout experience. Handle subscriptions, partial payments, trial periods, upsells, downsells and more.",
    type: "video",
    path: "/praxis-checkout.mp4",
    playbackId: "II9mWO3uKi49PP00q700lNSaN8gjIAy81lIGohwUymDj00",
    format: "video/mp4",
    size: {
      width: 800,
      height: 600,
    },
    buttonSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 relative top-[0.5px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
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
      "Convert visitors into customers with fast-loading landing pages, immersive product showcases, and easy content management.",
    type: "video",
    path: "/galaxy-wide.mp4",
    playbackId: "1aP4rWU7i5i5iSiMNl02BBOF4NtXHoygFnK00h3Fn19ec",
    format: "video/mp4",
    size: {
      height: 800,
      width: 600,
    },
    buttonSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 relative top-[0.5px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
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
  const { title, type, path, playbackId, description, alt, size = { width: 500, height: 500 } } = feature;
  const style = "rounded-2xl max-h-[400px]";


  if (type === "video") {
    return (
      <MuxVideoPlayer
        playbackId={playbackId}
        controls={true}
        metadata={{
          video_id: playbackId,
          video_title: title,
          video_description: description,
        }}
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

  const handleFeatureClick = (index) => {
    setFeatureSelected(index);
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

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
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-4 md:mb-8" id="features">
          We like to start small & iteratively<br/>
          <motion.span 
            initial={{ 
              backgroundSize: "0% 100%",
              backgroundImage: "linear-gradient(to left, hsl(var(--neutral)), hsl(var(--neutral)))",
              backgroundRepeat: "no-repeat"
            }}
            whileInView={{ 
              backgroundSize: "100% 100%" 
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed"
          >
            build a lean, profitable product
          </motion.span>
        </h2>
        <p className="text-base-content/80 text-lg mb-12 md:mb-24">
          We specialize in three core areas: {" "}
          <button 
            onClick={() => handleFeatureClick(0)} 
            className="inline-flex items-center gap-1.5 font-medium hover:text-primary transition-colors border border-base-content/20 rounded-lg px-0.5 py-0.1 hover:border-primary"
          >
            {features[0].buttonSvg}
            powerful web applications
          </button>, {" "}
          <button 
            onClick={() => handleFeatureClick(1)} 
            className="inline-flex items-center gap-1.5 font-medium hover:text-primary transition-colors border border-base-content/20 rounded-lg px-0.5 py-0.1 hover:border-primary"
          >
            {features[1].buttonSvg}
            secure e-commerce solutions
          </button>, and {" "}
          <button 
            onClick={() => handleFeatureClick(2)} 
            className="inline-flex items-center gap-1.5 font-medium hover:text-primary transition-colors border border-base-content/20 rounded-lg px-0.5 py-0.1 hover:border-primary"
          >
            {features[2].buttonSvg}
            conversion-focused marketing sites
          </button>
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
