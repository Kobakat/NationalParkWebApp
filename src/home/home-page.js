import "./home-page.css";
import SearchBar from "./search-bar";
import { React, useState, useEffect } from "react";
import ParkResuls from "./park-results";

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
      console.log(parkJson)
      if (parkJson !== null) setParkData(parkJson);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <div>
      {/* <SearchBar></SearchBar>  you shouldn't do it like this unless you are passing a Children to it*/}
      <SearchBar getData={getData} getParkData={getParkData} />
      {parkData ? <ParkResuls results={parkData} /> : ""}
    </div>
  );
}

export default HomePage;
