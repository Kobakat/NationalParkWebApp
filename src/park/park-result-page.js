import getResults from './get-results'
import './park-result-page.css'
import Layout from '../components/Globals/Layout'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ParkResultPage({ search }) {
  const [resultFetch, setResultFetch] = useState({
    isLoading: true,
    errorMessage: '',
    data: null,
  })

  //Todo fucking fix me
  const { query } = search.searchBarParams.searchBarParams.params
  const {
    activities,
    topics,
    states,
  } = search.searchBarParams.searchBarParams.params

  const filters = {
    activities: activities,
    topics: topics,
    states: states,
  }

  useEffect(() => {
    async function fetchResults() {
      setResultFetch({
        isLoading: true,
        errorMessage: '',
        data: null,
      })

      try {
        const results = await getResults(query, { filters })
        setResultFetch({
          isLoading: false,
          errorMessage: '',
          data: results,
        })
      } catch (err) {
        setResultFetch({
          isLoading: false,
          errorMessage:
            'Something went wrong loading the park. Please try again later.',
          data: null,
        })
      }
    }
    fetchResults()
  }, [])

  let content
  const { data } = resultFetch

  if (data !== null) {
    if (data.length === 0) content = <p>No Parks found</p>
    else {
      content = data.map((parks) => {
        return (
          <>
            <div className="foo" key={parks.parkCode}>
              <Link to={`park/${parks.parkCode}`}>
                <button className="bar">{parks.fullName}</button>
              </Link>
            </div>
          </>
        )
      })
    }
  }

  return (
    <Layout>
      <div class="grid grid-rows-2 gap-4 max-w-screen-xl m-auto">
        <h1>List page</h1>
        {content}
      </div>
    </Layout>
  )
}

export default ParkResultPage
