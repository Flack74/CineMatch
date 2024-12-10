import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import GenreCard from "../components/GenreCard";

import img1 from "../images/img1.jpeg";
import img2 from "../images/imag2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpeg";
import T1 from "../images/t1.webp";
import T2 from "../images/t2.webp";
import HeroSection from "../components/HeroSection";
import MovieSection from "../components/MovieSection";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "JOKER 2",
      description:
        "Failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while in Arkham State Hospital. Upon release, the pair embark on a doomed romantic misadventure.",
      duration: "2h 18m",
      year: 2024,
      genres: "Crime, Drama, Musical, Thriller",
      poster: "https://images4.alphacoders.com/133/1336451.jpg",
    },
    {
      id: 2,
      title: "Dune: Part Two",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      duration: "2h 35m",
      rating: 8.9,
      year: 2024,
      genres: "Adventure, Sci-Fi, Drama",
      poster: "https://images8.alphacoders.com/135/1355094.jpeg",
    },
    {
      id: 3,
      title: "The Beekeeper",
      rating: 7.3,
      releaseDate: "2024-01-12",
      poster:
        "https://w0.peakpx.com/wallpaper/159/758/HD-wallpaper-the-beekeeper-movie-2024-the-beekeeper-movies-2024-movies-amazon-prime-video-jason-statham.jpg",
      genre: ["Action", "Thriller"],
      description: "An action-packed thriller with a mysterious beekeeper.",
    },
    {
      id: 4,
      title: "Lift",
      rating: 6.9,
      releaseDate: "2024-01-12",
      poster:
        "https://www.acmodasi.in/amdb/images/movie/s/t/lift-2024-161363.jpg",
      genre: ["Action", "Heist"],
      description: "A heist movie involving a mid-air robbery.",
    },
    {
      id: 5,
      title: "Madame Web",
      rating: 6.5,
      releaseDate: "2024-02-14",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6y7uzLZMeWA5ez4a--PzPA2DZKfMwqpIqg&s",
      genre: ["Action", "Superhero"],
      description: "A Marvel superhero story focusing on psychic abilities.",
    },
    {
      id: 6,
      title: "Kung Fu Panda 4",
      rating: 7.4,
      releaseDate: "2024-03-08",
      poster:
        "https://hd.wallpaperswide.com/thumbs/kung_fu_panda_4_2024_movie-t2.jpg",
      genre: ["Animation", "Action"],
      description:
        "Po returns for another martial arts adventure with his friends.",
    },
    {
      id: 7,
      title: "Ghostbusters: Frozen Empire",
      rating: 7.0,
      releaseDate: "2024-03-22",
      poster: "https://4kwallpapers.com/images/walls/thumbs/16295.jpg",
      genre: ["Comedy", "Action", "Sci-Fi"],
      description:
        "A new Ghostbusters film featuring the team battling supernatural forces.",
    },
    {
      id: 8,
      title: "Rebel Moon: Part Two – The Scargiver",
      rating: 8.2,
      releaseDate: "2024-04-19",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TksBgrESUbF6EILS-1TJfc5rAK91HXLZMg&s",
      genre: ["Sci-Fi", "Action"],
      description:
        "Zack Snyder’s epic space opera continues with more thrilling battles.",
    },
    {
      id: 9,
      title: "Godzilla x Kong: The New Empire",
      rating: 7.6,
      releaseDate: "2024-04-12",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3_M0RkWedZN20Poc35MZhJELsFZhfUVudg&s",
      genre: ["Action", "Sci-Fi"],
      description:
        "The iconic monsters return for another clash in a massive battle for supremacy.",
    },
    {
      id: 10,
      title: "Furiosa",
      rating: 8.1,
      releaseDate: "2024-05-24",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbswUuYNFu8Cd2h9ParN2t7tnC8NRSGvgM9g&s",
      genre: ["Action", "Adventure"],
      description:
        "The prequel to *Mad Max: Fury Road* starring a young Furiosa.",
    },
    {
      id: 11,
      title: "Kingdom of the Planet of the Apes",
      rating: 8.0,
      releaseDate: "2024-05-24",
      poster: "https://images4.alphacoders.com/136/1360806.jpeg",
      genre: ["Action", "Sci-Fi"],
      description: "The next chapter in the *Planet of the Apes* saga.",
    },
    {
      id: 12,
      title: "Inside Out 2",
      rating: 8.4,
      releaseDate: "2024-06-14",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYVXacYvo3E8JuIU_8UjUzBI7oOT5Yf0n9g&s",
      genre: ["Animation", "Family"],
      description: "A sequel to the emotional journey inside Riley’s mind.",
    },
    {
      id: 13,
      title: "A Quiet Place: Day One",
      rating: 7.7,
      releaseDate: "2024-06-28",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchMeZbAJTx8NE010rIzD-z4xlT9nxTewI-w&s",
      genre: ["Horror", "Thriller"],
      description: "A prequel to the suspenseful *A Quiet Place* series.",
    },
  ];

  const moviesData = [
    {
      id: "1",
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
        year: "2022",
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

  const sections = [
    {
      title: "Trending Movies",
      seeMoreHref: "/movies/trending-Movies",
      movies: moviesData,
    },
    {
      title: "English Movies",
      seeMoreHref: "/movies/english",
      movies: moviesData,
    },
    { title: "Top-Rated Movies", seeMoreHref: "/movies/top", movies: moviesData },
    {
      title: "Mystery and Thriller Movies",
      seeMoreHref: "/movies/thriller",
      movies: moviesData,
    },
    { title: "Hindi Movies", seeMoreHref: "/movies/english", movies: moviesData },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[currentItemIndex];

  const categories = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
  ];

  return (
    <main className="flex-1 p-6 bg-gradient-to-b from-[#171120] to-[#8BBAE9]  text-white overflow-y-auto">
      <HeroSection currentItem={items[currentItemIndex]} />
      <h1 className="mt-8 text-4xl font-bold text-white">Movies</h1>
      <div className="container px-2 py-2">
        {sections.map((section, index) => (
          <MovieSection
            key={index}
            title={section.title}
            seeMoreHref={section.seeMoreHref}
            movies={section.movies}
          />
        ))}
      </div>

      <GenreCard />

      <div className=" ">
        <main className="container px-4 py-8">
          {/* <GenreCard /> */}
          <div className="mb-4">
            <h2 className="mb-4 text-xl font-semibold">
              Trending in Animation
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {moviesData.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Home;
