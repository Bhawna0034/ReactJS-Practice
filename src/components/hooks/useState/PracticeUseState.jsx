import React, {useState} from "react";

const PracticeUseState = () => {
  const [count, setCount] = useState(0);
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-10">
        <h2 className="text-5xl text-gray-950 font-bold">useState() Hook</h2>
        <p className="text-4xl font-semibold">{count}</p>
        <button onClick={() => setCount(count + 1)} className="border-2 border-black bg-teal-600 text-black font-semibold px-4 py-2 rounded-lg w-full">Increment</button>
      </div>
    </div>
  );
};

export default PracticeUseState;
