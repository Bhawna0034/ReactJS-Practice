import React, { useState } from "react";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  function handleSetUser(){
    let newUser = window.prompt("Enter your name: ");
    console.log(newUser);
    setUser(newUser);
    
  }

  return (
    <div className="px-8 flex items-center justify-center min-h-screen">
      <div className="space-y-8">
        <h2 className="text-4xl text-gray-900 font-bold mb-4">
          Welcome to the ShortCircuit Evaluation!
        </h2>
        {isLoggedIn && <p>You are logged in!</p>}
        {user ? `Hello, ${user}`: `Please log in`}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-gray-900 text-white font-bold text-center px-4 py-2"
          >
            Toggle Login State
          </button>
          <button onClick={() => handleSetUser()} className="bg-gray-900 text-white font-bold text-center px-4 py-2">
            Set User
          </button>
          <button onClick={() => setUser("")} className="bg-gray-900 text-white font-bold text-center px-4 py-2">
            Clear User
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortCircuit;
