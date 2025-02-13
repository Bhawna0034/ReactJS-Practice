import { BsEmojiSmile } from "react-icons/bs";
import { CgPlayButton } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

export function MovieCard() {
  return (
    <div className="bg-white px-52 py-24">
    <div className="bg-black flex flex-col items-center justify-center py-24">
      <div className="max-w-[400px]" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <div>
          <img
            src="./Interstellar.jpg"
            alt="Interstellar"
            className="w-[400px] h-[430px]"
          />
        </div>
        <div className="bg-[#1e1b26] p-4 ">
          <h1 className="text-4xl text-white ">Interstellar</h1>
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
            A group of elderly people are giving interviews about having lived
            in a climate of crop blight and constant dust reminiscent of The
            Great Depression of the 1930's. The first one seen is an elderly
            woman stating her father was a farmer, but did not start out that
            way.
          </p>
          <p className="text-sm text-gray-300 italic mb-10">
            Matthew McConaughey, Anne Hathaway, Jessica Chastain
          </p>
          <div className="flex items-center justify-between">
            <button className="bg-transparent border border-red-600 text-lg text-red-600 flex items-center justify-between px-2 py-1">
              <CgPlayButton />
              <span className="font-normal">WATCH TRAILER</span>
            </button>
            <div className="flex gap-4 items-center">
              <img
                src="./CameraFile.jpg"
                alt="cameraFile"
                className="w-[25px]"
              />
             <FaBookmark className="text-2xl text-red-500"/>
              <FaShareAlt className="text-2xl text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
