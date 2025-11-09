import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <p>
        The entire app background and text color are controlled by a shared
        context using <strong>useContext</strong> and{" "}
        <strong>ThemeContext.Provider</strong>.
      </p>
    </div>
  );
};

export default Content;
