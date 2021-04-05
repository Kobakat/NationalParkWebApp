import React, { useEffect, useState } from "react";

const useWeather = (city) => {
  const [responseObj, setResponseObj] = useState({});

  let [unit] = useState("imperial");

  
    useEffect(() => {
      fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?zip=${city}&units=${unit}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "8fbeacab73msh8c3e2003707fcf0p178839jsnc85e571f1009",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          setResponseObj(response);
        });
    }, [city]);
  
  
  return [responseObj];
};

export default useWeather;
