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
  const [inputNumber, setInputNumber] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });
  const [start, setStart] = useState(true);
  const timeRef = useRef(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });
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
      toast("You've already opened this card 😏👎", {
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
    // console.log(randomNumber);
  };
  const allClicked = Object.values(numberClicked).every((val) => val === true);
  const allInput = Object.values(inputNumber).every((val) => val != "");
  const submitAnswer = () => {
    stopTimer();
    setIsSubmitted(true);
    if (allInput) {
      console.log(allInput);
      console.log(inputNumber, randomNumber);
      const isSame = isEqual(inputNumber, randomNumber);

      if (isSame) {
        toast("Congratulations");
        setIsCorrect(true);
        // console.log("Both objects have the same values for all keys.");
      } else {
        toast("Wrong Answer");
      }
    } else {
      // console.log("error");
      // console.log(allInput);
      toast("Please fill in all fields");
    }
  };
  const isEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if they have the same keys
    if (keys1.length !== keys2.length) return false;

    // Check if all values for each key are equal
    return keys1.every((key) => obj1[key] === obj2[key]);
  };

  const startTimer = () => {
    setStart(false);
    timeRef.current = setInterval(() => {
      setTime(({ hour, min, sec }) => {
        sec += 1;
        if (sec === 60) {
          sec = 0;
          min += 1;
        }
        if (min === 60) {
          min = 0;
          hour += 1;
        }
        return { hour, min, sec };
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timeRef.current);
  };
  const resetTimer = () => {
    setTime({ hour: 0, min: 0, sec: 0 });
  };
  return (
    <div className="justify-center items-center">
      <div
        className={`${
          isSubmitted
            ? "z-50 absolute  top-20 right-20 lg:right-50 border-2 min-h-1/2 w-2/3 text-center  p-4"
            : "hidden"
        } ${isCorrect ? "bg-green-500" : "bg-red-500"}`}
      >
        {isCorrect && (
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">Congratulations!!! 🎉🏆🙌</p>
            <p className="text-xl font-bold">You are so great ( ◡̀_◡́)ᕤ</p>
            <p>
              Your time is{" "}
              <span className="font-bold">
                {String(time.hour).padStart(2, "0")}:
                {String(time.min).padStart(2, "0")}:
                {String(time.sec).padStart(2, "0")}
              </span>
            </p>
            <p>
              <button className="p-4 border-2 rounded-2xl bg-yellow-300">
                New Game
              </button>
            </p>
          </div>
        )}
        {!isCorrect && (
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">
              Your current answer is wrong 😔
            </p>
            <p className="text-xl font-bold">
              But hey, you can try again ( ´･･)ﾉ(._.`)
            </p>
            <p>
              Do you wish to submit new answer for this set or you want to start
              a new game?
            </p>
            <p>
              Your current time is{" "}
              <span className="font-bold">
                {String(time.hour).padStart(2, "0")}:
                {String(time.min).padStart(2, "0")}:
                {String(time.sec).padStart(2, "0")}
              </span>
            </p>
            <p className="flex gap-32">
              <button className="p-4 border-2 rounded-2xl  bg-green-500 flex-1">
                Try Again
              </button>
              <button className="p-4 border-2 rounded-2xl bg-yellow-300 flex-1">
                New Game
              </button>
            </p>
          </div>
        )}
      </div>
      <div
        className={`${
          start
            ? "z-50 absolute top-20 right-20 lg:right-50 border-2 min-h-1/2 w-2/3 text-center  p-4 bg-blue-400"
            : "hidden"
        }`}
      >
        <div className="m-4">
          <p className="text-4xl ">Welcome to Numemo Game!</p>
        </div>

        <span className="font-bold text-red-500">Instructions: </span>
        <span>
          Each box contains a random number. The goal of the game is for you to
          memorize what number is inside each box. Click on the boxes, one by
          one, two by two, from top to bottom, from left to right, however you
          want; to show the hidden numbers. But{" "}
          <span className="font-bold ">take note: </span>
          The numbers will disappear after{" "}
          <span className="text-red-500 font-bold">3 </span>seconds and the box
          you've already opened cannot be opened again.
        </span>
        <p>
          After opening all the boxes, a form will appear where you will submit
          your answer
        </p>
        <p>
          Your timer starts once you click the{" "}
          <span className=" font-bold">Start</span> button
        </p>
        <p>Best of Luck</p>
        <button
          onClick={() => {
            startTimer();
          }}
          className="border-2 p-2 bg-green-500"
        >
          Start
        </button>
      </div>

      <div
        className={`${
          start || isSubmitted
            ? "opacity-25 pointer-events-none "
            : "opacity-100 "
        }`}
      >
        <div>
          <span className="font-extrabold text-4xl">Time: </span>
          <span>
            {String(time.hour).padStart(2, "0")}:
            {String(time.min).padStart(2, "0")}:
            {String(time.sec).padStart(2, "0")}
          </span>
        </div>
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
          <div
            className={`${
              allClicked ? "flex col-span-5" : "hidden"
            } m-4 border-2 flex-col gap-3 justify-center items-center p-4`}
          >
            <p>Correctly input the corresponding numbers for each box</p>
            <div className="grid grid-cols-5 grid-flow-row gap-4">
              <label className="flex flex-row">
                Box #1:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[1]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [1]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>

              <label htmlFor="" className="flex flex-row">
                Box #2:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[2]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [2]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>

              <label htmlFor="" className="flex flex-row">
                Box #3:
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[3]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [3]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>

              <label htmlFor="" className="flex flex-row">
                Box #4:
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[4]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [4]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>

              <label htmlFor="" className="flex flex-row">
                Box #5:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[5]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [5]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>

              <label htmlFor="" className="flex flex-row">
                Box #6:
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[6]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [6]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>

              <label htmlFor="" className="flex flex-row">
                Box #7:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[7]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [7]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>
              <label htmlFor="" className="flex flex-row">
                Box #8:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[8]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [8]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>
              <label htmlFor="" className="flex flex-row">
                Box #9:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[9]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [9]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>
              <label htmlFor="" className="flex flex-row">
                Box #10:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  value={inputNumber[10]}
                  onChange={(e) =>
                    setInputNumber({
                      ...inputNumber,
                      [10]: Number(e.target.value),
                    })
                  }
                  className="border-2 w-1/2"
                />
              </label>
              <button onClick={() => submitAnswer()}>Submit</button>
            </div>
          </div>
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
      </div>
    </div>
  );
}

export default App;
