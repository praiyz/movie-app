import { useEffect, useState } from "react";
import TrendingMovieCard from "../components/TrendingMovieCard";
import { trendingMoviesData } from "../data/data";
import { fetchAllMovies } from "../services/omdbApi";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchAllMovies();
      setMovies(movies.Search);
      console.log(movies);
    };

    fetchMovies();

    setTrendingMovies(trendingMoviesData);
  }, []);

  const handleScroll = (direction) => {
    const container = document.querySelector(".overflow-x-hidden");
    const scrollAmount = container.clientWidth;

    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden ml-48 mt-20">
      <div
        className="w-full overflow-x-hidden scroll-smooth mt-5 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex justify-around w-fit gap-20 px-10"
          onWheel={(e) => e.preventDefault()}
          onScroll={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {trendingMovies?.map((movie) => (
            <TrendingMovieCard
              key={movie.title}
              movie={movie}
              handleScroll={handleScroll}
            />
          ))}
        </div>
      </div>
      <div className="px-8 mt-8">
        <h2>Trending</h2>
        <div className="grid grid-cols-4 mt-8 gap-4 place-items-center">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="flex flex-col gap-4">
              <img src={movie.Poster} className="h-80 object-contain" alt="" />
              {/* Had issues trying to render the movie title, was adding the movie. Title as a key inside the opening p tag,
               when the container div has already accessed movie.imdbID requiring me to only target what I need to render.*/}
              <p className="text-sm font-bold text-white">{movie.Title}</p>
              <div className="flex justify-between">
                <p className="text-[white]">{movie.Year}</p>
                <p className="text-[white] flex items-center justify-center text-bold px-2 rounded-lg font-semibold">
                  {movie.Type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
