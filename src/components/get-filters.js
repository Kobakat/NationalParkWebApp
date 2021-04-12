async function getActivities() {
  try {
    const url = `https://developer.nps.gov/api/v1/activities?&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`;
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );

    const json = await response.json();

    const activityNames = json.data.map((activity) => {
      return activity.name;
    });

    return activityNames;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function getTopics() {
  try {
    const url = `https://developer.nps.gov/api/v1/topics?&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`;
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );

    const json = await response.json();

    const topicNames = json.data.map((topic) => {
      return topic.name;
    });

    return topicNames;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

//Lmao theres 1000% a non troll way to do this
function getStates() {
  return [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
}

export { getActivities, getTopics, getStates };
