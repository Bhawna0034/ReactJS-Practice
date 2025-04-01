import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Company Logo</h1>
        </div>
        <div>
          {/* <ul className="flex gap-4 items-center font-bold text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
          <Navbar  />
        </div>
      </header>
    </div>
  );
};

export default Header;
