import React, { useEffect } from "react";

function ParkResults({ results }) {
  let content;
  const {data} = results
  if (results !== null) {
    content = data.map((parks) => {
      return <div>{parks.fullName}</div>;
    });
  }
  return <div>{content}</div>;
}

export default ParkResults;
