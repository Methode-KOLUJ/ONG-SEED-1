import React, { useContext, useRef } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import Draggable from "react-draggable";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Création d'une ref pour le bouton
  const buttonRef = useRef(null);

  return (
    <Draggable bounds="parent" nodeRef={buttonRef}>
      <button
        ref={buttonRef} // Associe la ref au bouton
        onClick={toggleTheme}
        className="p-4 bg-gray-200 dark:bg-gray-950 text-black dark:text-white rounded-full shadow-lg flex items-center justify-center fixed bottom-4 right-4 z-50"
        aria-label="Toggle theme"
        style={{
          touchAction: "none", 
        }}
      >
        {theme === "light" ? (
          <FaMoon className="w-6 h-6" />
        ) : (
          <FaSun className="w-6 h-6 text-orange-400" />
        )}
      </button>
    </Draggable>
  );
};

export default ThemeSwitcher;
