import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <i className="fa-solid fa-plane" style={{ color: "#ffffff" }}></i>
        <Link to="/">
          <h1 id="logo-colour">CarbonFootprint.</h1>
        </Link>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/FlightList">
              Your Trips
            </Link>
          </li>
          <li>
            <Link className="nav-links" id="plant-a-tree" to="/about">
              Plant A Tree
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
