const Card = ({ id, clicked, spanVisible, randomNumber, bgColor }) => {
  return (
    <div
      className={`border-2 text-center p-4 ${bgColor}`}
      id={id}
      onClick={(e) => clicked(e)}
    >
      <span
        className={
          !spanVisible[id]
            ? "inline text-black font-bold cursor-default"
            : "hidden"
        }
      >
        Box #{id}
      </span>
      <span
        className={
          spanVisible[id]
            ? "inline text-shadow-black text-green-500 text-shadow-2xs font-extrabold text-xl"
            : "hidden"
        }
      >
        {randomNumber[id]}
      </span>
    </div>
  );
};

export default Card;
