import React, { useEffect, useState } from "react";

const Effect3 = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const timer = new Date();
      setTime(timer.toLocaleTimeString());
    }, 1000);
  },[1000]);
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-5xl text-white font-bold">{time}</h2>
    </div>
  );
};

export default Effect3;
