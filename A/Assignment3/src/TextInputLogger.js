import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function TextInputLogger() {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleChange = (event) => {
    console.log("Event Type:", event.type);
    console.log("Current Value:", event.currentTarget.value);
    setInputValue(event.target.value);
  };

  const styles = {
    backgroundColor: theme.background,
    color: theme.text,
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h2>Text Input Logger (Functional Component)</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px", marginTop: "10px" }}
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default TextInputLogger;
