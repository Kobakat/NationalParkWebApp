import { React, useEffect, useState } from "react";

function Demo() {
  const [stateCode, setStateCode] = useState("IL");
  const [parks, setParks] = useState({
    parkData: null,
  });

  const { parkData } = parks;

  const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`;
  let content;
  useEffect(() => {
    const getParks = async () => {
      if (stateCode != "" && stateCode.length == 2) {
        try {
          const parkData = await fetch(url);
          const parkJson = await parkData.json();
          console.log(parkJson);
          const { data } = parkJson;
          console.log(data);
          setParks({
            parkData: data,
          });
        } catch (err) {
          console.error(err);
        }
      }
    };

    getParks();
  }, [stateCode]);
  if (parkData !== null) {
    content = parkData.map((parkObj, index) => {
      return (
        <div key={parkObj.id}>
          <h2>
            {index + 1} {parkObj.fullName}
          </h2>{" "}
          <img
            src={parkObj.images[0].url}
            height="auto"
            width="10%"
            alt="park"
          />
        </div>
      );
    });
  }

  const onChangeInput = (e) => {
    setStateCode(e.target.value);
  };

  return (
    <div>
      <label htmlFor="stateCode">State code (example: IL = Illinois) :</label>
      <input type="text" value={stateCode} onChange={onChangeInput} />
      <div>{content}</div>
    </div>
  );
}

export default Demo;
