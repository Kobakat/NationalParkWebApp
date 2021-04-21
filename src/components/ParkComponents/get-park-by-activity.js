async function getParkByActivity(activity) {
  try {
    const url = `https://developer.nps.gov/api/v1/activities/parks?q=${activity}&api_key=NE9daU857wylgvJNHNamHQjl8ReqlKDav0jFu5vu`;
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );

    const json = await response.json();
    const data = json.data[0].parks;

    console.log(data);

    return [data];

    
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getParkByActivity;
