import React from "react";

const UnControlledComponent = () => {
  function handleSubmitBtn(event) {
    event.preventDefault();
    const inputValue = document.querySelector("#inputText").value;
    console.log(inputValue);
    // console.log(event.value);
  }
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="space-y-8">
        <h2 className="text-5xl text-gray-900 font-bold">
          UnControlled Component
        </h2>
        <form onSubmit={handleSubmitBtn} className="flex flex-col gap-4">
          <label>
            Name:
            <input
              type="text"
              id="inputText"
              className="border border-black focus:outline-none ml-4"
            />
          </label>
          <button type="submit" className="bg-black text-white font-semibold px-4 py-2 w-fit"
        >
          Submit
        </button>
        </form>
       
      </div>
    </div>
  );
};

export default UnControlledComponent;
