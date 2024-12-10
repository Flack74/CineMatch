import React from "react";

const HeroSection = ({ currentItem }) => {
  
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <img
        src={currentItem.poster}
        alt={`${currentItem.title} Poster`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1f] via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 space-y-4">
        <h1 className="text-5xl font-bold text-white">{currentItem.title}</h1>
        <p className="text-sm text-white/80">
          {currentItem.duration} · {currentItem.year} · {currentItem.genres}
        </p>
        <p className="max-w-2xl text-white/70">{currentItem.description}</p>
        <div className="flex space-x-4">
          <button className="mt-6 bg-[#A8FE39] text-[#000000] px-6 py-3 rounded-lg text-xl hover:bg-[#EDFF08] hover:shadow-lg hover:shadow-[#EDFF08] transition-all duration-300">
            Watch Now
          </button>
          <button className="mt-6 px-4 py-2 bg-transparent border border-gray-400 text-gray-400 rounded hover:border-[#A8FE39] hover:text-[#A8FE39]">
            Add Watchlist
          </button>
          <button className="mt-6 px-4 py-2 bg-transparent border border-gray-400 text-gray-400 rounded hover:border-[#A8FE39] hover:text-[#A8FE39]">
            Detaild
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
