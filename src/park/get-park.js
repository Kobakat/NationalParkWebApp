async function getPark(code) {
  try {
    const url = `https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=Cy9A26aUd3kGBHQMyt9MonLzWyxCDu5aO49JJ0v0`
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      )

    const json = await response.json()
    //TODO throw an error if the json file we got back was bad
    const {
      fullName,
      description,
      topics,
      activities,
      addresses,
      weatherInfo,
      images,
      entranceFees,
      entrancePasses,
      operatingHours,
      name,
      designation,
      states,
    } = json.data[0]
    console.log(json.data[0])
    return [
      fullName,
      description,
      topics,
      activities,
      addresses,
      weatherInfo,
      images,
      entranceFees,
      entrancePasses,
      operatingHours,
      name,
      designation,
      states,
    ]
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default getPark
