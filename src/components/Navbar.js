import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(true);

  const check = () => {
    setNav(false);
    console.log();
  };
  const check2 = () => {
    setNav(true);
  };
  return (
    <div className="nav_main">
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
        <div className="bars">
          <div
            className="bar"
            onClick={check}
            style={{ display: nav ? "block" : "none" }}
          >
            &#x2630;
          </div>
          <div
            className="bar2"
            onClick={check2}
            style={{ display: nav ? "none" : "block" }}
          >
            &#x2716;
          </div>
        </div>
      </div>
      <div
        className="parent"
        style={{
          transform: nav ? "translateX(-1200px)" : "translateX(0px)",
        }}
      >
        <div className="mobile_div">
          <Link className="link_mob" to={"/"}>
            Home
          </Link>
          <Link className="link_mob" to={"/about"}>
            About
          </Link>
          <Link className="link_mob" to={"/contact"}>
            Contact
          </Link>

          <div className="icons_mob"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
