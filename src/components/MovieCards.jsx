import moviesData from "../api/moviesData.json";
import { FaPlay } from "react-icons/fa";

export function MovieCards() {
  return (
    <ul>
      {moviesData.map((currentMovie) => {
        return (
          <li key={currentMovie.id}>
            <div>
              <img src={currentMovie.img_url} 
                   alt={currentMovie.img_alt}
                   width="40%"
              />
              <div>
                <h1>{currentMovie.title}</h1>
                <p>
                  {currentMovie.year}/ {currentMovie.genre}
                </p>
                <p>{currentMovie.cast}</p>
                <p>{currentMovie.description}</p>
                <button>
                  <FaPlay />
                  <span>Watch Trailer</span>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
