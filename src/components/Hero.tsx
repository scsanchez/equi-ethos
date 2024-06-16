import background from "../images/background.jpg";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Equi-ethos</h1>
          <p className="mb-5">
          Buscamos explorar como se conectan en nuestra vida la música, las emociones y la filosofía.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
