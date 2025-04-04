import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const MovieDetails = () => {
  // const params = useParams();
  const movieDetails = useLoaderData();
  console.log(movieDetails);

  const { Poster, imdbID, Title, Year, Plot, Actors, Genre, Runtime } = movieDetails;
   const totalMinutes = Runtime.replace("min", "");
   const hours = Math.floor(totalMinutes / 60); // Convert min into hrs
   const minutes =  (totalMinutes % 60); // Remaining minutes
  //  console.log(hours, minutes);
   const formattedTime = `${hours}hr ${minutes}min`;
  //  console.log(formattedTime);
  return (
    <>
      <li className="object-contain list-none p-10 flex items-center justify-center">
        <div className="flex ">
          <div>
            <img src={Poster} alt={imdbID} className="w-[400px] h-[430px]" />
          </div>
          <div className="bg-gray-950 w-[500px] rounded-r-lg px-4 py-2 flex flex-col  justify-center gap-2">
            <h2 className="text-2xl font-bold text-white mb-1 ">
              {Title} ({Year})
            </h2>
            <p className="text-sm text-gray-500 italic mb-1">{Genre}&nbsp;  {formattedTime} </p>
            <p className="text-gray-400 mb-1">{Plot}</p>
            <p className="text-md text-gray-100 ">Cast: {Actors}</p>
            <NavLink to={`/movie`}>
            <button className="bg-white text-black px-4 py-2 text-center font-bold w-fit">
              Watch Now
            </button>
          </NavLink>
          </div>
          
        </div>
      </li>
    </>
  );
};

export default MovieDetails;
