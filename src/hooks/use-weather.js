import { useEffect, useState } from "react";

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
            "050b20fe6fmshcc37847cfd1d769p102854jsnec74355a5969",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }, [city, unit]);

  return [responseObj];
};

export default useWeather;
