import lacueva from "../images/logos/lacueva.jpg";
import CRJ from "../images/logos/Logo CRJ.png";
import cruzroja from "../images/logos/logo-cruz-roja.png";
import cathedra from "../images/logos/cathedra.png";

export const Logos = () => {
  return (
    <div className="text-center py-5">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        Hemos trabajado con:{" "}
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 transition ease-in-out delay-150 hover:scale-110 ">
        <img
          src={cruzroja}
          alt="Cruz Roja"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300"
        />

        <img
          src={cathedra}
          alt="Cruz Roja"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={CRJ}
          alt="CRJ"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300"
        />

        <img
          src={lacueva}
          alt="La Cueva"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Logos;
