import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ParkResults({ results }) {
  let content;
  const { data } = results;
  if (results !== null) {
    content = data.map((parks) => {
      return (
        <div>
          <Link to={`park/${parks.parkCode}`}>
            <button>{parks.parkCode}</button>
          </Link>
        </div>
      );
    });
  }
  return <div>{content}</div>;
}

export default ParkResults;
