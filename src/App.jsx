import { useRef, useState } from "react";
import Card from "./components/Card";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [numberClicked, setNumberClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const [spanVisible, setSpanVisible] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const [randomNumber, setRandomNumber] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });

  const clicked = (e) => {
    let id = parseInt(e.currentTarget.id);
    if (!numberClicked[id]) {
      const num = Math.floor(Math.random() * 10) + 1;
      setRandomNumber((prev) => ({ ...prev, [id]: num }));
      setNumberClicked((prev) => ({ ...prev, [id]: true }));
      setSpanVisible((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setSpanVisible((prev) => ({ ...prev, [id]: false }));
      }, 3000);
    } else {
      toast("Bleee! Trying to cheat? 😏👎", {
        style: {
          background: "#fa757c",
        },
        icon: "🤪 ",

        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
    }
    console.log(randomNumber);
  };

  return (
    <div className="grid grid-cols-5 grid-flow-rows justify-center items-center p-8 gap-4">
      <Card
        id={1}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={2}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={3}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={4}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={5}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={6}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={7}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={8}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={9}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Card
        id={10}
        clicked={clicked}
        spanVisible={spanVisible}
        randomNumber={randomNumber}
      />
      <Toaster />
      {/* <div className="border-2" id="1" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[1]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #1
        </span>
        <span
          className={
            spanVisible[1] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[1]}
        </span>
      </div>
      <div className="border-2" id="2" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[2]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #2
        </span>
        <span
          className={
            spanVisible[2] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[2]}
        </span>
      </div>
      <div className="border-2" id="3" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[3]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #3
        </span>
        <span
          className={
            spanVisible[3] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[3]}
        </span>
      </div>
      <div className="border-2" id="4" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[4]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #4
        </span>
        <span
          className={
            spanVisible[4] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[4]}
        </span>
      </div>
      <div className="border-2" id="5" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[5]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #5
        </span>
        <span
          className={
            spanVisible[5] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[5]}
        </span>
      </div>
      <div className="border-2" id="6" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[6]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #6
        </span>
        <span
          className={
            spanVisible[6] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[6]}
        </span>
      </div>
      <div className="border-2" id="7" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[7]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #7
        </span>
        <span
          className={
            spanVisible[7] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[7]}
        </span>
      </div>
      <div className="border-2" id="8" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[8]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #8
        </span>
        <span
          className={
            spanVisible[8] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[8]}
        </span>
      </div>
      <div className="border-2" id="9" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[9]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #9
        </span>
        <span
          className={
            spanVisible[9] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[9]}
        </span>
      </div>
      <div className="border-2" id="10" onClick={(e) => clicked(e)}>
        <span
          className={
            !spanVisible[10]
              ? "inline text-black font-bold cursor-default"
              : "hidden"
          }
        >
          Box #10
        </span>
        <span
          className={
            spanVisible[10] ? "inline text-green-400 font-extrabold" : "hidden"
          }
        >
          {randomNumber[10]}
        </span>
      </div> */}
    </div>
  );
}

export default App;
