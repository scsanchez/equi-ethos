import musicImage from "../assets/images/music.webp";
import emotions from "../assets/images/emotions.webp";
import philosophyImage from "../assets/images/philosophy.webp";

const ourFundamentals = [
  {
    title: "Música",
    description:
      "Teoría: fundamentos musicales y propiedades del sonido.Música en directo, improvisaciones musicales con diferentes instrumentos, percusión corporal, audición musical y cinco ritmos.",
    image: musicImage,
  },
  {
    title: "Emociones",
    description:
      "Teoría de la emoción. Autoconocimiento, música como herramienta para gestionar las emociones, propuestas de ejercicios prácticos en directo y para casa.",
    image: emotions,
  },
  {
    title: "Filosofía",
    description:
      "Teoría: cosmovisión de autores y autoras. Diálogo con los pensadores y pensadoras",
    image: philosophyImage,
  },
];

export const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center my-10">
      <div
        id="whatwedo"
        className="font-bold text-8xl text-center w-full pt-16 my-20"
      >
        ¿Qué hacemos?
      </div>
      {ourFundamentals.map((fundamental) => (
        <div
          key={fundamental.title}
          className="card w-96 h-100 bg-base-100 shadow-xl mx-4 my-4"
        >
          <figure className="">
            <img
              src={fundamental.image}
              alt={fundamental.title}
              className="rounded w-24 h-24"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-center">{fundamental.title}</h2>
            <p>{fundamental.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
