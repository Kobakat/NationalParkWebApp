import React from "react";
import { Link } from "react-router-dom";
import "./section-two.css";

function SectionTwo() {
  return (
    <section className="discover-top-activities">
      <h2 className="section-title">Discover top activities</h2>
      <div className="inner-container">
        <main className="grid">
          <article>
            {/* Hook up NPS API here for images */}
            {/* Idea: Make a card for each type of activity with corresponding image and text */}
            {/* Then with Javascript render a random activity card triplet each time */}
            <img src="https://picsum.photos/300/200///" alt="" />
            <div className="text">
              <h3>Rock Climbing</h3>
              <span>Reaching new heights</span>

              <Link to="/activities/climbing">
                <button>Show Me</button>
              </Link>
            </div>
          </article>
          <article>
            <img src="https://picsum.photos/300/200" alt="" />
            <div className="text">
              <h3>Camping</h3>
              <span>Night by the fire</span>
              <br />
              <Link to="/activities/camping">
                <button>Show Me</button>
              </Link>
            </div>
          </article>
          <article>
            <img src="https://picsum.photos/300/200/" alt="" />
            <div className="text">
              <h3>Boating</h3>
              <span>A day on the lake</span>
              <Link to="/activities/boating">
                <button>Show Me</button>
              </Link>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}
export default SectionTwo;
