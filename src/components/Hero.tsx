import background from "../assets/images/background.jpg";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto">
          <a
            href="#"
            className="flex items-center justify-center py-5 px-2 text-white hover:text-blue-300"
          >
            <span className="font-vibes text-8xl">Equi-ethos</span>
          </a>
          <p className="mb-5 text-white">Un viaje de autodescubrimiento </p>
          <p className="mb-5 text-white">
            a través de la música y la filosofía
          </p>

          <a href="#history" className="btn btn-primary">
            Comienza
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
