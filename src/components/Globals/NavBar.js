import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./ParkwayLogo.svg";
import "./header.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about/" class="header-link">
              About
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a class="header-link" href="/parks">
              Parks
            </a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a class="header-link" href="/sign-in">
              Sign in
            </a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a class="header-link" href="/sign-up" className="sign-up">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a class="header-link" href="/sign-in">
            Sign in
          </a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="/sign-up" className="signup-btn">
            Sign Up
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <GrClose className="menu-icon" />
        ) : (
          <GrMenu className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
