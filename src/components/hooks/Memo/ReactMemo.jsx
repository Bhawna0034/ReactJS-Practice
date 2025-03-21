import React, { useState } from "react";
import MemoCount from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center m-24 h-lvh">
        <h2 className="text-4xl font-bold mb-2">{count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white border-2 border-black px-4 py-2 rounded-md w-[150px]"
        >
          Increment
        </button>
      
      <MemoCount />
    </div>
  );
};

export default ReactMemo;
