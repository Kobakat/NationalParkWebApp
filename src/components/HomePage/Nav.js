import React from "react";
import ParkwayLogo from "../HomePage/ParkwayLogo.svg";
import "./nav.css";

function Nav() {
  return (
    // Navigation Menu
    <nav>
      <ul className="nav-bar">
        <div className="links-container">
          <li className="logo">
            <a href="">
              <img src={ParkwayLogo} alt="Logo" />
            </a>
          </li>
          <li className="nav-links">
            <a href="">About</a>
          </li>
          <li className="nav-links">
            <a href="">Parks</a>
          </li>
          <li className="nav-links">
            <a href="">Log in</a>
          </li>
          <li className="nav-links">
            <a className="btn-cta" href="">
              Sign up
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
