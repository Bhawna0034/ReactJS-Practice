import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(["Apple", "Banana", "Mango"]);

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) => item.startsWith("M"));
  }, [items]);

  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <h2 className="text-3xl font-bold mb-2">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white w-[150px] px-4 py-2 rounded-md mb-4"
      >
        Increment
      </button>
      <div>
        <h2>Filtered items</h2>
        {filteredItems.map((item, index) => {
          return (
            <p key={index} className="text-2xl font-semibold">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default UseMemo;
