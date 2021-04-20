import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRandomActivitySet from "../get-random-set";
import "./section-two.css";

function SectionTwo() {
  const [randomActivities, setRandomActivities] = useState([]);
  const [activityDisplay, setActivityDisplay] = useState([]);

  useEffect(() => {
    const activities = getRandomActivitySet();
    setRandomActivities(activities);
    console.log(randomActivities);
    const renderArray = randomActivities.map((activity) => {
      const linkUrl = `/activities/${activity.name}`;
      return (
        <article key={activity.name}>
          <img src="https://picsum.photos/300/200///" alt="" />
          <div className="text">
            <h3>{activity.name}</h3>
            <span>{activity.tag}</span>

            <Link to={linkUrl}>
              <button>Show Me</button>
            </Link>
          </div>
        </article>
      );
    });

    console.log("test");
    setActivityDisplay(renderArray);
  }, []);

  return (
    <section className="discover-top-activities">
      <h2 className="section-title">Discover top activities</h2>
      <div className="inner-container">
        <main className="grid-section-2">{activityDisplay}</main>
      </div>
    </section>
  );
}
export default SectionTwo;
