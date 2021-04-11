import React from "react";
import "./section-four.css";

function SectionFour() {
  return (
    <section className="explore-the-country">
      <h2 className="section-title">Explore the country</h2>
      <div className="explore-container">
        <div className="box box2">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x400" alt="" />
          </div>
          <div className="details details2">
            <h4>National Historic Sites</h4>
          </div>
        </div>
        <div className="box box2">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x400" alt="" />
          </div>
          <div className="details details2">
            <h4>National Preserve</h4>
          </div>
        </div>
        <div className="box box2">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x400" alt="" />
          </div>
          <div className="details details2">
            <h4>Hiking Trails</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
