import { useEffect } from "react";
import { useState } from "react";
import { fetchAllMovies } from "../services/omdbApi";
import TrendingMovieCard from "../components/TrendingMovieCard";
import { trendingMoviesData } from "../data/data";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllMovies();
      console.log(data.Search);

      setMovies(data.Search);
      setMovies(data);
     
    };
    fetchData();
    setTrendingMovies(trendingMoviesData)
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-scroll mx-5 w-full">
        <div className="flex w-fit gap-32">
          {" "}
          {trendingMovies?.map((movie) => (
            <TrendingMovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
