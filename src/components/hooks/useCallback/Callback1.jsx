import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return (
    <button
      onClick={onClick}
      className={`text-white w-[150px] px-4 py-2 rounded-md ${
        children === "Increment" ? "bg-pink-600" : "bg-blue-500"
      }`}
    >
      {children}
    </button>
  );
});

const Callback1 = () => {
  const [count, setCount] = useState(0);

 const increment = useCallback(() => {
    console.log("increment inside");
    setCount((prevCount) => prevCount + 1);

  },[]);

  const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);

  },[]);
  
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-lvh">
      <h2 className="text-5xl font-bold">Count: {count}</h2>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default Callback1;
