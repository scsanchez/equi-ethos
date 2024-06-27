import whatsappwallpaper from "../assets/images/wa-wallpaper.png";

export const Reviews = () => {
  return (
    <>
      <div
        id="reviews"
        className="font-bold text-8xl text-center w-full pt-16 mt-20"
      >
        Reviews
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div
            className="display"
            style={{
              backgroundImage: `url(${whatsappwallpaper})`,
              objectFit: "fill",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="artboard artboard-demo phone-1">
              <div className="chat chat-start">
                <div className="chat-header">Jean Patrick Valcourt</div>
                <div className="chat-bubble">
                  Rocío y Sergio trajeron el psicodrama, la música, además de
                  debates y su curiosa manera de contar a La Cueva y, desde
                  luego, dejaron su huella. Siempre tendrán las puertas de La
                  Cueva abiertas a su buen hacer y ojalá, en algún momento,
                  podamos colaborar en algún proyecto.
                </div>
                <div className="chat-footer opacity-50">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-header">Alba</div>
                <div className="chat-bubble">¡Me ha encantado!</div>
                <div className="chat-footer opacity-50">
                  <div className="rating gap-1">
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-red-600"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-red-600"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
