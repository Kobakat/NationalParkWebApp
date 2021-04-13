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
      entranceFees,
      entrancePasses,
      operatingHours,
    ] = data;

    //ACTIVITIES ARRAY
    let activitiesList;
    if (data !== null) {
      activitiesList = activities.map((activity, index) => {});
    }
    //ENTRANCEFEES ARRAY
    let entranceFeesList;
    if (data !== null) {
      entranceFeesList = entranceFees.map((fee) => {
        return (
          <div>
            <h2>${fee.cost}</h2>
            <h2>{fee.description}</h2>
          </div>
        );
      });
    }
    //ENTRANCEPASSES ARRAY
    let entrancePassesList;
    if (data !== null) {
      entrancePassesList = entrancePasses.map((pass) => {
        return (
          <div>
            <h2>${pass.cost}</h2>
            <h2>{pass.description}</h2>
          </div>
        );
      });
    }
    //OPERATING HOURS ARRAY
    let operatingHoursList;
    if (data !== null) {
      console.log(operatingHours[0]);
      operatingHoursList = (
        <div>
          <div>Monday: {operatingHours[0].standardHours.monday}</div>
          <div>Tuesday: {operatingHours[0].standardHours.tuesday}</div>
          <div>Wednesday: {operatingHours[0].standardHours.wednesday}</div>
          <div>Thursday: {operatingHours[0].standardHours.thursday}</div>
          <div>Friday: {operatingHours[0].standardHours.friday}</div>
          <div>Saturday: {operatingHours[0].standardHours.saturday}</div>
          <div>Sunday: {operatingHours[0].standardHours.sunday}</div>
        </div>
      );

      // operatingHoursList = operatingHours.map((hours) => {
      //   console.log(hours)
      //   // return (
      //   //   <div>
      //   //     <div>Monday: {hours.standardHours.monday}</div>
      //   //     <div>Tuesday: {hours.standardHours.tuesday}</div>standardHours.
      //   //     <div>Wednesday: {hours.standardHours.wednesday}</div>
      //   //     <div>Thursday: {hours.standardHours.thursday}</div>
      //   //     <div>Friday: {hours.standardHours.friday}</div>
      //   //     <div>Saturday: {hours.standardHours.saturday}</div>
      //   //     <div>Sunday: {hours.standardHours.sunday}</div>
      //   //   </div>
      //   // );
      // });
    }

    contents = (
      <div>
        <h1>{fullName}</h1>
        <h4>{description}</h4>
        <div>{activitiesList}</div>
        <div>{entranceFeesList}</div>
        <div>{entrancePassesList}</div>
        <div>{operatingHoursList}</div>
        <div>{weatherInfo}</div>
        <img src={images[0].url} width="20%" />
        <div>
          {weather.main ? (
            <div>
              <p>Weather in {weather.name}</p>
              <p>{weather.weather[0].description}</p>
              <div>{Math.round(weather.main.temp)}° degrees</div>
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
