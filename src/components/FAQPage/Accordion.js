import React from "react";
import "./FAQPage.css";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";

const Accordion = ({ question, answer, active, setActive }) => {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="accordionContainer">
          <p>{question}</p>
          <span onClick={() => setActive(question)}>
            {active === question ? <GrSubtract /> : <GrAdd />}
          </span>
        </div>
      </div>

      <div className={(active === question ? "show" : "") + "accordionContent"}>
        <div className="accordionContainer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
