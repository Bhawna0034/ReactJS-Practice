import React, { createContext, use, useState } from "react";

const ThemeContext = createContext();
const Mode = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SwitchMode />
      </ThemeContext.Provider>
    </div>
  );
};

const SwitchMode = () => {
  const { theme, setTheme } = use(ThemeContext);
  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center h-lvh ${
        theme === "dark" ? "bg-black text-white" : ""
      }`}
    >
      <h1 className="text-4xl font-bold">Dark Light Mode Website</h1>
      <h2 className="text-xl font-medium">Hello, We're learning React Js ✌️</h2>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-700 focus:scale-[1.02] text-lg text-white p-4 w-[200px] rounded-md"
      >
        Switch to {theme} mode
      </button>
    </div>
  );
};

export default Mode;
