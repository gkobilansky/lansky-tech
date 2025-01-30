import config from "@/config";
import ButtonGradient from "../ui/ButtonGradient";
import ButtonLead from "../ui/ButtonLead";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = ({ openModal }) => {
  return (
    <section className="bg-base-200 overflow-hidden" id="intro">
      <div className="py-24 md:py-32 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-8 mx-auto">
            <p className="font-medium text-primary text-sm">📊 Our Latest Offer</p>
          </div>
          <h2 className="font-bold text-3xl uppercase lg:text-5xl tracking-tight">
          Get your MVP in just 3 weeks!
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-primary-content font-semibold border-0 bg-[#0066CC]`}
                  >
                    Free & Clear
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-[#0066CC] z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
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
                  <ButtonGradient 
                    className="mx-auto" 
                    title="👩🏻‍💻 Send me a note" 
                    onClick={() => openModal(
                      <div className="w-full max-w-md mx-auto">
                        <ButtonLead />
                      </div>, 
                      "Get in Touch"
                    )}
                  />
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    No commitment.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center my-12">
        <h3 className="font-bold text-2xl mb-4">Why the Three-Week MVP?</h3>
        <p className="text-base-content/80 mx-w-xl">The faster we ship, the quicker your prototype can be tested by your actual end-users. Those real-time tests allow us to iterate and improve quickly, efficiently, and in the most cost-effective way possible. </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
