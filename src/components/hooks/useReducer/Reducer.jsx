import React, { useReducer } from "react";

function reducer(state, action) {
    console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 2 };
    case "DECREMENT":
      return { count: state.count - 2 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
const Reducer = () => {
  const initialState = {
    count: 0,
    
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-lvh">
      <h2 className="text-4xl font-bold">useReducer Hook</h2>
      <p className="text-2xl font-bold">Counter: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        disabled={state.count >= 100}
        className="bg-pink-500 text-white border-2 border-black rounded-lg px-4 py-2 w-[150px]"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state.count <= 0}
        className="bg-blue-400 text-white border-2 border-black rounded-lg px-4 py-2 w-[150px]"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="bg-orange-400 text-white border-2 border-black rounded-lg px-4 py-2 w-[150px]"
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
