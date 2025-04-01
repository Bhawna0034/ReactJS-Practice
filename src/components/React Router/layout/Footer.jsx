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
            <NavLink to="/" className="hover:text-blue-800 hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-blue-800 hover:underline"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-blue-800 hover:underline"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <p className="text-xs text-gray-100">Copyright &copy; 2025 reserved.</p>
    </div>
  );
};

export default Footer;
