/* eslint-disable react/prop-types */
import {
  FaPlay,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const TrendingMovieCard = ({ movie, handleScroll }) => {
  console.log(movie)
  return (
    <div className=" relative w-[70rem]  text-[#e2e2e2]  ">
      <button className=" absolute top-4 left-5 px-4 py-1 rounded-2xl bg-slate-200/20">
        Now Trending 🔥
      </button>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="w-full object-cover rounded-3xl h-[30rem]"
        alt=""
      />

      <div className="absolute bottom-0 w-full p-4 flex items-end justify-between">
        <div>
          <div className="flex gap-2 items-center">
            {/* {movie.genres.map((genre, index) => (
              <span
                key={index}
                className="text-xs bg-slate-200/20 px-2 py-1 rounded-2xl"
              >
                {genre}
              </span>
            ))} */}
          </div>
          <div className="mt-2 flex flex-col items-start gap-3">
            <h2 className="text-3xl font-bold mt-2">{movie.title}</h2>
            <p className="text-sm w-[50%]">{movie.overview}</p>
          </div>

          <div className="mt-4 flex gap-4 items-center *:rounded-2xl *:py-1 *:px-3 ">
            <button className="bg-white  text-black flex items-center gap-2 ">
              <FaPlay />
              Watch
            </button>
            <button className="bg-gray-500/20 flex items-center gap-2 border border-white ">
              <FaYoutube />
              Trailer
            </button>
          </div>
        </div>

        <div className="flex  items-center gap-3 *:bg-slate-300/40 *:rounded-full *:p-5  *:justify-between">
          <button onClick={() => handleScroll("left")}>
            <FaChevronLeft />
          </button>
          <button onClick={() => handleScroll("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;