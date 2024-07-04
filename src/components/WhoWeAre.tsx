import rocio from "../assets/images/rocio.webp";
import sergio from "../assets/images/sergio.webp";
import "./WhoWeAre.css";

export const WhoWeAre = () => {
  return (
    <>
      <section id="whoweare" className="">
        <div className="font-bold text-8xl text-center w-full py-16">
          ¿Quiénes somos?
        </div>
        <div className="flex flex-col w-full lg:flex-row leading-10">
          <div className="flex-1 h-auto card  rounded-box place-items-center p-3 text-justify ml-3 mr-3">
            <img
              src={rocio}
              alt="Mª del Rocío Gentil"
              title="Mª del Rocío Gentil"
              className="profile-image image-hover"
            />
            <p className="ml-1 mt-4">
              <span className="font-bold text-xl">Mª del Rocío Gentil. </span>
              Psicóloga especializada en intervención criminológica y
              victimológica. Psico/sociodramatista. Colegiada en el Colegio
              Oficial de Psicólogos de Castilla y León (COPCYL). Miembro de la
              Sociedad Española de Psicoterapia y técnicas de grupo (SEPTG) y
              vocal de la zona centro en funciones desde principios de 2024.
              Actriz de la compañía de Teatro Playback “Entrespejos” desde 2019.
            </p>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="flex-1 h-auto card  rounded-box place-items-center p-3 ml-3 mr-3">
            <img
              src={sergio}
              alt="Sergio Carrascal"
              className="profile-image image-hover"
              title="Sergio Carrascal"
            />
            <p className="ml-1 mt-4">
              <span className="font-bold text-xl">Sergio Carrascal. </span>
              Músico graduado en el Conservatorio Profesional de Música de
              Salamanca. Biólogo (USAL). Organizador y colaborador en varios
              ensembles y grupos de música de cámara. Clarinetista en la banda
              de música Tomás Bretón. Músico de la compañía de Teatro Playback
              “Entrespejos” desde 2017.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
