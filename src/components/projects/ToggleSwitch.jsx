import { useState } from "react";

export const ToggleSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleButton() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Toggle Switch Button</h1>
      <div
        className={`bg-gray-300 relative shadow-md px-8 py-3 rounded-full ${
          darkMode ? "bg-[#3B82F6]" : "bg-gray-300"
        }`}
        onClick={handleToggleButton}
      >
        <div
          className={`max-w-15 max-h-15 p-3 shadow-md bg-white rounded-full absolute top-0 left-0 ${
            darkMode ? "translate-x-10" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};
