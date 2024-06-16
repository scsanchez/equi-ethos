import musicImage from "../images/music.png";
import emotionsImage from "../images/emotions.png";
import philosophyImage from "../images/philosophy.png";

const ourFundamentals = [
  {
    title: "Música",
    description: "La música descripcion como herramienta.",
    image: musicImage,
  },
  {
    title: "Emociones",
    description: "Emociones descripción herramienta",
    image: emotionsImage,
  },
  {
    title: "Filosofía",
    description: "Filosofía, claro, no podría faltar",
    image: philosophyImage,
  },
];

export const Cards = () => {
  return (
    <div id="whatwedo" className="flex flex-wrap justify-center items-center">
      <div className="font-bold text-4xl text-center w-full mt-10 mb-10">¿Qué hacemos?</div>
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
