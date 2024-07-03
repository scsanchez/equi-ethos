import musicImage from "../assets/images/music.webp";
import emotions from "../assets/images/emotions.webp";
import philosophyImage from "../assets/images/philosophy.webp";

const ourFundamentals = [
  {
    title: "Música",
    description:
      "Teoría: fundamentos musicales y propiedades del sonido.Música en directo, improvisaciones musicales con diferentes instrumentos, percusión corporal, audición musical y cinco ritmos.",
    image: musicImage,
    badge: ["Música en directo", "Improvisaciones musicales", "Audición musical"]
  },
  {
    title: "Emociones",
    description:
      "Teoría de la emoción. Autoconocimiento, música como herramienta para gestionar las emociones, propuestas de ejercicios prácticos en directo y para casa.",
    image: emotions,
    badge: ["Autoconocimiento", "Gestión emocional", "Ejercicios prácticos"]
  },
  {
    title: "Filosofía",
    description:
      "Teoría: cosmovisión de autores y autoras. Diálogo con los pensadores y pensadoras",
    image: philosophyImage,
    badge: ["Cosmovisión", "Diálogo con pensadores"]
  },
];

export const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="bg-gray-200">
      <div className="font-bold text-8xl text-center w-full dark:text-black py-16">
        ¿Qué hacemos?
      </div>
      <div className="flex gap-10 justify-center pb-8">
        {ourFundamentals.map((fundamental) => (
          <div className="card bg-base-100 w-96 shadow-xl dark:bg-white dark:text-black hover:scale-110">
            <figure>
              <img
                src={fundamental.image}
                alt={fundamental.title}
                className="rounded w-24 h-24  mt-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {fundamental.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{fundamental.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
              </div>
            </div>
          </div>
          
         
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
