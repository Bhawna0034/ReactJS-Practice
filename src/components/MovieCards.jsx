import moviesData from "../api/moviesData.json";
import { FaPlay } from "react-icons/fa";
import { MovieCard } from "./MovieCard";

export function MovieCards() {
  return (
    <ul>
      {moviesData.map((currentMovie) => {
        return <MovieCard key={currentMovie.id} currentMovie = {currentMovie}/>
      })}
    </ul>
  );
}
