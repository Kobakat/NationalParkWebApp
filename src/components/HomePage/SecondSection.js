import React from "react";
import "./second-section.css";

function SecondSection() {
  return (
    <section className="discover-top-activities">
      <h2 className="section-title">Discover top activities</h2>
      <div className="foocontainer">
        <main className="grid">
          <article>
            <img src="https://picsum.photos/300/200///" alt="" />
            <div className="text">
              <h3>Rock Climbing</h3>
              <span>Reaching new heights</span>
              <a href="">
                <button>Show Me</button>
              </a>
            </div>
          </article>
          <article>
            <img src="https://picsum.photos/300/200" alt="" />
            <div className="text">
              <h3>Camping</h3>
              <span>Night by the fire</span>
              <br />
              <a href="">
                <button>Show Me</button>
              </a>
            </div>
          </article>
          <article>
            <img src="https://picsum.photos/300/200/" alt="" />
            <div className="text">
              <h3>Boating</h3>
              <span>A day on the lake</span>
              <a href="">
                <button>Show Me</button>
              </a>
            </div>
          </article>
        </main>
      </div>
      {/* <div className="activities-container">
        <div className="box">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x500" alt="" />
          </div>
          <div className="details">
            <h3>
              Rock Climbing
              <br />
              <span>Reaching new heights</span>
            </h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x500" alt="" />
          </div>
          <div className="details">
            <h3>
              Camping
              <br />
              <span>Night by the fire</span>
            </h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x500" alt="" />
          </div>
          <div className="details">
            <h3>
              Boating
              <br />
              <span>A day on the lake</span>
            </h3>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default SecondSection;
