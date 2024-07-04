import { useState, useEffect } from "react";

import introFull from "../assets/video/intro-full.mp4";
import introResize from "../assets/video/intro-resize.mp4";

import "./Hero.css";

export const Hero = () => {
  const [videoSource, setVideoSource] = useState(introResize);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1044) {
        setVideoSource(introResize);
      } else {
        setVideoSource(introFull);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section>
        <div className="hero min-h-screen">
          <video
            autoPlay
            muted
            loop
            className="landing-video"
            src={videoSource}
          ></video>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md mx-auto">
              <a
                href="#"
                className="flex items-center justify-center py-5 px-2 text-white hover:text-blue-400"
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
