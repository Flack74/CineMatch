import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the `id`
    // Update the `movie` state with the fetched data
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} className="my-4"/>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};

export default MovieDetails;
