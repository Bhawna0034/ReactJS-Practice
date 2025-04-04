import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#464e58] flex items-center justify-center h-lvh">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
        <div>
          <h3 className="uppercase text-sm text-gray-300 mb-1">
            Explore the latest in movie industries
          </h3>
          <h2 className="text-4xl line-clamp-2  text-white font-bold mb-2">
            Unlimited Movie, TVs Shows, & More.
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            Discover the Top Best Movies and Dramas with a catchy subtitle like
            Your Ultimate Guide to Must-Watch Content.
          </p>
          <NavLink to="/movie">
            <button className="bg-red-700 text-white px-4 py-2 rounded-sm">
              Explore Now
            </button>
          </NavLink>
        </div>
        <div>
          <img src="movies.png" alt="movie-poster" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
