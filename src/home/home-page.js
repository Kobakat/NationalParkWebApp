import { React, useState } from 'react'
import NavBar from '../components/HomePage/NavBar'
import PageHeader from '../common/PageHeader'
import HeroSection from '../components/HomePage/HeroSection'
import SectionOne from '../components/HomePage/SectionOne'
import SectionTwo from '../components/HomePage/SectionTwo'
import SectionThree from '../components/HomePage/SectionThree'
import SectionFour from '../components/HomePage/SectionFour'
import PageFooter from '../components/HomePage/FooterSection'
import '../home/home-page.css'

function HomePage() {
  const [searchParams, setSearchParams] = useState({
    query: null,
    params: null,
  })
  const [parkData, setParkData] = useState(null)

  const getData = (query, params) => {
    setSearchParams({
      query: query,
      params: params,
    })
  }

  const getParkData = async (query, params) => {
    const url = `https://developer.nps.gov/api/v1/parks?q=${query}&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`
    try {
      const data = await fetch(url)
      const parkJson = await data.json()
      console.log(parkJson)
      if (parkJson !== null) setParkData(parkJson)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <NavBar />
      <div id="content">
        <PageHeader />
        <HeroSection />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <PageFooter />
      </div>
    </>
  )
}

export default HomePage
