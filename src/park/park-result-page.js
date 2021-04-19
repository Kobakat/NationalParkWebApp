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
      content = data.map(({ parkCode, fullName, description, images }) => {
        return (
          <>
            <div key={parkCode}>
              <Link to={`park/${parkCode}`}>
                <div class="flex flex-col md:flex-row gap-4 shadow-lg p-4 rounded-mdbg-white">
                  <img
                    class="rounded-md md:max-w-xs object-cover w-full max-h-64"
                    src={images[0].url}
                    alt={images[0].altText}
                  />
                  <div>
                    <h2 class="text-2xl text-green-900 mb-3">{fullName}</h2>
                    <p class="text-gray-500">{description.slice(0, 100)}...</p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )
      })
    }
  }

  return (
    <Layout>
      <h1>List page</h1>
      <div class="grid grid-cols-2 gap-8 p-4 md:p-10 m-auto">
        <div>{content}</div>
        <div>hello</div>
      </div>
    </Layout>
  )
}

export default ParkResultPage
