import './park-page.css'
import { useState, useEffect } from 'react'
import Nav from '../components/HomePage/NavBar'
import FooterSection from '../components/HomePage/FooterSection'
import getPark from './get-park'
import useWeather from '../hooks/use-weather'

function ParkPage({ parkCode }) {
  const [parkFetch, setParkFetch] = useState({
    isLoading: true,
    errorMessage: '',
    data: null,
    zipCode: 60659,
  })

  useEffect(() => {
    async function loadPark() {
      setParkFetch({
        isLoading: true,
        errorMessage: '',
        data: null,
      })

      try {
        const park = await getPark(parkCode)
        setParkFetch({
          isLoading: false,
          errorMessage: '',
          data: park,
          zipCode: park[4][0].postalCode,
        })
      } catch (err) {
        setParkFetch({
          isLoading: false,
          errorMessage:
            'Something went wrong loading the park. Please try again later.',
          data: null,
        })
      }
    }
    loadPark()
  }, [])

  const { isLoading, errorMessage, data, zipCode } = parkFetch

  const [weather] = useWeather(zipCode)
  let contents
  if (isLoading) {
    contents = <div>Loading Park</div>
  } else if (errorMessage !== '') {
    contents = <div>{errorMessage}</div>
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
      name,
      designation,
      states,
    ] = data

    //ACTIVITIES ARRAY
    let activitiesList
    if (data !== null) {
      activitiesList = activities.map((activity) => (
        <li class="bg-green-700 text-white px-4 py-2 rounded-md">
          {activity.name}
        </li>
      ))
    }

    //TOPICS ARRAY
    let topicsList
    if (data !== null) {
      topicsList = topics.map((topic) => (
        <li class="bg-green-700 text-white px-4 py-2 rounded-md">
          {topic.name}
        </li>
      ))
    }

    //ENTRANCEFEES ARRAY
    let entranceFeesList
    if (data !== null) {
      entranceFeesList = entranceFees.map((fee) => {
        return (
          <div class="font-sans">
            <span class="font-bold">${fee.cost} | </span>
            <span>{fee.description}</span>
          </div>
        )
      })
    }
    //ENTRANCEPASSES ARRAY
    let entrancePassesList
    if (data !== null) {
      entrancePassesList = entrancePasses.map((pass) => {
        return (
          <div class="font-sans">
            <span class="font-bold">${pass.cost} | </span>
            <span>{pass.description}</span>
          </div>
        )
      })
    }
    //OPERATING HOURS ARRAY
    let operatingHoursList
    if (data !== null) {
      operatingHoursList = (
        <div>
          <h2 class="text-3xl">Hours</h2>
          <div>Monday: {operatingHours[0].standardHours.monday}</div>
          <div>Tuesday: {operatingHours[0].standardHours.tuesday}</div>
          <div>Wednesday: {operatingHours[0].standardHours.wednesday}</div>
          <div>Thursday: {operatingHours[0].standardHours.thursday}</div>
          <div>Friday: {operatingHours[0].standardHours.friday}</div>
          <div>Saturday: {operatingHours[0].standardHours.saturday}</div>
          <div>Sunday: {operatingHours[0].standardHours.sunday}</div>
        </div>
      )
    }

    // FIXME: add 's' to State(s) - count number of states and if it is greater than 1, add an 's' to state
    const renderStates = (states) => {
      let numStates = [states].length
      let str
      if (numStates > 1) {
        str = `States: ${states}`
      } else {
        str = `State: ${states}`
      }

      return str
    }

    contents = (
      <div class="m-auto p-8 lg:max-w-screen-lg text-yellow-900">
        <span class="block text-center text-yellow-900">{designation}</span>
        <h1 class="text-3xl lg:text-7xl text-center mb-4">{name}</h1>
        <figure>
          <img
            class="m-auto object-cover w-full max-h-96 rounded-xl"
            src={images[0].url}
            alt={images[0].altText}
          />
          <figcaption class="mt-3 text-center font-sans text-sm">
            <span>{images[0].caption}</span>
            <span class="italic"> {images[0].credit}</span>
          </figcaption>
        </figure>

        <hr class="border-1 border-gray-400 mt-10 mb-10" />

        <div class="grid gap-16">
          <div class="grid gap-10 md:grid-flow-col">
            <h4 class="font-sans">
              {description}
              <span class="block mt-4">{renderStates(states)}</span>
            </h4>
            <div class="bg-green-800 text-white p-6 rounded-lg shadow-lg">
              {operatingHoursList}
            </div>
          </div>

          <div class="grid md:grid-flow-col gap-10">
            <div class="shadow-lg">
              <h2 class="px-6 py-3 rounded-t-lg bg-green-800 text-white text-3xl">
                Entrance Fees/ Passes
              </h2>
              <div class="bg-gray-50 p-6 rounded-b-lg">
                <div>{entranceFeesList}</div>
                <div>{entrancePassesList}</div>
              </div>
            </div>

            <div class="shadow-lg text-center bg-blue-400 rounded-lg p-6 text-white">
              <h2 class="text-3xl">Weather</h2>
              <span class="block text-5xl mt-4">62°F</span>
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
              <p>{weatherInfo}</p>
            </div>
          </div>

          <div class="grid gap-10 max-w-full">
            <div class="shadow-lg p-6">
              <h2 class="text-3xl mb-4">Activities</h2>
              <ul class="flex flex-wrap gap-3">{activitiesList}</ul>
            </div>

            <div class="shadow-lg p-6">
              <h2 class="text-3xl mb-4">Topics</h2>
              <ul class="flex flex-wrap gap-3">{topicsList}</ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      {contents}
      <FooterSection />
    </div>
  )
}

export default ParkPage
