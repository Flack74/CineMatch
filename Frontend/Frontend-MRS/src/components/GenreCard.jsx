import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Trending", icon: "bi-fire" },
  { name: "Action", icon: "bi-lightning" },
  { name: "Romance", icon: "bi-heart" },
  { name: "Animation", icon: "bi-film" },
  { name: "Horror", icon: "bi-skull" },
  { name: "Special", icon: "bi-gem" },
  { name: "Drama", icon: "bi-moon" },
];

const GenreCard = () => {
  return (
    <div className="flex space-x-2 overflow-x-auto py-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/category/${category.name.toLowerCase()}`} // Navigate to the category page
          className="flex items-center space-x-1 whitespace-nowrap text-white bg-gradient-to-t from-blue-500 via-transparent to-red-500 h-24 p-2 rounded"
        >
          <i className={`bi ${category.icon} h-5 w-5 text-[#9A6AFF]`} />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default GenreCard;
