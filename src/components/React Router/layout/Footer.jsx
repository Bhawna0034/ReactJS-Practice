import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-between">
        <div>
          <h1 className="text-sm ">Copyright &copy; 2025</h1>
        </div>
        <div>
          <ul className="flex gap-4 items-center font-bold text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;