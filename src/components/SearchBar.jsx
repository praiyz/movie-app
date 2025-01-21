import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    if (searchTerm === "") {
      setSearchResults([]);
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apiKey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${searchTerm}`
      );
      setSearchResults(response.data.Search);
    } catch {
      setLoading(false);
    }
  };
  const handleChange =(e) =>{
    setSearchTerm(e.target.value);
  };
  useEffect(()=>{
    handleSearch();
  }, [searchTerm]);
  return (
    <div className="relative">
      <input
      onChange={handleChange}
        type="text"
        placeholder="Search for movies..."
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="absolute right-3 top-2">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {loading && (
        <div className="bg-slate-300  text-black p-3">
          {searchResults?.map((movie) => (
            <Link onClick={() =>setSearchResults([])} to={`/movie/${movie.imdbID} `} key={movie.imdbID} className="flex gap-4 items-center">
              <img src={movie.Poster} className="h-14 obeject-cover" alt="h-10" />
              <div className="flex items-center">
                <h2>{movie.Title}</h2>
                <h2>{movie.Year}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
