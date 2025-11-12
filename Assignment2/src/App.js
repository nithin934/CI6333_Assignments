import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";

function App() {
  const [view, setView] = useState("fetch"); // "fetch" or "game"

  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleFetch = async () => {
    if (!userId) {
      setError("Please enter a user ID");
      return;
    }

    setError("");
    setUser(null);
    setNotFound(false);
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) throw new Error("Network error");

      const data = await response.json();
      if (!data.id) setNotFound(true);
      else setUser(data);
    } catch (err) {
      setError("Error fetching user data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Assignment 2 – React Hooks & Events</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("fetch")}>User Fetcher</button>
        <button onClick={() => setView("game")} style={{ marginLeft: "10px" }}>
          Tic-Tac-Toe Game
        </button>
      </div>

      {view === "fetch" ? (
        <div>
          <h2>User Data Fetcher</h2>
          <input
            type="number"
            placeholder="Enter user ID (1–10)"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={handleFetch}>Fetch User</button>

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {notFound && <p>User not found</p>}

          {user && (
            <div className="user-card">
              <h2>{user.name}</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
            </div>
          )}
        </div>
      ) : (
        <TicTacToe />
      )}
    </div>
  );
}

export default App;
