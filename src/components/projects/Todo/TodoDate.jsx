import { useState, useEffect } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const formattedDate = now.toLocaleDateString();
          const formattedTime = now.toLocaleTimeString();
          setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
    
        return () => clearInterval(interval)
      }, []);

    return   <h2 className="text-xl text-white font-bold ">{dateTime}</h2>
}