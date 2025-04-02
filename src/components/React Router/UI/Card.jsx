import React from "react";
import { CgPlayButton } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Card = ({ currentMovie }) => {
  const { Poster, Title, imdbID, Year } = currentMovie;
  
  return (
    <li className="object-contain">
      <div
        className="max-w-[400px] rounded-xl"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      >
        <div>
          <img src={Poster} alt={imdbID} className="w-[400px] h-[430px]" />
        </div>
        <div className="bg-[#1e1b26] p-4 ">
          <h1 className="text-lg text-white truncate">{Title}</h1>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400 text-justify leading-snug mb-2">
              {Year}
            </p>
          </div>
          <NavLink to={`/movie/${imdbID}`}>
            <button className="bg-white text-black px-4 py-2 text-center font-bold w-full">
              Watch Now
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default Card;
