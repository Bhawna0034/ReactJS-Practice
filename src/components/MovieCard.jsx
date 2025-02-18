import { BsEmojiSmile } from "react-icons/bs";
import { CgPlayButton } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import moviesData from "../api/moviesData.json";
import { FaPlay } from "react-icons/fa";

export function InterstellarCard() {
  const title = "Interstellar";
  const description =
    " A group of elderly people are giving interviews about having livedin a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.";
  const cast = "Matthew McConaughey, Anne Hathaway, Jessica Chastain";

  let age = 22;

  return (
    <>
      <div className="bg-black flex flex-col items-center justify-center py-24">
        <div
          className="max-w-[400px] rounded-xl"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        >
          <div>
            <img
              src="./Interstellar.jpg"
              alt="Interstellar"
              className="w-[400px] h-[430px]"
            />
          </div>
          <div className="bg-[#1e1b26] p-4 ">
            <h1 className="text-4xl text-white ">{title}</h1>
            <p className="text-md text-gray-500 mb-4">
              PG-13 / 2h 49min / Adventure, Drama, Sci-Fi,
            </p>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-md text-white">SUMMARY</h2>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center text-sm text-red-600 font-semibold">
                  <BsEmojiSmile />
                  <p>124</p>
                </div>
                <div className="flex gap-2 items-center text-sm text-red-600 font-semibold">
                  <BsEmojiSmile />
                  <p>3</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-justify leading-snug mb-2">
              {description}
            </p>
            <p className="text-sm text-gray-300 italic mb-10"> {cast}</p>
            <div className="flex items-center justify-between">
              <button className="bg-transparent border border-red-600 text-lg text-red-600 flex items-center justify-between px-2 py-1 outline-none hover:outline-none">
                <CgPlayButton className="text-3xl" />
                <span className="uppercase font-normal">
                  {age >= 18 ? "Watch Now" : "Not Available"}
                </span>
              </button>
              <div className="flex gap-4 items-center">
                <img
                  src="./CameraFile.jpg"
                  alt="cameraFile"
                  className="w-[25px] hover:bg-none"
                />
                <FaBookmark className="text-2xl text-red-500" />
                <FaShareAlt className="text-2xl text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function MovieCard(props) {
  console.log(props);

  const { img_url, img_alt, title, year, genre, cast, description, watch_url } =
    props.data;

  return (
    <li className="max-w-[500px] h-full" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <div className="flex flex-col flex-grow">
        <div>
          <img src={img_url} alt={img_alt} className="w-full h-[500px] object-cover" />
        </div>
        <div className="bg-black p-4 space-y-2 w-full h-full flex flex-col justify-between">
          <h1 className="text-4xl text-white font-bold truncate ">{title}</h1>
          <p className="truncate text-lg text-gray-400">
            {year} / {genre.join(", ")}
          </p>
          <p className="text-md text-gray-300 truncate">Cast: {cast.join(", ")}</p>
          <p className="line-clamp-3 text-sm text-gray-400 mb-16">{description}</p>
          <a href={watch_url} target="_blank" className="mt-auto">
            <button className="flex gap-2 items-center border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:scale-[1.02] focus: scale-[1.02]">
              <FaPlay />
              <span>Watch Trailer</span>
            </button>
          </a>
        </div>
      </div>
    </li>
  );
}
