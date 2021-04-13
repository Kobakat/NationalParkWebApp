import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import HeroPicture from "./images/yosemitevalley (1).png";
import "./section-hero.css";

function HeroSection({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  useEffect(() => {
    callback({ searchBarParams });
  }, [searchBarParams]);

  return (
    <main>
      <SearchBar callback={searchBarCallback} />
      <img className="landing-image" src={HeroPicture} alt="" />
    </main>
  );
}
export default HeroSection;
