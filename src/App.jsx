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
    if (allInput) {
      console.log(allInput);
      const isSame = isEqual(inputNumber, randomNumber);

      if (isSame) {
        toast("Congratulations");
        console.log("Both objects have the same values for all keys.");
      } else {
        toast("Wrong Answer");
      }
    } else {
      console.log("error");
      console.log(allInput);
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
                setInputNumber({ ...inputNumber, [1]: e.target.value })
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
                setInputNumber({ ...inputNumber, [2]: e.target.value })
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
                setInputNumber({ ...inputNumber, [3]: e.target.value })
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
                setInputNumber({ ...inputNumber, [4]: e.target.value })
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
                setInputNumber({ ...inputNumber, [5]: e.target.value })
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
                setInputNumber({ ...inputNumber, [6]: e.target.value })
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
                setInputNumber({ ...inputNumber, [7]: e.target.value })
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
                setInputNumber({ ...inputNumber, [8]: e.target.value })
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
                setInputNumber({ ...inputNumber, [9]: e.target.value })
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
                setInputNumber({ ...inputNumber, [10]: e.target.value })
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
  );
}

export default App;
