import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  return (
    <>
      
    <div className="flex h-screen ">
      {/* Sidebar */}
      <aside className="w-64 bg-[#9A6AFF] bg-gradient-to-r from-[#171120] to-[#8BBAE9] to-[#9A6AFF] h-full p-6 flex flex-col statik">
        <h1 className="text-2xl font-bold text-white mb-8">Tasteful Picks</h1>
        <div className="space-y-6 flex-1">
          {/* Menu Section */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-white/50 px-4">Menu</h2>
            <nav className="space-y-1">
              <Link
                to="/"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/" ? "bg-white/10" : "hover:bg-white/10"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <i className="bi bi-house-door-fill mr-3"></i>
                Home
              </Link>
              <Link
                to="/movies"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/movies"
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <i className="bi bi-play-circle-fill mr-3"></i>
                Movies
              </Link>
              <Link
                to="/genres"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/genres"
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <i className="bi bi-grid-fill mr-3"></i>
                Genres
              </Link>
            </nav>
          </div>

          {/* Library Section */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-white/50 px-4">Library</h2>
            <nav className="space-y-1">
              <Link
                to="/playlists"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/playlists"
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <i className="bi bi-heart-fill mr-3"></i>
                Playlists
              </Link>
              <Link
                to="/watchlist"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/watchlist"
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <i className="bi bi-list-check mr-3"></i>
                Watchlist
              </Link>
            </nav>
          </div>

          {/* General Section */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-white/50 px-4">General</h2>
            <nav className="space-y-1">
              <Link
                to="/settings"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/settings"
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                } rounded-lg`}
              >
                <i className="bi bi-gear-fill mr-3"></i>
                Settings
              </Link>
              <Link
                to="/profile"
                className={`flex items-center px-4 py-2 text-white ${
                  location.pathname === "/profile"
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                } rounded-lg`}
              >
                <i className="bi bi-person-fill mr-3"></i>
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </div>

    </>
  );
};

export default Sidebar;
