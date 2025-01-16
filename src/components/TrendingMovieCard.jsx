/* eslint-disable react/prop-types */
import { IoMdPlay } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const TrendingMovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="w-[65rem] relative text-[#e2e2e2] rounded-xl">
      {/* Trending button */}
      <button className="absolute top-6 left-5 px-4 py-1 rounded-2xl bg-slate-200/20">
        Now Trending 🔥
      </button>
      {/* Movie poster */}
      <img
        className="w-full object-cover h-[30rem] rounded-3xl"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="absolute bottom-0 w-full p-4 flex items-end justify-between">
        <div>
          {/* Movie genres */}
          <div className="flex gap-2 items-center">
            {movie.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-slate-200/20 text-xs px-2 py-1 rounded-2xl"
              >
                {genre}
              </span>
            ))}
          </div>
          {/* Movie title and plot */}
          <div className="mt-2 flex flex-col items-start gap-3">
            <h2 className="text-2xl font-bold mt-2">{movie.title}</h2>
            <p className="text-sm w-[50%]">{movie.plot}</p>
          </div>
          {/* Action buttons */}
          <div className="mt-4 flex gap-4 items-center *:py-1 *:px-3 *:rounded-2xl">
            {/* the hysteric column is a special feature in tailwind that targets all its components*/}
            <button className="bg-white text-black flex items-center gap-2 ">
              {" "}
              <IoMdPlay />
              Watch Now
            </button>
            <button className="bg-gray-500/50 flex items-center gap-2 border border-white">
              <IoLogoYoutube />
              Trailer
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-end *:bg-slate-400/50 *:rounded-3xl *:p-3">
          <button className="text-4xl">
            {" "}
            <FaChevronLeft />
          </button>
          <button className="text-4xl">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
