async function getResults(query, { filters }) {
  try {
    let url
    if (query.length === 0)
      url = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`
    else
      url = `https://developer.nps.gov/api/v1/parks?q=${query}&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      )

    const json = await response.json()

    // console.log(url)
    //Maps the results to an array of relevant information for the result algorithm to determine if it should be displayed
    const parks = json.data.map(
      ({
        fullName,
        parkCode,
        images,
        description,
        latitude,
        longitude,
        states,
        topics,
        activities,
      }) => {
        return {
          fullName: fullName,
          parkCode: parkCode,
          images: images,
          description: description,
          latitude: latitude,
          longitude: longitude,
          states: states.split(','),
          topics: topics.map((topic) => topic.name),
          activities: activities.map((activity) => activity.name),
        }
      }
    )

    const valueFilters = {
      states: filters.states.map((state) => {
        return state.value
      }),

      topics: filters.topics.map((topic) => {
        return topic.value
      }),

      activities: filters.activities.map((activity) => {
        return activity.value
      }),
    }

    //Removes any elements of the results that don't contain all the specified filters
    const filteredResults = parks.map((park) => {
      const containsActivity =
        filters.activities.length === 0 ||
        valueFilters.activities.every((r) => park.activities.includes(r))
      // console.log('activity match: ' + containsActivity)
      const containsTopic =
        filters.topics.length === 0 ||
        valueFilters.topics.every((r) => park.topics.includes(r))
      // console.log('topic match: ' + containsTopic)
      const containsState =
        filters.states.length === 0 ||
        valueFilters.states.every((r) => park.states.includes(r))
      // console.log('state match: ' + containsState)
      if (containsActivity && containsTopic && containsState) return park
      else return null
    })

    //Removes any null elements of the array created above
    const culledResults = filteredResults.filter((result) => result)

    return culledResults
  } catch (err) {
    console.error(err)
    throw err
  }
}
export default getResults
