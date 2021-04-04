import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ParkResults({ results }) {
  let content;
  const { data } = results;
  if (results !== null) {
    content = data.map((parks) => {
      return (
        <div key={parks.id}>
          <Link to={`park/${parks.parkCode}`}>
            <button>{parks.fullName}</button>
          </Link>
        </div>
      );
    });
  }
  return <div>{content}</div>;
}

export default ParkResults;
