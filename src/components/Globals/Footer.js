import React from "react";
import { ReactComponent as Logo } from "./ParkwayLogo.svg";
import "./section-footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="items">
            <a className="footer-links" href="https://nps.gov">
              <Logo className="logo" />
            </a>
            <p>
              Parkway is a website brought to you by people who know and love
              the outdoors and want to share the beauty that is the national
              park service in this country. Grab a friend and plan a trip to an
              unforgettable experience
            </p>
          </div>
          <div className="items">
            <h3>Product</h3>
            <ul>
              <li>
                <a className="footer-links" href="https://nps.gov">
                  Sign up
                </a>
              </li>
              <li>
                <a className="footer-links" href="https://nps.gov">
                  Activities
                </a>
              </li>
              <li>
                <a className="footer-links" href="https://nps.gov">
                  Park List
                </a>
              </li>
              <li>
                <a className="footer-links" href="https://nps.gov">
                  Topics
                </a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  className="footer-links"
                  href="https://www.nps.gov/subjects/digital/nps-data-api.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Park Service API
                </a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h3>Support</h3>
            <ul>
              <li>
                <Link
                  to="/faq"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Parkway FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="end">@ 2021 Parkway Web-App</p>
      </div>
    </footer>
  );
}
export default Footer;
