const UkraineCallOut = () => {
  return (
    <section className="mx-auto bg-neutral text-neutral-content px-8 py-8 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-2xl">🇺🇦</span>
          Supporting Ukraine
        </h2>

        <p className="text-lg leading-relaxed mb-8">
          As someone born in Ukraine, the ongoing war has deeply affected me personally. Each morning begins with checking news updates, hoping to see more Ukrainian territories liberated and our people freed. In response, I've made it my mission to actively support the Ukrainian cause by collaborating with Ukrainian developers and companies whenever possible. Our company has consistently supported various humanitarian and defense initiatives.
        </p>

        <p className="text-lg mb-6">
          If you'd like to join in supporting Ukraine, here are some impactful ways to help:
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-lg mb-2">Direct Support Organizations</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://ukrainedefensefund.org/" className="underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Ukraine Defense Fund</a>
                <p className="text-sm mt-1">One of the most effective USA-based charities providing high-impact front line support.</p>
              </li>
              <li>
                <a href="https://gators4ukraine.org/" className="underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Gators4Ukraine</a>
                <p className="text-sm mt-1">A Florida-based charity working directly with front line troops.</p>
              </li>
              <li>
                <a href="https://ua24.gov.ua/" className="underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">United24</a>
                <p className="text-sm mt-1">The official Ukrainian Government fundraising initiative.</p>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-lg mb-2">Stay Informed</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.youtube.com/@timothysnyder5948" className="underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Timothy Snyder</a>
                <p className="text-sm mt-1">Yale University Professor of History and author of "On Tyranny" - offering essential context for understanding the situation in Ukraine.</p>
              </li>
              <li>
                <a href="https://www.youtube.com/@DenysDavydov" className="underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Denys Davydov</a>
                <p className="text-sm mt-1">A Ukrainian pilot providing daily situation updates from the ground.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UkraineCallOut; 