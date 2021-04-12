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
        topics: park.topics.map((topic) => {
          return topic.name;
        }),
        activities: park.activities.map((activity) => {
          return activity.name;
        }),
      };
    });

    //Removes any elements of the results that don't contain all the specified filters
    const filteredResults = parks.map((park) => {
      const containsActivity =
        filters.activities.length === 0 ||
        filters.activities.every((r) => park.activities.includes(r));
      console.log(containsActivity);
      const containsTopic =
        filters.topics.length === 0 ||
        filters.topics.every((r) => park.topics.includes(r));
      console.log(containsTopic);
      const containsState =
        filters.states.length === 0 || park.states.includes(filters.states);
      console.log(containsState);
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
