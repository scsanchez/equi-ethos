export const Reviews = () => {
  return (
    <>
      <div className="font-bold text-4xl text-center w-full">Reviews</div>
      <div className="flex justify-center items-center">
        <div className="chat chat-start w-1/2 mx-auto">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble">Que taller mas bonito!</div>
          <div className="chat chat-start w-1/2 mx-auto">
            <div className="rating gap-0">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="chat chat-end">
            <div className="chat-header">Obi-Wan Kenobi</div>
            <div className="chat-bubble">Me ha encantado!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
