import Layout from "../Globals/Layout";
import "./park-page.css";
import { useState, useEffect } from "react";
import getPark from "./get-park";
import useWeather from "../hooks/use-weather";
import MapboxGLMap from "../UtilityComponents/MapboxGLMap";
import useUser from "../../hooks/use-user";

import { auth } from "../../firebase/firebase";
import favorite from "../UtilityComponents/favorite-park";
import UseCheckFavorite from "../../hooks/use-check-favorite";
import FavoriteButton from "./favorite-button";
import unfavorite from "../UtilityComponents/unfavorite-park";

function ParkPage({ parkCode }) {
  const user = useUser(auth);
  console.log(user);

  const [parkFetch, setParkFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
    zipCode: 60659,
  });

  const fav = UseCheckFavorite(parkCode, user);
  console.log(fav);

  const onFavoriteSubmit = (event) => {
    event.preventDefault();
    favorite(parkCode, user, data[9]);
  };

  const onUnFavoriteSubmit = (event) => {
    event.preventDefault();
    unfavorite(parkCode, user, data[9]);
  };

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
          zipCode: park[3][0].postalCode,
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
  }, [parkCode]);

  const { isLoading, errorMessage, data, zipCode } = parkFetch;

  const [weather] = useWeather(zipCode);
  let contents;
  if (isLoading) {
    contents = <div>Loading Park</div>;
  } else if (errorMessage !== "") {
    contents = <div>{errorMessage}</div>;
  } else {
    const [
      description,
      topics,
      activities,
      addresses,
      weatherInfo,
      images,
      entranceFees,
      entrancePasses,
      operatingHours,
      name,
      designation,
      states,
      longitude,
      latitude,
    ] = data;

    console.log(addresses);

    //ACTIVITIES ARRAY
    let activitiesList;
    if (data !== null) {
      activitiesList = activities.map((activity, index) => (
        <li
          className="bg-green-700 text-white px-4 py-2 rounded-md"
          key={index}
        >
          {activity.name}
        </li>
      ));
    }

    //TOPICS ARRAY
    let topicsList;
    if (data !== null) {
      topicsList = topics.map((topic, index) => (
        <li
          className="bg-green-700 text-white px-4 py-2 rounded-md"
          key={index}
        >
          {topic.name}
        </li>
      ));
    }

    //ENTRANCEFEES ARRAY
    let entranceFeesList;
    if (data !== null) {
      entranceFeesList = entranceFees.map((fee, index) => {
        return (
          <div className="font-body" key={index}>
            <span className="font-bold">${fee.cost}</span>
            <span className="block mb-3">{fee.description}</span>
          </div>
        );
      });
    }

    //ENTRANCEPASSES ARRAY
    let entrancePassesList;
    if (data !== null) {
      entrancePassesList = entrancePasses.map((pass, index) => {
        return (
          <div className="font-body" key={index}>
            <span className="font-bold">${pass.cost}</span>
            <span className="block mb-3">{pass.description}</span>
          </div>
        );
      });
    }

    // EXTRA IMAGES
    let imageList;
    if (data) {
      imageList = images.map((img, index) => {
        return (
          <img
            className="m-auto object-cover w-full rounded-xl"
            src={img.url}
            alt={img.altText}
            key={index}
          />
        );
      });
    }

    //OPERATING HOURS ARRAY
    let operatingHoursList;
    if (data !== null) {
      operatingHoursList = (
        <div>
          <h2 className="text-3xl mb-2">Hours</h2>
          <h3 className="font-body">
            Monday: {operatingHours[0].standardHours.monday}
          </h3>
          <h3 className="font-body">
            Tuesday: {operatingHours[0].standardHours.tuesday}
          </h3>
          <h3 className="font-body">
            Wednesday: {operatingHours[0].standardHours.wednesday}
          </h3>
          <h3 className="font-body">
            Thursday: {operatingHours[0].standardHours.thursday}
          </h3>
          <h3 className="font-body">
            Friday: {operatingHours[0].standardHours.friday}
          </h3>
          <h3 className="font-body">
            Saturday: {operatingHours[0].standardHours.saturday}
          </h3>
          <h3 className="font-body">
            Sunday: {operatingHours[0].standardHours.sunday}
          </h3>
        </div>
      );
    }

    // FIXME: add 's' to State(s) - count number of states and if it is greater than 1, add an 's' to state
    const renderStates = (states) => {
      let numStates = [states].length;
      let str;
      if (numStates > 1) {
        str = `States: ${states}`;
      } else {
        str = `State: ${states}`;
      }

      return str;
    };

    contents = (
      <div className="m-auto p-8 lg:max-w-screen-lg text-yellow-900">
        <button>
          <FavoriteButton
            parkCode={parkCode}
            user={user}
            onFavoriteSubmit={onFavoriteSubmit}
            onUnFavoriteSubmit={onUnFavoriteSubmit}
          />
        </button>
        {/* Top Section */}
        <span className="block text-center text-yellow-900">{designation}</span>
        <h1 className="text-3xl lg:text-7xl text-center mb-4">{name}</h1>
        <figure>
          <img
            className="m-auto object-cover w-full max-h-96 rounded-xl"
            src={images[0].url}
            alt={images[0].altText}
          />
          <figcaption className="mt-3 text-center  text-sm">
            <span>{images[0].caption}</span>
            <span className="italic"> {images[0].credit}</span>
          </figcaption>
        </figure>

        <hr className="border-1 border-gray-400 mt-10 mb-10" />

        <div className="grid gap-16">
          {/* Description & Hours */}
          <div className="grid gap-10 md:grid-flow-col">
            <div>
              <p>{description}</p>
              <span className="block mt-4 font-body">
                {renderStates(states)}
              </span>
            </div>
            <div className="bg-green-800 text-white p-6 rounded-lg shadow-lg">
              {operatingHoursList}
            </div>
          </div>

          {/* Mapbox */}
          <MapboxGLMap
            coordinates={[{ longitude: longitude, latitude: latitude }]}
            mapType="defaultMap"
          />

          {/* Entrance Fees & Weather */}
          <div className="grid md:grid-flow-col gap-10">
            <div className="shadow-lg rounded-lg bg-gray-50">
              <h2 className="px-6 py-3 rounded-t-lg bg-green-800 text-white text-3xl">
                Entrance Fees/ Passes
              </h2>
              <div className="p-6 rounded-b-lg">
                <div>
                  <span className="text-sm block">Fees</span>
                  {entranceFeesList}
                </div>
                <div>
                  <span className="text-sm block mt-6">Fees</span>
                  {entrancePassesList}
                </div>
              </div>
            </div>

            {weather ? (
              <div className="shadow-lg rounded-lg bg-gray-50">
                <h2 className="px-6 py-3 rounded-t-lg bg-blue-400 text-white text-3xl text-center">
                  Weather
                </h2>
                <div className="p-6 rounded-b-lg">
                  <div className="text-center mb-4">
                    <span className="text-sm text-center">Current Weather</span>
                    <span className="block text-5xl">
                      {weather.main
                        ? Math.round(weather.main.temp) + "°"
                        : "0°"}
                      {weather.main ? (
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                          alt="icon"
                        />
                      ) : (
                        " "
                      )}
                    </span>
                    <span>
                      {weather.weather
                        ? weather.weather[0].description
                        : "Loading..."}
                    </span>
                  </div>
                  <p>{weatherInfo}</p>
                </div>
              </div>
            ) : (
              "Loading weather"
            )}

            {/* {weather.main ? (
                <div>
                  <p>Weather in {weather.name}</p>
                  <p>{weather.weather[0].description}</p>
                  <div>{Math.round(weather.main.temp)}° degrees</div>
                  <div>
                    min: {weather.main.temp_min} max:{weather.main.temp_max}
                  </div>
                </div>
              ) : (
                'loading weather information'
              )} */}
          </div>

          {/* More images */}
          <div className="masonry">{imageList}</div>

          {/* Activities & Topics */}
          <div className="grid gap-10 max-w-full">
            <div className="shadow-lg p-6 rounded-b-lg">
              <h2 className="text-3xl mb-4">Activities</h2>
              <ul className="flex flex-wrap gap-3">{activitiesList}</ul>
            </div>

            <div className="shadow-lg p-6 rounded-b-lg">
              <h2 className="text-3xl mb-4">Topics</h2>
              <ul className="flex flex-wrap gap-3">{topicsList}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Layout user={user}>{contents}</Layout>;
}

export default ParkPage;
