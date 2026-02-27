"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import config from "@/config";
import ButtonLead from "../ui/ButtonLead";
import ButtonCheckout from "../ui/ButtonCheckout";


// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = ({ openModal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-base-200 overflow-hidden" id="prices">
      <div className="py-24 md:py-32 px-8 max-w-6xl mx-auto">
        <div ref={ref} className="flex flex-col text-center w-full mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-8 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-medium text-primary text-sm">📊 Our Latest Offers</p>
          </motion.div>
          <motion.h2
            className="font-serif font-bold text-3xl lg:text-5xl tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Simple Pricing to Get Started
          </motion.h2>
          <motion.p
            className="text-base-content/80 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We're transparent about our pricing and we're not interested in overhead. Grab one of our services from the pricing table or reach out for a no strings attached chat, we love to talk shop.
          </motion.p>
        </div>

        <div ref={cardsRef} className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan, index) => (
            <motion.div
              key={plan.priceId}
              className="relative w-full max-w-lg group"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div className="absolute -inset-[1px] rounded-[9px] bg-primary z-10"></div>
              )}

              <div className="relative flex flex-col h-full gap-5 z-10 bg-base-100 p-8 rounded-lg shadow-xl border border-base-300/50 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="font-serif text-xl lg:text-2xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 my-2 leading-relaxed">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] text-primary shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="text-base-content/90">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2 flex flex-col items-center">
                  <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    {plan.footerText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          ref={bottomRef}
          className="flex flex-col justify-center items-center my-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">Use AI to Work Smarter, Not Harder</h3>
          <p className="text-base-content/80 text-lg leading-relaxed">It's rare we suggest full overhauls, but if you're starting from scratch, we love AI assisted building for greenfield projects.</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center my-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">Not the right fit?</h3>
          <p className="text-base-content/80 text-lg leading-relaxed">Need something more custom, or just want to talk strategy? <span className="bg-warning/25 px-1.5 leading-10">
          <a
          className="link link-hover group"
          onClick={() => openModal(
            <div className="w-full max-w-md mx-auto">
              <ButtonLead />
            </div>
          )}
          >Send me a note<span className="inline-block group-hover:translate-x-1 transition-transform duration-200"> →</span></a></span> No commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
