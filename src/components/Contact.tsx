import email from "../assets/images/email-logo.svg";
import instagram from "../assets/images/instagram-logo.svg";
import cruzados from "../assets/images/cruzados.webp";
import instagramm from "../assets/images/Instagram.mp4";
import instagram2 from "../assets/images/Instagram2.mp4";
import mail from "../assets/images/Mail.mp4";

const Contact = () => {
  const contactTab = [
    {
      icon: mail,
      desription: `equiethos@gmail.com`,
      url: "mailto:equiethos@gmail.com",
    },
    {
      icon: instagram2,
      desription: `@equiethos`,
      url: "https://www.instagram.com/equiethos/",
    },
  ];

  return (
    <>
      <section id="contact" className="">
        <div>
          <div className="md:w-100 mx-auto text-center">
            <div className="font-bold text-8xl text-center w-full pt-16">
              Contacta con nosotros
            </div>
            <div className="my-10 text-xl">
              <p>¿Te gustaría que participasemos o colaborasemos contigo?</p>
              <p>¡Contacta con nosotras aquí abajo!</p>
            </div>{" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={cruzados}
                alt="Rocío Gentil y Sergio Carrascal"
                style={{
                  width: "20%",
                  height: "20%",
                  borderRadius: "50%",
                  border: "5px solid grey",
                  objectFit: "contain",
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
          {/* Cards */}
          <div className="container mx-auto h-auto">
            <div className="flex justify-center gap-10 py-8 flex-wrap">
              {contactTab.map((x, index) => {
                return (
                  <div
                    key={index}
                    className="card group shadow-xl w-full sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto dark:bg-white dark:text-black hover:scale-110"
                  >
                    <div className="card-body group items-center flex-grow-0 text-center ">
                      <video
                        autoPlay
                        loop
                        className="card-title w-24 h-24"
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
