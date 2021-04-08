import React from "react"
import "./nav.css";

function Nav() {
    return (
        // Navigation Menu
        <nav>
          <ul className="nav-bar">
            <li className="logo"><a href="">The National Parks</a></li>
            <li className="nav-links"><a href="">About</a></li>
            <li className="nav-links"><a href="">Parks</a></li>
            <li className="nav-links"><a href="">Log in</a></li>
            <li className="nav-links"><a className="btn-cta" href="">Sign up</a></li>
          </ul>
        </nav>
    )
}

export default Nav;