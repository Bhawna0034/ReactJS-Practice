import React, { useState } from "react";

const ControlledComponent = () => {
    const [name, setName] = useState("");

    function handleInputChange(value){
        setName(value);
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
    }
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-5xl text-gray-900 font-bold">
          Controlled Component
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space">
          <label className="mb-8">
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-black focus:outline-none ml-4"
              value={name}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </label>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md w-fit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledComponent;
