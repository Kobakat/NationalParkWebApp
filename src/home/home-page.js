import Nav from "../components/HomePage/Nav";
import SearchBar from "../components/SearchBar";
import Header from "../components/HomePage/Header";
import MainSection from "../components/HomePage/MainSection";
import FirstSection from "../components/HomePage/FirstSection";
import SecondSection from "../components/HomePage/SecondSection";
import ThirdSection from "../components/HomePage/ThirdSection";
import FourthSection from "../components/HomePage/FourthSection";
import Footer from "../common/page-footer";
import { useState } from "react";
import "../home/home-page.css";

function HomePage({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
    passParams();
  };

  const passParams = () => {
    callback({ searchBarParams });
  };

  return (
    <div id="content">
      <Nav />
      <Header />
      <MainSection />
      <FirstSection />
      <SearchBar callback={searchBarCallback} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default HomePage;
