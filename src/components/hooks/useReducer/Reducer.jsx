import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "DECREMENT") return state - 1;
}
const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-lvh">
      <h2 className="text-4xl font-bold">useReducer Hook</h2>
      <p className="text-2xl font-bold">Counter: {count}</p>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })} disabled={count >= 100}
        className="bg-pink-500 text-white border-2 border-black rounded-lg px-4 py-2 w-[150px]"
      >
        Increment
      </button>
      <button onClick={() => dispatch({type: "DECREMENT"})} disabled={count <= 0} className="bg-blue-400 text-white border-2 border-black rounded-lg px-4 py-2 w-[150px]">
        Decrement
      </button>
    </div>
  );
};

export default Reducer;
