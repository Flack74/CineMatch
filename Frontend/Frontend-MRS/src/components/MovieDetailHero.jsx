import React from "react";

import T2 from "../images/t2.webp";

const MovieDetailHero = ({ title, description, metadata, poster }) => {
  return (
    <>
      <div className="relative min-h-[80vh] bg-gradient-to-r from-black to-transparent">
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%), url(${poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="relative z-10 px-8 pt-20">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-5xl font-bold text-white">{title}</h1>
            <p className="mb-6 text-lg text-gray-300">{description}</p>

            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span>IMDb {metadata.imdb}</span>
              <span>{metadata.duration}</span>
              <span>{metadata.year}</span>
              {metadata.quality.map((q, index) => (
                <span key={index} className="bg-gray-800 px-2 py-1 rounded-md">
                  {q}
                </span>
              ))}
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {metadata.genres.map((genre, index) => (
                <span
                  key={index}
                  className="text-sm text-blue-400 hover:underline"
                >
                  {genre}
                  {index < metadata.genres.length - 1 && (
                    <span className="mx-2 text-gray-500">•</span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">
                Watch with Prime
              </button>
              <button className="border px-6 py-2 rounded border-gray-400 hover:bg-gray-200">
                Rent UHD ₹99
              </button>
              <button className="border px-6 py-2 rounded border-gray-400 hover:bg-gray-200">
                More purchase options
              </button>
            </div>

            <div className="mt-6 flex gap-4">
              {[
                "play-circle",
                "plus-circle",
                "hand-thumbs-up",
                "hand-thumbs-down",
                "share",
              ].map((icon, index) => (
                <button
                  key={index}
                  className="rounded-full p-2 text-white hover:bg-gray-800"
                >
                  <i className={`bi bi-${icon} h-6 w-6`}></i>
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
              <i className="bi bi-award h-4 w-4 text-yellow-400"></i>
              Watch with a Prime membership
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Rentals include 30 days to start watching this video and 48 hours
              to finish once started.
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[50vh] md:min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${poster})`,
              backgroundBlendMode: "multiply",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[inherit] flex-col justify-end p-4 md:p-8">
          <div className="max-w-3xl">
            {/* Prime Logo */}
            <div className="mb-4">
              <svg
                className="h-8 w-24 text-[#00A8E1]"
                viewBox="0 0 92 32"
                fill="currentColor"
              >
                <path d="M0 0h92v32H0z" fill="none" />
                <path d="M66.8 16.4c0 2.8 0.1 5.2 2 7.1 0.2 0.2 0.2 0.4 0.1 0.6 -0.2 0.2-0.4 0.1-0.6 0C65.9 22.7 65.8 20 65.8 17c0-3 0.1-5.7 2.5-8 0.2-0.2 0.4-0.2 0.6 0 0.2 0.2 0.1 0.4 0 0.6C67 11.3 66.8 13.7 66.8 16.4zM46 24.1c-2.3 0-4.5-0.9-6.1-2.5 -0.2-0.2-0.2-0.4 0-0.6 0.2-0.2 0.4-0.2 0.6 0 1.5 1.5 3.5 2.3 5.6 2.3 2.1 0 4-0.8 5.6-2.3 0.2-0.2 0.4-0.2 0.6 0 0.2 0.2 0.2 0.4 0 0.6C50.5 23.2 48.3 24.1 46 24.1z" />
              </svg>
            </div>

            {/* Title and Ranking */}
            <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {metadata.ranking && (
              <div className="mb-4 text-[#1A98FF]">
                #{metadata.ranking} in India
              </div>
            )}

            {/* Description */}
            <p className="mb-6 text-base text-gray-300 md:text-lg">
              {description}
            </p>

            {/* Metadata */}

            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300">
              <span>IMDb {metadata.imdb}</span>
              <span className="text-gray-500">•</span>
              <span>{metadata.duration}</span>
              <span className="text-gray-500">•</span>
              <span>{metadata.year}</span>
              <div className="flex flex-wrap gap-2">
                {metadata.quality.map((q, index) => (
                  <span key={index} variant="secondary" className="bg-gray-800">
                    {q}
                  </span>
                ))}
              </div>
            </div>
            {/* Genres */}
            <div className="mb-8 flex flex-wrap gap-2">
              {metadata.genres.map((genre, index) => (
                <span
                  key={genre}
                  className="text-sm text-blue-400 hover:underline"
                >
                  {genre}
                  {index < metadata.genres.length - 1 && (
                    <span className="mx-2 text-gray-500">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Watch Options */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                Watch with Prime
              </button>
              <button size="lg" variant="outline">
                Rent UHD ₹99
              </button>
              <button size="lg" variant="outline">
                More purchase options
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              {[
                "play-circle",
                "plus-circle",
                "hand-thumbs-up",
                "hand-thumbs-down",
                "share",
              ].map((icon, index) => (
                <button key={index} variant="ghost" className="rounded-full">
                  <i className={`bi bi-${icon} h-6 w-6`}></i>
                </button>
              ))}
            </div>

            {/* Prime Badge */}
            <div className="mt-8 flex items-center gap-2">
              <i className="bi bi-award h-4 w-4 text-yellow-400"></i>
              <span className="text-sm text-white">
                Watch with a Prime membership
              </span>
            </div>

            {/* Rental Info */}
            <p className="mt-4 text-sm text-gray-400">
              Rentals include 30 days to start watching this video and 48 hours
              to finish once started.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailHero;
