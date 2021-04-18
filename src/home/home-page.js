import Layout from '../components/Globals/Layout'
import PageHeader from '../common/PageHeader'
import HeroSection from '../components/HomePage/HeroSection'
import SectionOne from '../components/HomePage/SectionOne'
import SectionTwo from '../components/HomePage/SectionTwo'
import SectionThree from '../components/HomePage/SectionThree'
import SectionFour from '../components/HomePage/SectionFour'
import { useState, useEffect } from 'react'
import '../home/home-page.css'

function HomePage({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([])

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData)
  }

  useEffect(() => {
    callback({ searchBarParams })
  }, [searchBarParams])

  return (
    <Layout>
      <div id="content">
        <PageHeader />
        <HeroSection callback={searchBarCallback} />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </Layout>
  )
}
export default HomePage
