import React from "react";

export default function RelatedMovies({ movies }) {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <h2 className="mb-4 text-2xl font-semibold text-white">
        Customers also watched
      </h2>

      <div className="relative">
        <div
          className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide "
          ref={scrollRef}
        >
          {movies.map((movie) => (
            <div
            key={movie.id}
            className="group relative flex-none aspect-video h-[200px] w-[90vw] md:w-[356px] cursor-pointer overflow-hidden  rounded-lg"
          >
            {/* Base Image */}
            <img
              src={movie.image}
              alt={`${movie.title} Poster`}
              className="h-full w-full object-cover rounded-lg  transition-transform duration-300 group-hover:scale-105"
            />
    
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/80">
              <div className="absolute inset flex flex-col justify-between p-4 transition-transform duration-300 group-hover:translate-y-0 translate-y-[-101%]">
                {/* Top Section */}
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">{`${movie.title} Poster`}</h3>
                  <div className="mb-4 flex gap-2">
                    {/* Add to Watchlist Button */}
                    <button className="h-10 w-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center text-white hover:text-[#000000]">
                      <i className="bi bi-plus-lg text-2xl"></i>
                    </button>
    
                    {/* Play Button */}
                    <button className="h-10 w-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#000000] flex items-center justify-center">
                      <i className="bi bi-play-btn text-2xl"></i>
                    </button>
                  </div>
                </div>
    
                {/* Bottom Section */}
                <div className="space-x-1">
                  {/* Prime Membership */}
                  {/* <div className="flex items-center gap-2">
                    <i className="bi bi-award h-4 w-4 text-yellow-400"></i>
                    <span className="text-sm text-white">
                      Watch with Prime Membership
                    </span>
                  </div> */}
    
                  {/* Movie Details (Year, Duration, Rating) */}
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span>{movie.year}</span>
                    <span>{movie.duration}</span>
                    <span className="border border-gray-500 px-2 py-1 rounded-md">
                    <i className="bi bi-star h-4 w-4 text-yellow-400 mr-2"></i>{movie.rating}
                    </span>
                  </div>
    
                  {/* Movie Description */}
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {movie.description}
                  </p>
                </div>
              </div>
            </div>
            {movie.isNew && (
              <span className="absolute right-2 top-2 bg-red-600 text-white px-2 py-1 rounded">
                NEW MOVIE
              </span>
            )}
          </div>
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
    </div>
  );
}
