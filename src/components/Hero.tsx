import introFull from "../assets/video/intro-full.mp4";
import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <section>
        <div className="hero min-h-screen">
          <video
            autoPlay
            muted
            loop
            className="landing-video"
            src={introFull}
          ></video>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md mx-auto">
              <a
                href="#"
                className="flex items-center justify-center py-5 px-2 text-white hover:text-gray-300"
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
      </section>
    </>
  );
};

export default Hero;
