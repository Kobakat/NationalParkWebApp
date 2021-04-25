import Layout from "../Globals/Layout";
import PageHeader from "../Globals/PageHeader";
import HeroSection from "../HomePage/HeroSection";
import SectionOne from "../HomePage/SectionOne";
import SectionTwo from "../HomePage/SectionTwo";
import SectionThree from "../HomePage/SectionThree";
import SectionFour from "../HomePage/SectionFour";
import { useState, useEffect } from "react";
import "./home-page.css";

function HomePage({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  useEffect(() => {
    callback({ searchBarParams });
  }, [searchBarParams]);

  return (
    <Layout>
      <div id="content">
        <PageHeader />
        <HeroSection callback={searchBarCallback} />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </Layout>
  );
}
export default HomePage;
