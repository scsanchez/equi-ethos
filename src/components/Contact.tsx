import email from "../images/email.svg";
import instagram from "../images/instagram.svg";

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
      title: "Instagram",
      desription: `Nuestro perfil de Instagram`,
      url: "https://www.instagram.com/equiethos/",
    },
  ];
  return (
    <>
      <div>
        {" "}
        <div className="md:w-100 mx-auto text-center my-24">
          <div
            id="contact"
            className="font-bold text-4xl text-center w-full mt-10 mb-10"
          >
            Contacta con nosotros
          </div>
          <div className="text-xl">
            <p>¿Te gustaría que participasemos o colaborasemos contigo?</p>
            <p>¡Contacta con nosotras aquí abajo!</p>
          </div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
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
                    <div className="">
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
