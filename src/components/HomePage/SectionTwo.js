import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRandomActivitySet from "../get-random-set";
import "./section-two.css";

function SectionTwo() {
  const [randomActivities, setRandomActivities] = useState(() =>
    getRandomActivitySet()
  );

  const renderArray = randomActivities.map((activity) => {
    const linkUrl = `/activities/${activity.name}`;
    return (
      <article key={activity.name}>
        <img src={activity.URL} alt="" />
        <div className="text">
          <h3>{activity.name}</h3>
          <span>{activity.tag}</span>
          <br />
          <Link to={linkUrl}>
            <button>Show Me</button>
          </Link>
        </div>
      </article>
    );
  });

  return (
    <section className="discover-top-activities">
      <h2 className="section-title">Discover top activities</h2>
      <div className="inner-container">
        <main className="grid-section-2">{renderArray}</main>
      </div>
    </section>
  );
}
export default SectionTwo;
