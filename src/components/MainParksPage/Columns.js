import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./columns.css";

function Columns() {
  const [parks, setParks] = useState(null);

  useEffect(() => {
    async function getParks() {
      const url = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          `Something went wrong, server responded with ${response.status}`
        );
      const json = await response.json();
      const parks = json.data.map((parkName) => {
        return (
          <Link key={parkName.parkCode} to={`park/${parkName.parkCode}`}>
            <h6>{parkName.fullName}</h6>
          </Link>
        );
      });
      setParks(parks);
      console.log(parks);
    }

    getParks();
    // setParks(getParks());
    // console.log(getParks());
  }, []);
  return (
    <section className="column-section">
      <h1 className="column-title">All National Parks</h1>

      <div className="columns">
        <p id="column-p ">{parks}</p>
      </div>
    </section>
  );
}

export default Columns;
