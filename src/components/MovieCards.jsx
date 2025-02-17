import moviesData from "../api/moviesData.json";
import { FaPlay } from "react-icons/fa";
import { MovieCard } from "./MovieCard";

export function MovieCards() {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {moviesData.map((currentMovie) => {
        return <MovieCard key={currentMovie.id} data = {currentMovie}/>
      })}
    </ul>
  );
}
