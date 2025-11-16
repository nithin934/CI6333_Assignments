// Dashboard.js (Account Layout)
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Account</h1>

      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="profile" style={{ marginRight: 15 }}>Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
