import { useState } from "react";
const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="bg-black text-white flex gap-[50px] items-center justify-center min-h-screen">
      <button className="border max-w-16 max-h-16 rounded-full px-4 py-1 text-4xl flex items-center justify-center"
              onClick={decrement}>
        -
      </button>
      <h1 className="text-[20rem] font-bold">{count}</h1>

      <button className="border max-w-16 max-h-16 rounded-full px-3 py-1 text-4xl flex items-center justify-center"
              onClick={increment}>
        +
      </button>
    </div>
  );
};
export default SimpleCounter;
