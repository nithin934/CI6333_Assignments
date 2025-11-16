// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      <NavLink to="/feedback" className="nav-link">Feedback</NavLink>

      {/* Account Dropdown style */}
      <NavLink to="/account/profile" className="nav-link">Account → Profile</NavLink>
      <NavLink to="/account/settings" className="nav-link">Account → Settings</NavLink>
    </nav>
  );
}

export default Navbar;

