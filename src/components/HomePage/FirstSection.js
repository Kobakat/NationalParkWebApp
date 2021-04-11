import React from "react";
import "./first-section.css";

function FirstSection() {
  return (
    <section className="official-national-parks">
      <div className="section-div">
        <div className="inner-section-div">
          <h2>
            Featured Official <br /> National Parks
          </h2>
          <p className="right-arrow-text">
            Our curated list of top <br />
            destinations countrywide &rarr;
          </p>
          <p className="right-arrow-text down-arrow-text">
            Our curated list of top <br />
            destinations countrywide &darr;
          </p>
          <button>Explore</button>
        </div>
        <div className="column">
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-mountain-48.png" alt="Mountain" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-grand-canyon-48.png" alt="Grand Canyon" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-rafting-48.png" alt="Rafting" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
        </div>
        <div className="column column2">
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-climbing-48.png" alt="Mountain" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-hills-48.png" alt="Grand Canyon" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-mountain-48.png" alt="Rafting" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
        </div>
        <div className="column column3">
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-alps-48.png" alt="Mountain" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-lake-48.png" alt="Grand Canyon" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
          <a href="">
            <div className="icon-bg">
              <img src="images/icons8-national-park-48.png" alt="Rafting" />
            </div>
            <b>Lorem, ipsum dolor.</b>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
