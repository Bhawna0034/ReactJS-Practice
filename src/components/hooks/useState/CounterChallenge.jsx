import React, { useState } from "react";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [countSteps, setCountSteps] = useState(0);

  function handleIncrementBtn() {
    setCount((prevCounts) => prevCounts + countSteps  );
  }

  function handleDecrementBtn() {
    setCount((prevCounts) => prevCounts - countSteps );
  }

  function handleResetBtn() {
    setCount(0);
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="px-8 py-4 rounded-md space-y-6"
        style={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
      >
        <h2 className="text-6xl text-gray-950 font-bold">useState Challenge</h2>
        <p className="text-lg ">
          Count:{" "}
          <span className="text-xl text-blue-500 font-semibold">{count}</span>
        </p>
        <div className="flex gap-3 items-center ">
          <p className="text-lg">Step:</p>
          <input
            type="number"
            value={countSteps}
            onChange={(event) => setCountSteps(Number(event.target.value))}
            className="border border-gray-200 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleIncrementBtn()} disabled={count >= 100}
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg"
          >
            Increment
          </button>
          <button
            onClick={() => handleDecrementBtn()} disabled={count <= 0}
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg"
          >
            Decrement
          </button>
          <button
            onClick={() => handleResetBtn()} 
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterChallenge;
