/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <Link to={`/movie/${movie.id}`} className="flex flex-col gap-4 hover:cursor-pointer bg-slate-100/10 p-5 rounded-lg">
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="h-64 rounded-xl" alt="" />
      <div className="flex flex-col text-sm">
        <h2 className=" font-bold">{movie.Title}</h2>
        <span className="text-xs text-slate-200">{movie.vote_average} | {movie.release_date || "N/A"}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
