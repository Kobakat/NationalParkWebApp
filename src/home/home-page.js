import { React, useState, useEffect } from "react";
import Nav from "../components/HomePage/Nav";
import SearchBar from "../components/SearchBar";
import ParkResuls from "./park-results";
import Header from "../components/HomePage/Header";
import MainSection from "../components/HomePage/MainSection";
import FirstSection from "../components/HomePage/FirstSection";
import SecondSection from "../components/HomePage/SecondSection";
import ThirdSection from "../components/HomePage/ThirdSection";
import FourthSection from "../components/HomePage/FourthSection";
import Footer from "../common/page-footer";
import "../home/home-page.css";

function HomePage() {
  return (
    <div id="content">
      <Nav />
      <Header />
      <MainSection />
      <FirstSection />
      <SearchBar />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default HomePage;
