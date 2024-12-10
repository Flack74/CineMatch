import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Filters from "../components/Filters";

import img1 from "../images/img1.jpeg";
import img2 from "../images/imag2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpeg";
import T1 from "../images/t1.webp";
import T2 from "../images/t2.webp";

const MoviesList = () => {
  const { category } = useParams(); // Get category from URL params
  const [filters, setFilters] = useState({
    genre: "",
    year: "",
    rating: 0,
  });

  // Movies Data
  const movies = [
    {
      id: "1",
      title: "Drishyam 2 (Hindi)",
      description:
        "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
      metadata: {
        imdb: "1.2",
        duration: "2 h 15 min",
        year: "2022",
        quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
        genres: ["Suspense", "Drama", "Exciting", "Serious"],
      },
      poster: T1,
    },
    {
      id: "2",
      title: "Drishyam 2 (Hindi)",
      description:
        "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
      metadata: {
        imdb: "8.2",
        duration: "2 h 15 min",
        year: "2023",
        quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
        genres: ["Suspense", "Drama", "Exciting", "Serious"],
      },
      poster: img1,
    },
    {
      id: "3",
      title: "Drishyam 2 (Hindi)",
      description:
        "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
      metadata: {
        imdb: "8.2",
        duration: "2 h 15 min",
        year: "2024",
        quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
        genres: ["Suspense", "Drama", "Exciting", "Serious"],
      },
      poster: T2,
    },
    {
      id: "4",
      title: "Drishyam 2 (Hindi)",
      description:
        "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
      metadata: {
        imdb: "8.2",
        duration: "2 h 15 min",
        year: "2022",
        quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
        genres: ["Suspense", "Drama", "Exciting", "Serious"],
      },
      poster: img2,
    },
    {
      id: "5",
      title: "Drishyam 2 (Hindi)",
      description:
        "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
      metadata: {
        imdb: "8.2",
        duration: "2 h 15 min",
        year: "2022",
        quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
        genres: ["Suspense", "Drama", "Exciting", "Serious"],
      },
      poster: img4,
    },
    
    
  ];

  // Filter movies dynamically based on `category`
  let filteredMovies = movies;
  if (category === "latest") {
    filteredMovies = filteredMovies.filter((movie) => parseInt(movie.metadata.year) >= 2023);
  } else if (category === "top-rated") {
    filteredMovies = filteredMovies.filter((movie) => parseInt(movie.metadata.year) >= 4.5);
  }

  // Further filter movies based on user-selected filters
  filteredMovies = filteredMovies.filter((movie) => {
    const matchesGenre = !filters.genre || movie.metadata.genres.includes(filters.genre);
    const matchesYear = !filters.year || parseInt(movie.metadata.year) === parseInt(filters.year, 10);
    const matchesRating = parseFloat(movie.metadata.imdb) >= filters.rating;
    return matchesGenre && matchesYear && matchesRating;
  });

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-white capitalize mb-4">
      {category ? category.replace("-", " ") : "Movies"}
      </h1>

      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters}/>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="text-white">
            No movies found in this category or with selected filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
