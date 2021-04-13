import React from "react";
import GrandCanyon from "./images/icons8-grand-canyon-48.png";
import Alps from "./images/icons8-alps-48.png";
import Climbing from "./images/icons8-climbing-48.png";
import Hills from "./images/icons8-hills-48.png";
import Lake from "./images/icons8-lake-48.png";
import Mountain from "./images/icons8-mountain-48.png";
import Park from "./images/icons8-national-park-48.png";
import Rafting from "./images/icons8-rafting-48.png";
import "./section-one.css";
import { Link } from "react-router-dom";

function SectionOne() {
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
          <Link to="/park/yell">
            <div className="icon-bg">
              {/* TODO: When the text from the API is implemented adjust icons to match*/}
              <img src={Mountain} alt="Mountain" />
            </div>
            {/* Add text from NPS API below inside of <b> tag */}

            <b>Yellowstone National Park</b>
          </Link>
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={GrandCanyon} alt="Grand Canyon" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Grand Canyon National Park</b>
          </Link>
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Climbing} alt="Climbing" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Yosemite National Park</b>
          </Link>
        </div>
        <div className="column column2">
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Rafting} alt="Rafting" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Acadia National Park</b>
          </Link>
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Hills} alt="Hills" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Grand Teton National Park</b>
          </Link>
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Alps} alt="Alps" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Rocky Mountains National Park</b>
          </Link>
        </div>
        <div className="column column3">
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Mountain} alt="Mountain" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Zion National Park</b>
          </Link>
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Lake} alt="Lake" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Great Smoky National Park</b>
          </Link>
          <Link to="/park/yell">
            <div className="icon-bg">
              <img src={Park} alt="Park" />
            </div>
            {/* Add text from nps api below inside of <b> tag */}
            <b>Glacier National Park</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default SectionOne;
