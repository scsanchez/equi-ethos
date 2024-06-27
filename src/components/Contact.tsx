import email from "../assets/images/email-logo.svg";
import instagram from "../assets/images/instagram-logo.svg";
import cruzados from "../assets/images/cruzado.svg";

const Contact = () => {
  const contactTab = [
    {
      icon: email,
      title: "¡Envíanos un email!",
      desription: `equiethos@gmail.com`,
      url: "mailto:equiethos@gmail.com",
    },
    {
      icon: instagram,
      title: "Escribenos en Instagram",
      desription: `@equiethos`,
      url: "https://www.instagram.com/equiethos/",
    },
  ];
  return (
    <>
      <div>
      
        <div className="md:w-100 mx-auto text-center my-24">
          <div
            id="contact"
            className="font-bold text-8xl text-center w-full pt-16 my-20"
          >
            Contacta con nosotros
          </div>

          <div className="mt-10 text-xl">
            <p>¿Te gustaría que participasemos o colaborasemos contigo?</p>
            <p>¡Contacta con nosotras aquí abajo!</p>
          </div>
          {" "}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={cruzados}
              alt="Rocío Gentil y Sergio Carrascal"
              style={{ width: "70%", height: "70%" }}
            />
          </div>
   
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex justify-center">
            {contactTab.map((x, index) => {
              return (
                <div
                  key={index}
                  className="card group shadow-xl w-75 h-75"
                >
                  <div className="card-body group items-center flex-grow-0 text-center ">
                    <img
                      className="card-title w-24 h-24"
                      src={x.icon}
                      onClick={() => {
                        if (x.url) {
                          window.location.href = x.url;
                        }
                      }}
                      alt={x.title}
                    ></img>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div>
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
