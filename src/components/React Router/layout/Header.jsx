import React from "react";
import Navbar from "../pages/Navbar";

const Header = () => {
  return (
    <div>
      <header className=" bg-white  flex items-center justify-between  mb-1 overflow-x-hidden">
        <div className="flex gap-[750px] items-center justify-between">
          <h1 className="text-2xl font-bold">Company Logo</h1>
          <div className="flex items-center justify-end">
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
