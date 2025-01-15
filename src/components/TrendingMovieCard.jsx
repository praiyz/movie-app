const TrendingMovieCard = ({ movie }) => {
    console.log(movie);
  return (
    <div className="bg-red-600 w-[65rem] text-[#e2e2e2] rounded-xl p-5 ">
      <img
        className="w-full object-cover h-[35rem]"
        src={movie.Poster}
        alt=""
      />
      {movie?.Title}
    </div>
  );
};

export default TrendingMovieCard;
