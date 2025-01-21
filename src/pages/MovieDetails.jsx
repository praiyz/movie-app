import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../services/omdbApi";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      try {
        const response = await axios.get(url, options);
setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);
  return (
    <div className="flex flex-col h-full items-center mt-10">
      <img
        src={`https://api.themoviedb.org/3/movie/${id}?language=en-US`}
        alt=""
      />
      <h1 className="text2xl font-semibold">{movie?.title}</h1>
    </div>
  );
};

export default MovieDetails;