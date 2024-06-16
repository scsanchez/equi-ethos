import background from "../images/background.jpg";
import equiethos from "../images/croped.svg";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <a
            href="#"
            className="flex items-center py-5 px-2 text-white hover:text-blue-300"
          >
            <img src={equiethos} alt="Logo de Equi-ethos"></img>
          </a>
          <p className="mb-5">
            Un viaje de autodescubrimiento a través de la música y la filosofía
          </p>
          <a href="#history" className="btn btn-primary">Comienza</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
