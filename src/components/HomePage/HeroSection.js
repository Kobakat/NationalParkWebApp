import { useState, useEffect } from "react";
import SearchBar from "../UtilityComponents/SearchBar";
import "./section-hero.css";

function HeroSection() {
  return (
    <main className="bg-image-home">
      <SearchBar />
    </main>
  );
}
export default HeroSection;
