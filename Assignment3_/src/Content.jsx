import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import Count from "./Count";
import TodoList from "./TodoList";
import UseMemo from "./UseMemo";
import ChatWindow from "./ChatWindow";
import LoginForm from "./LoginForm";
import ParentComponent from "./ParentComponent";
import SearchApp from "./SearchApp";
import NameSaver from "./NameSaver";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const contentStyle = {
    padding: "40px",
    textAlign: "center",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    transition: "all 0.3s ease",
  };

  // ✅ Temporary example messages for ChatWindow
  const messages = ["Hi there!", "Welcome to the chat!", "This is a demo."];

  return (
    <div style={contentStyle}>
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <p>
        The entire app background and text color are controlled by a shared
        context using <strong>useContext</strong> and{" "}
        <strong>ThemeContext.Provider</strong>.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>🔹 React Hooks & Event Examples</h2>

      <div style={{ marginTop: "20px" }}>
        <Count />
        <TodoList />
        <UseMemo />
        {/* Removed <UseLocalStorage /> ✅ */}
        <ChatWindow messages={messages} /> {/* ✅ Pass messages properly */}
        <LoginForm />
        <ParentComponent />
        <SearchApp />
        <NameSaver />
      </div>
    </div>
  );
};

export default Content;
