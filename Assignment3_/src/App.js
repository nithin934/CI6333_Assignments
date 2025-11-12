import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import Content from "./Content";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        <Navbar />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

