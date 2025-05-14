import config from "@/config";
import ButtonGradient from "../ui/ButtonGradient";
import ButtonLead from "../ui/ButtonLead";
import ButtonCheckout from "../ui/ButtonCheckout";


// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = ({ openModal }) => {
  return (
    <section className="bg-base-200 overflow-hidden" id="prices">
      <div className="py-24 md:py-32 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-8 mx-auto">
            <p className="font-medium text-primary text-sm">📊 Our Latest Offers</p>
          </div>
          <h2 className="font-bold text-3xl uppercase lg:text-5xl tracking-tight">
            Simple Pricing to Get Started
          </h2>
          <p className="text-base-content/80 mt-8 mx-w-xl">We're transparent about our pricing and we're not interested in overhead. Grab one of our services from the pricing table or reach out for a no strings attached chat, we love to talk shop. </p>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-primary-content font-semibold border-0 bg-[#0066CC]`}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-[#0066CC] z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 my-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
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
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2 flex flex-col items-center">
                  <ButtonCheckout priceId={plan.priceId} ctaButtonText={plan.ctaButtonText} openModal={openModal} />
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    {plan.footerText}
                    { }                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <h3 className="font-bold text-2xl mb-4">Help Your Website Work Smarter, Not Harder</h3>
          <p className="text-base-content/80 mx-w-xl">We don't do full overhauls—we build on what you've already created. With our any of our services, we fine-tune your digital presence so it naturally drives more sales.</p>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
        <h3 className="font-bold text-2xl mb-4">Not the right fit?</h3>
          <p className="text-base-content/80 mx-w-xl">Need something more custom, or just want to talk strategy? <span className="bg-warning/25 px-1.5 leading-10">
          <a 
          className="link link-hover group"
          onClick={() => openModal(
            <div className="w-full max-w-md mx-auto">
              <ButtonLead />
            </div>
          )}
          >Send me a note<span className="group-hover:translate-x-1 transition-transform duration-200"> →</span></a></span> No commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
