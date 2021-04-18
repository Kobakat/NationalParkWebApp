import React from 'react'
import { ReactComponent as Logo } from './ParkwayLogo.svg'
import './section-footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="items">
            <a href="https://nps.gov">
              <Logo className="logo" />
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
                <a href="https://nps.gov">Sign up</a>
              </li>
              <li>
                <a href="https://nps.gov">Activities</a>
              </li>
              <li>
                <a href="https://nps.gov">Park List</a>
              </li>
              <li>
                <a href="https://nps.gov">Lorem ipsum</a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="https://nps.gov">About Us</a>
              </li>
              <li>
                <a href="https://nps.gov">Our Mission</a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="https://nps.gov">Contact Us</a>
              </li>
              <li>
                <a href="https://nps.gov">Parkway FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="end">@ 2021 Parkway Web-App</p>
      </div>
    </footer>
  )
}
export default Footer
