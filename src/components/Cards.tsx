import musicImage from "../images/music.png";
import emotionsImage from "../images/emotions.png";
import philosophyImage from "../images/philosophy.png";

const ourFundamentals = [
  {
    title: "Música",
    description: "Teoría: fundamentos musicales y propiedades del sonido.Música en directo, improvisaciones musicales con diferentes instrumentos, percusión corporal, audición musical y cinco ritmos.",
    image: musicImage,
  },
  {
    title: "Emociones",
    description: "Teoría de la emoción. Autoconocimiento, música como herramienta para gestionar las emociones, propuestas de ejercicios prácticos en directo y para casa.",
    image: emotionsImage,
  },
  {
    title: "Filosofía",
    description: "Teoría: cosmovisión de autores y autoras. Diálogo con los pensadores y pensadoras",
    image: philosophyImage,
  },
];

export const Cards = () => {
  return (
    <div id="whatwedo" className="flex flex-wrap justify-center items-center mt-10 mb-10">
      <div className="font-bold text-4xl text-center w-full ">¿Qué hacemos?</div>
      {ourFundamentals.map((fundamental) => (
        <div
          key={fundamental.title}
          className="card w-96 bg-base-100 shadow-xl m-4 mt-15 mb-15"
        >
          <figure className="px-10 pt-10">
            <img
              src={fundamental.image}
              alt={fundamental.title}
              className="rounded w-24 h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{fundamental.title}</h2>
            <p>{fundamental.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
