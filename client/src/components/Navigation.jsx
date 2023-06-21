import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/insert-book">Add&nbsp;Book</NavLink>
      </nav>
    </div>
  );
}
