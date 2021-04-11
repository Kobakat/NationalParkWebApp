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
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
}

export { getActivities, getTopics, getStates };
