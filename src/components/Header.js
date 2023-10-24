import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-2">
          <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer" />
            )}
          </div>
          <h1 className="text-lg">PORTFOLIO</h1>
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
          <a
            href="/Taylor Murdock's Resume.pdf"
            target="_blank"
            className="text-gray-900 dark:text-white"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
