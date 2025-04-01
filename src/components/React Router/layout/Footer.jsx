import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700  px-10 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-white font-bold">Company Logo</h1>
        </div>
        <ul className="text-gray-400 font-semibold space-y-1">
          <h2 className="text-gray-500 font-bold text-xl">About Company</h2>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <p className="text-xs text-white">Copyright &copy; 2025</p>
    </div>
  );
};

export default Footer;
