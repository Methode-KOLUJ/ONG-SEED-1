import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-4 bg-gray-200 dark:bg-gray-950 text-black dark:text-white rounded-full shadow-lg flex items-center justify-center fixed bottom-2 left-1 z-50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-6 h-6" />
      ) : (
        <FaSun className="w-6 h-6 text-orange-400" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
