import { useEffect } from "react";
import { useState } from "react";
import { fetchAllMovies } from "../services/omdbApi";
import TrendingMovieCard from "../components/TrendingMovieCard";

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
      setTrendingMovies(data.Search.slice(0, 3));
      console.log(trendingMovies);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex gap-3 flex-col">
        {" "}
        {trendingMovies?.map((movie) => (
          <TrendingMovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
