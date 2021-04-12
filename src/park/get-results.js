async function getResults(query, { filters }) {
  try {
    const url = `https://developer.nps.gov/api/v1/parks?q=${query}&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`;
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );

    const json = await response.json();

    //Maps the results to an array of relevant information for the result algorithm to determine if it should be displayed
    const parks = json.data.map((park) => {
      return {
        fullName: park.fullName,
        parkCode: park.parkCode,
        states: park.states,
        topics: park.topics,
        activities: park.activities,
      };
    });

    //Removes any elements of the results that don't contain all the specified filters
    const filteredResults = parks.map((park) => {
      const containsActivity =
        filters.activities == null ||
        park.activities.includes(filters.activities);
      const containsTopic =
        filters.topics == null || park.activities.includes(filters.topics);
      const containsState =
        filters.state == null || park.astates.includes(filters.states);

      if (containsActivity && containsTopic && containsState) return park;
      else return null;
    });

    //Removes any null elements of the array created above
    const culledResults = filteredResults.filter((result) => {
      return result;
    });

    return culledResults;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getResults;
