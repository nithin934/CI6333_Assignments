import React, { createContext, useState } from "react";

// Create the Theme Context
export const ThemeContext = createContext();

// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: "#ffffff",
    text: "#000000",
    mode: "light",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === "light"
        ? { background: "#121212", text: "#ffffff", mode: "dark" }
        : { background: "#ffffff", text: "#000000", mode: "light" }
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
