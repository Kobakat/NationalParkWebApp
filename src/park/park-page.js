import "./park-page.css";
import { useState, useEffect } from "react";
import getPark from "./get-park";
import useWeather from "../hooks/use-weather";

function ParkPage({ parkCode }) {
  const [parkFetch, setParkFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
    zipCode: 60659,
  });

  

  useEffect(() => {
    async function loadPark() {
      setParkFetch({
        isLoading: true,
        errorMessage: "",
        data: null,
      });

      try {
        const park = await getPark(parkCode);
        setParkFetch({
          isLoading: false,
          errorMessage: "",
          data: park,
          zipCode: park[4][0].postalCode,
        });
      } catch (err) {
        setParkFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong loading the park. Please try again later.",
          data: null,
        });
      }
    }
    loadPark();
  }, []);

  const { isLoading, errorMessage, data, zipCode } = parkFetch;

  const [weather] = useWeather(zipCode);
  let contents;
  if (isLoading) {
    contents = <div>Loading Park</div>;
  } else if (errorMessage !== "") {
    contents = <div>{errorMessage}</div>;
  } else {
    const [
      fullName,
      description,
      topics,
      activities,
      addresses,
      weatherInfo,
      images,
    ] = data;
    contents = (
      <div>
        <h1>{fullName}</h1>
        <h4>{description}</h4>
        <div>{weatherInfo}</div>
        <img src={images[0].url} width="20%" />
        <div>
          {weather.main ? (
            <div>
              <p>Weather in {weather.name}</p>
              <p>{weather.weather[0].description}</p>
              <div>{Math.round(weather.main.temp)} degrees</div>
              <div>
                min: {weather.main.temp_min} max:{weather.main.temp_max}
              </div>
            </div>
          ) : (
            "loading weather information"
          )}
        </div>
      </div>
    );
  }

  return <div>{contents}</div>;
}

export default ParkPage;
