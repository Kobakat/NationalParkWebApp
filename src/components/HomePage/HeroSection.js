import { useState, useEffect } from "react";
import SearchBar from "../UtilityComponents/SearchBar";
import "./section-hero.css";
import HeroPicture from "./images/yosemitevalley.png";

function HeroSection({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  useEffect(() => {
    callback({ searchBarParams });
  }, [searchBarParams]);

  return (
    <main className="bg-image-home">
      <SearchBar callback={searchBarCallback} />
    </main>
  );
}
export default HeroSection;
