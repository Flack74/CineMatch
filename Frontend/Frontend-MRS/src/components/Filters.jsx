import React from "react";

const Filters = ({ filters, setFilters, hideYearFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex gap-4 mb-6">
      {/* Genre Filter */}
      <select
        name="genre"
        value={filters.genre}
        onChange={handleChange}
        className="p-2 rounded bg-gray-800 text-white"
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Suspense">Suspense</option>
        <option value="Serious">Serious</option>
        <option value="Exciting">Exciting</option>
      </select>

      {/* Year Filter */}
      <select
        name="year"
        value={filters.year}
        onChange={handleChange}
        className="p-2 rounded bg-gray-800 text-white"
      >
        <option value="">All Years</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>

      {/* Rating Filter */}
      <div className="flex items-center">
        <input
          type="range"
          name="rating"
          min="0"
          max="10"
          step="0.1"
          value={filters.rating}
          onChange={handleChange}
          className="w-40"
        />
        <span className="ml-2 text-white">Rating: {filters.rating}</span>
      </div>
    </div>
  );
};

export default Filters;
