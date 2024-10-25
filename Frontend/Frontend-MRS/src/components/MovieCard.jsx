import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover rounded-md"/>
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p>{movie.overview}</p>
      <Link to={`/movies/${movie.id}`} className="text-blue-500 mt-2 inline-block">Read more</Link>
    </div>
  );
};

export default MovieCard;
