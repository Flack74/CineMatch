import React, { useState, useRef, useEffect } from "react";

const LanguagePopover = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    ["English", "Hindi", "Tamil", "Telugu"],
    ["French", "German", "Spanish", "Italian"],
    ["Japanese", "Korean", "Chinese", "Russian"],
    ["Arabic", "Portuguese", "Thai", "Swedish"],
  ];

  return (
    <>
    <div className="relative inline-block" ref={popoverRef}>
      {/* Trigger Button */}
      <button
        onClick={togglePopover}
        className="ml-3 text-gray-300 hover:text-white bg-[#1E2029]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1E2029]/60 px-4 py-2 rounded"
      >
        EN
      </button>

      {/* Popover Content */}
      {isPopoverOpen && (
        <div
          className="absolute z-10 mt-2 bg-zinc-900/95 p-4 text-white rounded-lg shadow-lg backdrop-blur"
          style={{
            width: "600px",
            maxWidth: "100vw", // Ensures the popover doesn't overflow horizontally
            right: 0, // Aligns the popover to the right if it's close to the edge
            left: "auto",
          }}
        >
          <div className="grid grid-cols-4 gap-y-2">
            {languages.map((row, i) => (
              <React.Fragment key={i}>
                {row.map((language) => (
                  <button
                    key={language}
                    className="w-full text-left p-2 rounded hover:bg-white/10 hover:text-white"
                  >
                    {language}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default LanguagePopover;
