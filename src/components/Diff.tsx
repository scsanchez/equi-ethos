export const Diff = () => {
    return (
      <div className="flex justify-center items-center" style={{ transform: 'scale(0.5)' }}>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              EQUI-ETHOS
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              EQUI-ETHOS
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    );
  };
  export default Diff;