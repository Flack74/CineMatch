import React from "react";
import MovieCard from "./MovieCard";

const MovieSection = ({ title, seeMoreHref, movies }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <section className="mt-8 space-y-4 px-6">
      <div className="flex items-center ">
        <h2 className="text-2xl font-semibold text-white capitalize">{title.replace("-", " ")}</h2>
        <a
          href={`/movies/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="ml-7 text-white hover:text-gray-400 bg-transparent flex items-center transition duration-300"
          aria-label={`See more ${title}`}
        >
          See more <i className="bi bi-chevron-right ml-1 t"></i>
        </a>
      </div>
      <div className="relative">
        <div
          className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide "
          ref={scrollRef}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default MovieSection;
