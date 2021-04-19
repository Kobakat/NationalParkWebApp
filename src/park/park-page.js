import Layout from "../components/Globals/Layout";
import "./park-page.css";
import { useState, useEffect } from "react";
import getPark from "./get-park";
import useWeather from "../hooks/use-weather";
import MapboxGLMap from "../components/MapboxGLMap";

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

    //ACTIVITIES ARRAY
    let activitiesList;
    if (data !== null) {
      activitiesList = activities.map((activity, index) => (
        <li class="bg-green-700 text-white px-4 py-2 rounded-md" key={index}>
          {activity.name}
        </li>
      ));
    }

    //TOPICS ARRAY
    let topicsList;
    if (data !== null) {
      topicsList = topics.map((topic, index) => (
        <li class="bg-green-700 text-white px-4 py-2 rounded-md" key={index}>
          {topic.name}
        </li>
      ));
    }

    //ENTRANCEFEES ARRAY
    let entranceFeesList;
    if (data !== null) {
      entranceFeesList = entranceFees.map((fee, index) => {
        return (
          <div class="font-body" key={index}>
            <span class="font-bold">${fee.cost}</span>
            <span class="block mb-3">{fee.description}</span>
          </div>
        );
      });
    }

    //ENTRANCEPASSES ARRAY
    let entrancePassesList;
    if (data !== null) {
      entrancePassesList = entrancePasses.map((pass, index) => {
        return (
          <div class="font-body" key={index}>
            <span class="font-bold">${pass.cost}</span>
            <span class="block mb-3">{pass.description}</span>
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
            class="m-auto object-cover w-full rounded-xl"
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
          <h2 class="text-3xl mb-2">Hours</h2>
          <h3 class="font-body">
            Monday: {operatingHours[0].standardHours.monday}
          </h3>
          <h3 class="font-body">
            Tuesday: {operatingHours[0].standardHours.tuesday}
          </h3>
          <h3 class="font-body">
            Wednesday: {operatingHours[0].standardHours.wednesday}
          </h3>
          <h3 class="font-body">
            Thursday: {operatingHours[0].standardHours.thursday}
          </h3>
          <h3 class="font-body">
            Friday: {operatingHours[0].standardHours.friday}
          </h3>
          <h3 class="font-body">
            Saturday: {operatingHours[0].standardHours.saturday}
          </h3>
          <h3 class="font-body">
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
      <div class="m-auto p-8 lg:max-w-screen-lg text-yellow-900">
        {/* Top Section */}
        <span class="block text-center text-yellow-900">{designation}</span>
        <h1 class="text-3xl lg:text-7xl text-center mb-4">{name}</h1>
        <figure>
          <img
            class="m-auto object-cover w-full max-h-96 rounded-xl"
            src={images[0].url}
            alt={images[0].altText}
          />
          <figcaption class="mt-3 text-center  text-sm">
            <span>{images[0].caption}</span>
            <span class="italic"> {images[0].credit}</span>
          </figcaption>
        </figure>

        <hr class="border-1 border-gray-400 mt-10 mb-10" />

        <div class="grid gap-16">
          {/* Description & Hours */}
          <div class="grid gap-10 md:grid-flow-col">
            <div>
              <p>{description}</p>
              <span class="block mt-4 font-body">{renderStates(states)}</span>
            </div>
            <div class="bg-green-800 text-white p-6 rounded-lg shadow-lg">
              {operatingHoursList}
            </div>
          </div>

          {/* Mapbox */}
          <MapboxGLMap lat={latitude} lon={longitude} />

          {/* Entrance Fees & Weather */}
          <div class="grid md:grid-flow-col gap-10">
            <div class="shadow-lg rounded-lg bg-gray-50">
              <h2 class="px-6 py-3 rounded-t-lg bg-green-800 text-white text-3xl">
                Entrance Fees/ Passes
              </h2>
              <div class="p-6 rounded-b-lg">
                <div>
                  <span class="text-sm block">Fees</span>
                  {entranceFeesList}
                </div>
                <div>
                  <span class="text-sm block mt-6">Fees</span>
                  {entrancePassesList}
                </div>
              </div>
            </div>

            {weather ? (
              <div class="shadow-lg rounded-lg bg-gray-50">
                <h2 class="px-6 py-3 rounded-t-lg bg-blue-400 text-white text-3xl text-center">
                  Weather
                </h2>
                <div class="p-6 rounded-b-lg">
                  <div class="text-center mb-4">
                    <span class="text-sm text-center">Current Weather</span>
                    <span class="block text-5xl">
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
          <div class="grid gap-10 max-w-full">
            <div class="shadow-lg p-6 rounded-b-lg">
              <h2 class="text-3xl mb-4">Activities</h2>
              <ul class="flex flex-wrap gap-3">{activitiesList}</ul>
            </div>

            <div class="shadow-lg p-6 rounded-b-lg">
              <h2 class="text-3xl mb-4">Topics</h2>
              <ul class="flex flex-wrap gap-3">{topicsList}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Layout>{contents}</Layout>;
}

export default ParkPage;
