import React from "react";
import GrandCanyon from "./images/icons8-grand-canyon-48.png";
import Alps from "./images/icons8-alps-48.png";
import Forest from "./images/icons8-forest-48.png";
import Hills from "./images/icons8-hills-48.png";
import Lake from "./images/icons8-lake-48.png";
import Mountain from "./images/icons8-mountain-48.png";
import SnowCapped from "./images/icons8-snow-capped-mountain-48.png";
import Geyser from "./images/icons8-geyser-48.png";
import "./section-one.css";
import { Link } from "react-router-dom";

function SectionOne() {
  return (
    <section className="official-national-parks">
      <div className="section-div">
        <div className="inner-section-div">
          <h2>
            Our Curated <br /> National Parks
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
          <Link className="linkto" to="/park/yell">
            <img src={Geyser} alt="Geyser" />
            <b>Yellowstone National Park</b>
          </Link>
          <Link className="linkto" to="/park/yell">
            <img src={GrandCanyon} alt="Grand Canyon" />
            <b>Grand Canyon National Park</b>
          </Link>
          <Link className="linkto" to="/park/yell">
            <img src={Mountain} alt="Mountain" />
            <b>Yosemite National Park</b>
          </Link>
        </div>
        <div className="column">
          <Link className="linkto" to="/park/yell">
            <img src={Forest} alt="Forest" />
            <b>Acadia National Park</b>
          </Link>
          <Link className="linkto" to="/park/yell">
            <img src={Alps} alt="Snowy Mountains" />
            <b>Grand Teton National Park</b>
          </Link>
          <Link className="linkto" to="/park/yell">
            <img src={SnowCapped} alt="Snowy Mountain Range" />
            <b>Rocky Mountains National Park</b>
          </Link>
        </div>
        <div className="column">
          <Link className="linkto" to="/park/yell">
            <img src={GrandCanyon} alt="Canyon" />
            <b>Zion National Park</b>
          </Link>
          <Link className="linkto" to="/park/yell">
            <img src={Hills} alt="Mountainous Hills" />
            <b>Great Smoky National Park</b>
          </Link>
          <Link className="linkto" to="/park/yell">
            <img src={Lake} alt="Lake" />
            <b>Glacier National Park</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default SectionOne;
