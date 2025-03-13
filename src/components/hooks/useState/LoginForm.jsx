import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event){
    event.preventDefault();
    const loginForm = {
        username,
        password
    };
    console.log(loginForm);
    setUsername("")
    setPassword("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="p-8 rounded-md flex flex-col gap-y-4"
        style={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
      >
        <header>
          <h2 className="text-4xl text-gray-900 font-bold">Login Form</h2>
        </header>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="bg-gray-100 rounded-sm w-full p-2 focus:outline-none"
              autoComplete="off"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="bg-gray-100 rounded-sm w-full p-2 focus:outline-none"
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-sky-500 text-white w-full px-4 py-2 rounded-md hover:scale-[1.02]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
