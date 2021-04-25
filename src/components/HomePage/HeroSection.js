import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import './section-hero.css'
// import HeroPicture from './images/yosemitevalley.png'

function HeroSection({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([])

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData)
  }

  useEffect(() => {
    callback({ searchBarParams })
  }, [searchBarParams])

  return (
    <main className="bg-image-home">
      <SearchBar callback={searchBarCallback} />
      {/* <img class='bg-none' src={HeroPicture} alt="Yellowstone National Park" /> */}
    </main>
  )
}
export default HeroSection
