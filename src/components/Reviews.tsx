export const Reviews = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="divider divider-neutral">Testimonios</div>
      </div>
      <div className="w-2/3 mx-auto">
        <div className="chat chat-start">
          <div className="chat-header">Jean Patrick Valcourt</div>
          <div className="chat-bubble">
            Rocío y Sergio trajeron el psicodrama, la música, además de debates
            y su curiosa manera de contar a La Cueva y, desde luego, dejaron su
            huella. Siempre tendrán las puertas de La Cueva abiertas a su buen
            hacer y ojalá, en algún momento, podamos colaborar en algún
            proyecto.
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
                checked
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
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-600"
                checked
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider divider-neutral"></div>
      </div>
    </>
  );
};

export default Reviews;
