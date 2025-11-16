import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My React Router Demo </h1>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/product/5" style={styles.link}>
          Product #5
        </Link>
      </nav>

      <p style={styles.text}>
        Use the navigation above to explore different routes.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#007bff",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    border: "1px solid #ccc",
    padding: "6px 12px",
    borderRadius: "5px",
    background: "#f9f9f9",
    transition: "0.3s",
  },
  text: {
    color: "#555",
  },
};

export default Home;

