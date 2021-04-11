import React from "react";
import ParkwayLogo from "../HomePage/images/ParkwayLogo.svg";
import "./section-footer.css";

function PageFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="items">
            <a href="#" className="logo">
              <img src={ParkwayLogo} alt="" />
            </a>
            <p>
              The National Parks is a website brought to you by people who know
              and love the outdoors and want to share the beauty that is the
              national park service in this country. Grab a friend and plan a
              trip to an unforgettable experience
            </p>
          </div>
          <div className="items">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Activities</a>
              </li>
              <li>
                <a href="#">Park List</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Parkway FAQ</a>
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
export default PageFooter;