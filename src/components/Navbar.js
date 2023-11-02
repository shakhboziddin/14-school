import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to={"/"} className="logo">
          School-14
        </Link>
      </div>

      <div className="nav_items">
        <Link to={"/"} className="item">
          Home
        </Link>
        <Link to={"/about"} className="item">
          About
        </Link>
        <Link to={"/contact"} className="item">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
