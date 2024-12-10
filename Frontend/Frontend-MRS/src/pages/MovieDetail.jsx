import React from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MovieDetailHero from "../components/MovieDetailHero";
import RelatedMovies from "../components/RelatedMovies";

// import img1 from "../images/img5.jpeg";
// import T1 from "../images/t1.webp";
// import T2 from "../images/t2.webp";
// import T3 from "../images/img1.jpeg";
// import T4 from "../images/imag2.jpeg";

// const movies = [
//   {
//     id: "1",
//     title: "Drishyam 2 (Hindi)",
//     description:
//          "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
//     metadata: {
//       imdb: "8.2",
//       duration: "2 h 15 min",
//       year: "2022",
//       quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
//       genres: ["Suspense", "Drama", "Exciting", "Serious"],
//     },
//     poster: T3,
//   },
//   {
//     id: "2",
//     title: "Drishyam 2 ",
//     description:
//          "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars.",
//     metadata: {
//       imdb: "8.2",
//       duration: "2 h 15 min",
//       year: "2022",
//       quality: ["X-RAY", "UHD", "U/A 13+", "HD"],
//       genres: ["Suspense", "Drama", "Exciting", "Serious"],
//     },
//     poster: T2,
//   },
//   // Add more movies here
// ];

export default function MovieDetail() {

    const location = useLocation();
  const { movie } = location.state || {}; // Get movie data passed via state

  if (!movie) {
    return <div className="text-white">Movie not found.</div>;
  }

  const relatedMovies = [
    {
      id: "1",
      title: "Drishyam",
      image: "https://images2.alphacoders.com/105/1051797.jpg",
      year: 2023,
      duration: "2 h 30 min",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    },
    {
      id: "2",
      title: "Fighter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcC5aYEkKhsU_rtSxa-BcWH52RVGZixItJ5jaoQO2U_LNNY4TrVeU5qnGj1ALeOTrWc5Y&usqp=CAU",
      year: 2023,
      duration: "2 h 30 min",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
      isNew: true,
    },
    // {
    //   id: "3",
    //   title: "Stree",
    //   image: img1,
    //   year: 2023,
    //   duration: "2 h 30 min",
    //   rating: 4.5,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    // },
    // {
    //   id: "4",
    //   title: "Runway 34",
    //   image: T1,
    //   year: 2023,
    //   duration: "2 h 30 min",
    //   rating: 4.5,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    // },
    // {
    //   id: "5",
    //   title: "Mardaani",
    //   image: T2,
    //   year: 2023,
    //   duration: "2 h 30 min",
    //   rating: 4.5,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    // },
    {
      id: 6,
      title: "Loathing Kasatang",
      image: "https://images2.alphacoders.com/105/1051797.jpg",
      year: 2023,
      duration: "2 h 30 min",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    },
    {
      id: 7,
      title: "Gajah Langka",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcC5aYEkKhsU_rtSxa-BcWH52RVGZixItJ5jaoQO2U_LNNY4TrVeU5qnGj1ALeOTrWc5Y&usqp=CAU",
      year: 2023,
      duration: "2 h 30 min",
      rating: 4.2,
      isNew: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    },
    // {
    //   id: 8,
    //   title: "Si Kung Saray",
    //   image: img1,
    //   year: 2022,
    //   duration: "2 h 30 min",
    //   rating: 4.7,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    // },
    // {
    //   id: 9,
    //   title: "Mommy Cat",
    //   image: img1,
    //   year: 2023,
    //   duration: "2 h 30 min",
    //   rating: 4.0,
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro suscipit aut modi aspernatur magnam temporibus ipsa pariatur cupiditate dicta distinctio?",
    // },
  ];

//   const { movieId } = useParams();
//   const movie = movies.find((m) => m.id === movieId);

//   if (!movie) {
//     return <div className="text-white">Movie not found.</div>;
//   }

  return (
    <div className="min-h-screen bg-black">
      <MovieDetailHero
        title={movie.title}
        description={movie.description}
        metadata={movie.metadata}
        poster={movie.poster}
      />
      <div className="container px-8 py-8">
        <RelatedMovies movies={relatedMovies} />
      </div>
    </div>
  );
}
