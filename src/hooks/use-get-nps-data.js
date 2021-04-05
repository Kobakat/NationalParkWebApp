import { useEffect, useState } from 'react'

const API_KEY = 'NE9daU857wylgvJNHNamHQjl8ReqlKDav0jFu5vu'

// Utility fn: fetch JSON data
async function fetchJson(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `Something went wrong, server responded with ${response.status}.`
    )
  }
  const json = await response.json()
  return json
}

// Hook
function useGetNPSData(name, state, activity, topic) {
  const [NPSFetch, setNPSFetch] = useState({
    isLoading: true,
    errorMessage: '',
    data: null,
  })

  useEffect(() => {
    async function getNPS() {
      try {
        // Docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const params = new URLSearchParams({ name })
        if (state !== '') params.append('state', state)
        const url = `https://developer.nps.gov/api/v1/parks?${params.toString()}api_key=${API_KEY}`

        const json = await fetchJson(url)
        const { response_code, results } = json

        if (response_code === 1) {
          throw new Error('Bad API request - no results!')
        } else if (response_code === 2) {
          throw new Error('Bad API request - invalid parameter!')
        }

        // Successfully passed all the errors checks!
        setNPSFetch({
          isLoading: false,
          errorMessage: '',
          data: results,
        })
      } catch (err) {
        // Display a generic error message.
        setNPSFetch({
          isLoading: false,
          errorMessage:
            'Something went wrong loading the quiz. Please try again later.',
          data: null,
        })
        // Display specific error for debugging in the console.
        console.error(err)
      }
    }
    getNPS()
  }, [name, state, activity, topic])

  // Hooks can return anything they want, but it is common to return an
  // array, so that the consumer can destructure multiple pieces of data
  // into local variables.
  const { isLoading, errorMessage, data } = NPSFetch
  return [isLoading, errorMessage, data]
}

export default useGetNPSData
