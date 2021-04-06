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
  const [searchParams, setSearchParams] = useState({
    query: null,
    params: null,
  });
  const [parkData, setParkData] = useState(null);

  const { query, params } = searchParams;

  const getData = (query, params) => {
    setSearchParams({
      query: query,
      params: params,
    });
  };

  const getParkData = async (query, params) => {
    const url = `https://developer.nps.gov/api/v1/parks?q=${query}&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`;
    try {
      const data = await fetch(url);
      const parkJson = await data.json();
      console.log(parkJson);
      if (parkJson !== null) setParkData(parkJson);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="content">
        <Nav />
        <Header />
        <MainSection />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
        {/* <SearchBar></SearchBar>  you shouldn't do it like this unless you are passing a Children to it*/}
        {/* <SearchBar getData={getData} getParkData={getParkData} /> */}
        {parkData ? <ParkResuls results={parkData} /> : ""}
    </div>
  );
}

export default HomePage;
