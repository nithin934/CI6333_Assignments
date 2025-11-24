import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import Todo from "./pages/Todo";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, background: "#eee" }}>
        <Link to="/cart" style={{ marginRight: 20 }}>Shopping Cart</Link>
        <Link to="/todo">To-Do App</Link>
      </nav>

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
