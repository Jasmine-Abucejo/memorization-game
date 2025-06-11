const Card = ({ id, clicked, spanVisible, randomNumber }) => {
  return (
    <div
      className="border-2 text-center p-4"
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
          spanVisible[id] ? "inline text-green-400 font-extrabold" : "hidden"
        }
      >
        {randomNumber[id]}
      </span>
    </div>
  );
};

export default Card;
