import React, { useState } from "react";

export default function Calculate() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [userName, setUserName] = useState([]);

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [num4, setNum4] = useState();
  const [num5, setNum5] = useState();
  const [num6, setNum6] = useState();
  const [num7, setNum7] = useState();
  const [num8, setNum8] = useState();

  const calculate = () => {
    if (!num1 || !num2) {
      alert("Please enter both numbers");
      return;
    }
    setSum(Number(num1) + Number(num2));
  };

  const maximum = () => {
    if (!num3 || !num4 || !num5) {
      alert("Please enter all three numbers");
      return;
    }
    // const maxValue = Math.max(Number(num3), Number(num4), Number(num5));
    // setMax(maxValue);
     let max = Number(num3);
     
    if (Number(num4) > max) {
         max = Number(num4);}
     if(Number(num5) > max){
        max = Number(num5);}
    setMax(max);
  };

  const avg = () => {
    if (!num6 || !num7 || !num8) {
      alert("Please enter all three numbers");
      return;
    }
    const avgValue = (Number(num6) + Number(num7) + Number(num8)) / 3;
    setAverage(avgValue);
  };

  const printName = () => {
    setData([...data, userName]);
    setUserName("");
  };

  return (
    <div>
      <div className="flex gap-4 p-4 items-center">
        <input
          type="number"
          onChange={(i) => setNum1(i.target.value)}
          placeholder="Too oruul"
          value={num1}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <input
          type="number"
          onChange={(i) => setNum2(i.target.value)}
          placeholder="Too oruul"
          value={num2}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <button
          className="w-[70px] h-[50px] bg-amber-300 rounded-2xl"
          onClick={() => calculate()}
        >
          sum
        </button>
        <p>Sum: {sum}</p>
      </div>

      <div className="flex gap-4 p-4 items-center">
        <input
          type="number"
          onChange={(i) => setNum3(i.target.value)}
          placeholder="Too oruul"
          value={num3}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <input
          type="number"
          onChange={(i) => setNum4(i.target.value)}
          placeholder="Too oruul"
          value={num4}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <input
          type="number"
          onChange={(i) => setNum5(i.target.value)}
          placeholder="Too oruul"
          value={num5}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <button
          className="w-[70px] h-[50px] bg-amber-300 rounded-2xl"
          onClick={() => maximum()}
        >
          Max
        </button>
        <p>Max: {max}</p>
      </div>

      <div className="flex gap-4 p-4 items-center">
        <input
          type="number"
          onChange={(i) => setNum6(i.target.value)}
          placeholder="Too oruul"
          value={num6}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <input
          type="number"
          onChange={(i) => setNum7(i.target.value)}
          placeholder="Too oruul"
          value={num7}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <input
          type="number"
          onChange={(i) => setNum8(i.target.value)}
          placeholder="Too oruul"
          value={num8}
          className="w-[100px] h-[25px] border-1 p-2 rounded-lg"
        />
        <button
          className="w-[70px] h-[50px] bg-amber-300 rounded-2xl"
          onClick={() => avg()}
        >
          Avg
        </button>
        <p>Average: {average}</p>
      </div>

      <div className="flex gap-4 p-4 items-center">
        <input
          type="text"
          placeholder="Write your name..."
          className="h-[25px] border-1 p-2 rounded-lg"
          value={userName}
          onChange={(i) => setUserName(i.target.value)}
        />
        <button
          className="w-[70px] h-[50px] bg-amber-300 rounded-2xl"
          onClick={() => printName()}
        >
          Print Name
        </button>

        <ul>
          {data.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
