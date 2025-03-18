import React, { forwardRef, useId, useRef } from "react";

const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
  }
  return (
    <div className="bg-gray-100 flex flex-col gap-4 items-center min-h-screen">
      <form onSubmit={handleFormSubmit}>
        {/* <BeforeReact19Input label="Username" ref={username} />
        <BeforeReact19Input label="Password" ref={password} /> */}
        <AfterReact19Input label = "Username" ref={username} />
        <AfterReact19Input label = "Password" ref={password} />
        <button
          type="submit"
          className="bg-teal-600 border-2 border-black px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export const AfterReact19Input = (props) => {
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref} />
        </div>
        

    )

}

export const BeforeReact19Input = forwardRef((props, ref) => {
    const id = useId();
  return (
    <div>
      <div>
        <label htmlFor={id}>{props.label} </label>
        <input  ref={ref} type="text" className="border border-black" />
      </div>
      
    </div>
  );
});

export default ForwardRef;
