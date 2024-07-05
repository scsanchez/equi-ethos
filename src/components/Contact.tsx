import cruzados from "../assets/images/cruzados.webp";
import instagramLogo from "../assets/video/instagram-logo.mp4";
import emailLogo from "../assets/video/email-logo.mp4";
import "./Contact.css";

const Contact = () => {
  const contactTab = [
    {
      icon: emailLogo,
      description: `equiethos@gmail.com`,
      url: "mailto:equiethos@gmail.com",
    },
    {
      icon: instagramLogo,
      description: `@equiethos`,
      url: "https://www.instagram.com/equiethos/",
    },
  ];

  return (
    <>
      <section id="contact" className="">
        <div>
          <div className="md:w-100 mx-auto text-center">
            <div className="font-bold text-8xl text-center w-full py-16">
              Contacta con nosotros
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={cruzados}
                alt="Mª del Rocío Gentil y Sergio Carrascal"
                title="Sergio Carrascal y Mª del Rocío Gentil"
                className="together-profile-image"
              />
            </div>
          </div>
          <div className="my-10 text-xl text-center">
            <p>¿Te gustaría que participasemos o colaborasemos contigo?</p>
            <p>¡Contacta con nosotras aquí abajo!</p>
          </div>
          {/* Cards */}
          <div className="container mx-auto h-auto">
            <div className="flex justify-center gap-10 p-8 flex-wrap">
              {contactTab.map((x, index) => {
                return (
                  <div
                    key={index}
                    className="card group shadow-2xl w-full sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto dark:bg-white dark:text-black hover:scale-110"
                  >
                    <div className="card-body group items-center flex-grow-0 text-center ">
                      <video
                        autoPlay
                        loop
                        className="card-title w-24 h-24 p-2"
                        src={x.icon}
                        onClick={() => {
                          if (x.url) {
                            window.location.href = x.url;
                          }
                        }}
                      ></video>

                      <div>
                        <p className="text-lg font-semibold">{x.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
