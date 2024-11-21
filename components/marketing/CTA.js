import ButtonGradient from "../ui/ButtonGradient";
import Snake from "../ui/Snake";

const CTA = ({ openModal }) => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <div className="relative hero-content text-center text-white p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Yay, you made it to the bottom of the page!
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            And now for something completely different...
          </p>
          <ButtonGradient 
            className="btn btn-primary btn-wide btn-lg" 
            onClick={() => openModal(<Snake />, "Snake Game")} 
            title="Play Snake!" 
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
