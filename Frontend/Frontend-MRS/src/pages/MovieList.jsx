import React from 'react';
import MovieCard from '../components/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
