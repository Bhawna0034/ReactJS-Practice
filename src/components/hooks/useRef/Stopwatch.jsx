import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval((time) => {
      setTime((time) => time + 1 );
      // console.log(time);
    }, 1000);

  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;

  }
  function resetTimer(){
    stopTimer();
    setTime(0);

  }
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Stopwatch: {time} seconds</h2>
      <div className="flex flex-col gap-8 items-center">
        <button onClick={startTimer}
          className="px-4 py-2 bg-gray-900 w-[100px]rounded-lg"
          style={{
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
          }}
        >
          Start
        </button>
        <button onClick={stopTimer}
          className="px-4 py-2 bg-gray-900 w-[100px]rounded-lg"
          style={{
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
          }}
        >
          Stop
        </button>
        <button onClick={resetTimer}
          className="px-4 py-2 bg-gray-900 w-[100px]rounded-lg"
          style={{
            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
