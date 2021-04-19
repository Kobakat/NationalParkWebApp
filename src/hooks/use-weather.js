import { useEffect, useState } from "react";

const useWeather = (city) => {
  // const [responseObj, setResponseObj] = useState({});

  let [unit] = useState("imperial");

  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "f0427030a3eaff2558613297e9184af8";
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&units=${unit}&appid=${apiKey}`;

  //Functions
  // TODO: ADD THIS TO A REACT CUSTOM HOOK, THIS COMPONENT SHOULD ONLY HANDLE THE RENDER.
  useEffect(() => {
    const getWeather = async () => {
      try {
        const weather = await fetch(url);
        const json = await weather.json();
        console.log(json);
        setWeatherData(json);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
    console.log("weather component mounted.");
    console.log(weatherData);
  }, [url]);

  // useEffect(() => {
  //   fetch(
  //     `https://community-open-weather-map.p.rapidapi.com/weather?zip=${city}&units=${unit}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "050b20fe6fmshcc37847cfd1d769p102854jsnec74355a5969",
  //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setResponseObj(response);
  //     });
  // }, [city, unit]);

  return [weatherData];
};

export default useWeather;
