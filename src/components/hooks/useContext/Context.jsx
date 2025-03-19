import React, { createContext, useContext, useState } from "react";

// Step1: create Context
const UserContext = createContext();

// Step2: Wrap all the child inside a Provider
// Step3: Pass the Value
// Step4: Now, go to that Child, who want to access the parent's value, and Consume the value given my Parent
const Context = () => {
  const fullName = "Bhawna";
  const age = 22;
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center h-lvh">
      <h2 className="text-5xl font-bold mb-10">useContext Hook</h2>
      <UserContext.Provider value={{fullName, age}}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
};

const ChildA = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-center mb-2">
        Hello, I'm Child B
      </h2>
      <ChildB />
    </div>
  );
};
const ChildB = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-center mb-4">
        Hello, I'm Child C
      </h2>
      <ChildC />
    </div>
  );
};

const ChildC = () => {
    const {fullName, age}= useContext(UserContext);
   
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        Hi, Beautiful People! My name is {fullName} and I'm {age} years old
      </h2>
    </div>
  );
};

export default Context;
