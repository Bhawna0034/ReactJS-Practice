import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center text-lg font-medium">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-700 font-bold underline"
            : "text-gray-800 hover:text-blue-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
       style={({isActive}) => ({
        color: isActive? "red": "black",
        fontWeight: isActive? "bold": "normal",
        textDecoration: isActive? "underline": "none"

       })
      }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-700 font-bold underline" : "text-gray-800 hover:text-blue-500"
        }
      >
        {" "}
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
