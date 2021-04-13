import NavBar from "../components/HomePage/NavBar";
import PageHeader from "../common/PageHeader";
import HeroSection from "../components/HomePage/HeroSection";
import SectionOne from "../components/HomePage/SectionOne";
import SectionTwo from "../components/HomePage/SectionTwo";
import SectionThree from "../components/HomePage/SectionThree";
import SectionFour from "../components/HomePage/SectionFour";
import PageFooter from "../components/HomePage/FooterSection";
import { useState, useEffect } from "react";
import "../home/home-page.css";

function HomePage({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  useEffect(() => {
    callback({ searchBarParams });
  }, [searchBarParams]);

  return (
    <>
      <NavBar />
      <div id="content">
        <PageHeader />
        <HeroSection callback={searchBarCallback} />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <PageFooter />
      </div>
    </>
  );
}
export default HomePage;
