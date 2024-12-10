import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LanguagePopover from "./LanguagePopover";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <header>
      <div className="flex items-center justify-between bg-[#1E2029] p-4 relative">
        <SearchBar />

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-[#E3E3E3] p-1 text-[#1E2029] hover:text-[#9A6AFF] focus:outline-none focus:ring-2 focus:ring-[#9A6AFF] focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="View notifications"
          >
            <span className="absolute -inset-1.5" />
            <i className="bi bi-bell text-2xl" aria-hidden="true"></i>
          </button>

          <div className="relative ml-3">
            <button
              onClick={toggleMenu}
              className="relative flex items-center justify-center rounded-full bg-[#E3E3E3] text-sm focus:outline-none focus:ring-2 focus:ring-[#9A6AFF] focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Open user menu"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt="User Profile"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 rounded-full"
              />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-in-out">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header> */}

      <header>
        <div className="flex items-center justify-between bg-[#1E2029] bg-gradient-to-l from-blue-500 via-green-500 to-purple-500 p-4 relative sm:px-6 lg:px-8">
          <SearchBar />

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notifications Button */}
            <button
              type="button"
              className="relative rounded-full bg-[#1E2029] p-1 text-[#E3E3E3] hover:text-[#9A6AFF] focus:outline-none focus:ring-2 focus:ring-[#9A6AFF] focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="View notifications"
            >
              <span className="absolute -inset-1.5" />
              <i className="bi bi-bell text-2xl" aria-hidden="true"></i>
            </button>
            <div className="relative"></div>

            <LanguagePopover />
            
            {/* Profile Dropdown */}
            <div className="relative ml-3">
              <button
                onClick={toggleMenu}
                className="relative flex items-center justify-center rounded-full bg-[#E3E3E3] text-sm focus:outline-none focus:ring-2 focus:ring-[#9A6AFF] focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Open user menu"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt="User Profile"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full"
                />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-in-out">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
