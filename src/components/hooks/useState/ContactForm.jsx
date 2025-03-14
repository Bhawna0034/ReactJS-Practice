import React, { useState } from "react";

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        message: ""
    });

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [message, setMessage] = useState("");

    function handleInputChange(event){
        const {name, value} = event.target;
        setUser((prevValue) => ({ ...prevValue, [name]:value}))
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(user);
        setUser("");

    }

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div
      className="p-8 rounded-md flex flex-col gap-y-4"
      style={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
    >
      <header>
        <h2 className="text-4xl text-gray-900 font-bold">Contact Form</h2>
      </header>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="bg-gray-100 rounded-sm w-full p-2 focus:outline-none"
            autoComplete="off"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="bg-gray-100 rounded-sm w-full p-2 focus:outline-none"
            autoComplete="off"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="bg-gray-100 rounded-sm w-full p-2 focus:outline-none"
            autoComplete="off"
            value={user.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-sky-500 text-white w-full px-4 py-2 rounded-md hover:scale-[1.02]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
