import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold mr-10">
          <Link to="/">Movie Recommender</Link>
        </h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/movies">Movies</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
