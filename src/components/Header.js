import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      style={{
        position: "fixed", // Set the header's position to fixed
        width: "100%", // Make it full width
        top: 0, // Position it at the top of the screen
        zIndex: 1000, // Set a high z-index to ensure it's above other content
      }}
    >
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg">PORTFOLIO</h1>

        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>

        <div className="space-x-4">
          <a href="#skills" className="text-gray-900 dark:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-900 dark:text-white">
            Projects
          </a>
          <a href="#contact" className="text-gray-900 dark:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
