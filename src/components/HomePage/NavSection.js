import React from "react";
import ParkwayLogo from "../HomePage/images/ParkwayLogo.svg";
import "./section-nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-bar">
        <div className="links-container">
          <li className="logo">
            <a href="https://nps.gov">
              <img src={ParkwayLogo} alt="Logo" />
            </a>
          </li>
          <li className="nav-links">
            <a href="https://nps.gov">About</a>
          </li>
          <li className="nav-links">
            <a href="https://nps.gov">Parks</a>
          </li>
          <li className="nav-links">
            <a href="https://nps.gov">Log in</a>
          </li>
          <li className="nav-links">
            <a className="btn-cta" href="https://nps.gov">
              Sign up
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Nav;
