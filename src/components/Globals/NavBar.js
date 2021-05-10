import { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './ParkwayLogo.svg'


import "./header.css";
import signIn from "../HomePage/login";
import SignOut from "../HomePage/logout";

const NavBar = ({ user }) => {
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
        <ul className={click ? 'nav-options active' : 'nav-options'}>
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
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a class="header-link" href="/account">
            {showAccountPage()}
          </a>
        </li>
        <li onClick={closeMobileMenu}>

          <button onClick={user? SignOut : signIn} className="signup-btn">
            {user ? "Sign Out" : "Sign In"}

          </button>
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
  )
}

export default NavBar
