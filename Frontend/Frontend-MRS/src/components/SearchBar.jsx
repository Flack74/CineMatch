import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  const handleSearch = () => {
    if (query.trim() === "") return;  // Prevent search on empty query
    setIsLoading(true);
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <>
      {/* <div className="my-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded-md w-2/3"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div> */}

      {/* <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-[#E3E3E3] text-[#1E2029] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9A6AFF]"
        />
        <i className="bi bi-search absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1E2029]/50" onClick={handleSearch}></i>
      </div> */}


      <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}  // Allow Enter to trigger search
        className="w-full bg-[#E3E3E3] text-[#1E2029] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9A6AFF]"
        aria-label="Search for movies"
      />
      <button
        onClick={handleSearch}
        disabled={isLoading || query.trim() === ""}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1E2029] bg-transparent border-none focus:outline-none cursor-pointer "
        aria-label="Search"
      >
        {isLoading ? (
          <i className="bi bi-circle-fill animate-spin text-[#9A6AFF]"></i>  // Loading spinner
        ) : (
          <i className="bi bi-search text-[#1E2029]"></i>
        )}
      </button>
    </div>
    </>
  );
};

export default SearchBar;
