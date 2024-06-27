import lacueva from "../assets/images/logos/logo-la-cueva.webp";
import CRJ from "../assets/images/logos/logo-cruz-roja-juventud.webp";
import cruzroja from "../assets/images/logos/logo-cruz-roja.webp";
import cathedra from "../assets/images/logos/logo-cathedra.webp";

export const Logos = () => {
  return (
    <div className="text-center py-5">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        Hemos trabajado con:{" "}
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8  ">
        <img
          src={cruzroja}
          alt="Cruz Roja"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300 transition ease-in-out delay-150 hover:scale-110"
        />

        <img
          src={cathedra}
          alt="Cruz Roja"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300 transition ease-in-out delay-50 hover:scale-110"
        />
        <img
          src={CRJ}
          alt="CRJ"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300 transition ease-in-out delay-50 hover:scale-110"
        />

        <img
          src={lacueva}
          alt="La Cueva"
          className="w-24 md:w-44 h-auto filter grayscale hover:grayscale-0 transition duration-300 transition ease-in-out delay-50 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Logos;
