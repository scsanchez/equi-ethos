import presentation from "../assets/wey.mp4";

export const Hero = () => {
  return (
    <>
      <section>
        <div className="hero min-h-screen">
          <video
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              // Establece el ancho y la altura al 100% por defecto
              width: "100%",
              height: "100%",
              left: "50%",
              top: "50%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
            src={presentation}
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
