import React, { useState } from "react";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  function handleInputChange(event){
    const {name, value} = event.target;
    setUser((prevValue) => ({...prevValue, [name]:value}) )
  }

  function handleFormSubmit(event){
    event.preventDefault();
    console.log(user);
  }
  return (
    <div className="flex flex-col items-center justify-center m-10">
      <div
        className="bg-white rounded-md p-4 mb-2 h-[600px]"
        style={{
          boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        }}
      >
        <header className="mb-6">
          <h2 className="text-3xl text-gray-900 font-semibold mb-2">Sign Up</h2>
          <p className="text-gray-400">
            Please fill in the form to create an account.
          </p>
        </header>
        <div className="mb-4">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* First Name */}
            <div className="space-y-1 mb-4">
              <label htmlFor="firstName" className="font-bold ">
                First Name
              </label>
              <input
                type="firstName"
                name="firstName"
                placeholder="Enter First Name"
                className="bg-gray-100 px-1 py-2 w-full focus:outline-none"
                value={user.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Last Name */}
            <div className="space-y-1 mb-4">
              <label htmlFor="lastName" className=" font-bold ">
                Last Name
              </label>
              <input
                type="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                className="bg-gray-100 px-1 py-2 w-full focus:outline-none"
                value={user.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Email */}
            <div className="space-y-1 mb-4">
              <label htmlFor="email" className=" font-bold ">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="bg-gray-100 px-1 py-2 w-full focus:outline-none"
                value={user.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Password */}
            <div className="space-y-1 mb-4">
              <label htmlFor="password" className="font-bold ">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="bg-gray-100 px-1 py-2 w-full focus:outline-none"
                value={user.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Phone Number */}
            <div className="space-y-1 mb-4">
              <label htmlFor="phoneNumber" className="font-bold ">
                Phone Number
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                className="bg-gray-100 px-1 py-2 w-full focus:outline-none"
                value={user.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <label className="mt-4">
              <input type="checkbox" />
              By creating an account to our{" "}
              <span className="text-sky-500">Terms & Privacy</span>
            </label>
            <div>
              <button
                type="submit"
                className="bg-sky-500 text-white w-full rounded-lg px-4 py-2 focus:scale-[1.05]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p>Hello my name is <span className="text-sky-500">{user.firstName}{user.lastName}</span>. My email address is <span className="text-sky-500">{user.email}</span> and my phone number is <span className="text-sky-500">{user.phoneNumber}</span></p>
      </div>
    </div>
  );
};

export default RegistrationForm;
