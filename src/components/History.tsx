export const History = () => {
  return (
    <>
      <section id="history" className="bg-gray-200">
        <div className="">
          <div className="font-bold text-8xl text-center dark:text-black py-16">
            Nuestra historia
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start md:w-1/3 p-3 font-lato dark:text-black leading-10">
              <p className="mb-8">
                En 2021, el proyecto comienza bajo el nombre{" "}
                <span className="font-bold hover:text-blue-400 dark:hover:text-blue">
                  Música y Emociones
                </span>
                .{" "}
              </p>
              <p className="mb-10">
                Por aquel entonces, el objetivo era explorar el mundo emocional
                a través de la música y utilizarla como una herramienta para
                gestionar las emociones. La idea se origina por las experiencias
                compartidas en la compañía de{" "}
                <span className="font-bold hover:text-blue-400 dark:hover:text-blue-400">
                  Teatro Playback “Entrespejos” (Salamanca){" "}
                </span>
                y por las ganas de aportar más con nuestros conocimientos. Desde
                entonces, hemos preparado y presentado numerosos talleres,
                realizándolos con éxito durante los siguientes años.
              </p>
              <p className="mb-8">
                A principios de 2024, el proyecto evoluciona y adopta un nuevo
                nombre
                <span className="font-vibes font-bold text-2xl hover:text-blue-400 dark:hover:text-blue-400">
                  {" "}
                  Equi-ethos.
                </span>
              </p>

              <p className="mb-8">
                Con esta transformación buscamos ir más allá de nuestras
                actividades iniciales, incorporando la reflexión y la filosofía
                en nuestras propuestas. La idea se inspira en nuestro tiempo
                compartido como estudiantes del{" "}
                <span className="font-bold hover:text-blue-400 dark:hover:text-blue-400">
                  grado de filosofía por la UNED
                </span>
                .
              </p>
              <p className="mb-8">
                Durante este período, hemos presentado talleres con éxito,
                integrando estos nuevos elementos y enriqueciendo nuestras
                ofertas. Así, el proyecto que comenzó como una exploración
                grupal de las emociones a través de la música y el movimiento
                corporal, se convierte en
                <span className="font-bold hover:text-blue-400 dark:hover:hover:text-blue-400">
                  {" "}
                  la búsqueda de traer de nuevo la atención del cuerpo al
                  pensamiento.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
