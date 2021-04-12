import React from "react";
import SearchBar from "../SearchBar";
import "./section-hero.css";
import HeroPicture from "./images/yosemitevalley (1).png"

function HeroSection() {
  return <main>
    <SearchBar/> 
    <img className="landing-image"src = {HeroPicture}alt="" />
  </main>;
}
export default HeroSection;
