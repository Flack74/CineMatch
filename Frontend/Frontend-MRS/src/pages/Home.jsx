import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from './MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (query) => {
    // Fetch movie data based on query
    // Update `movies` state with the fetched results
  };

  return (
    <div className="container mx-auto my-8">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
