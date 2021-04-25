//O(1) fetch
function getRandomActivitySet() {
  const activities = activitySet();
  const randomActivities = new Array(3);
  const indexes = new Array(40);
  let max = 39;

  for (let i = 0; i < indexes.length; i++) {
    indexes[i] = i;
  }

  shuffle(indexes);

  for (let i = 0; i < randomActivities.length; i++) {
    const selectionIndex = Math.floor(Math.random() * max);
    randomActivities[i] = activities[selectionIndex];

    const temp = activities[max]; //store the current max index value
    activities[max] = activities[selectionIndex]; //swap the selection possibility with the selected index
    activities[selectionIndex] = temp;

    max--; //decrement max so our currently selected activity can't be slected again
  }

  return randomActivities;
}

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[swapIndex];
    shuffledArray[swapIndex] = temp;
  }
  return shuffledArray;
}

function activitySet() {
  return [
    { name: "Arts and Culture", URL: "", tag: "" },
    { name: "Astronomy", URL: "", tag: "" },
    { name: "Auto and ATV", URL: "", tag: "" },
    { name: "Biking", URL: "", tag: "" },
    { name: "Boating", URL: "", tag: "" },
    { name: "Camping", URL: "", tag: "" },
    { name: "Canyoneering", URL: "", tag: "" },
    { name: "Caving", URL: "", tag: "" },
    { name: "Climbing", URL: "", tag: "" },
    { name: "Compass and GPS", URL: "", tag: "" },
    { name: "Dog Sledding", URL: "", tag: "" },
    { name: "Fishing", URL: "", tag: "" },
    { name: "Flying", URL: "", tag: "" },
    { name: "Food", URL: "", tag: "" },
    { name: "Golfing", URL: "", tag: "" },
    { name: "Guided Tours", URL: "", tag: "" },
    { name: "Hands-On", URL: "", tag: "" },
    { name: "Hiking", URL: "", tag: "" },
    { name: "Horse Trekking", URL: "", tag: "" },
    { name: "Hunting and Gathering", URL: "", tag: "" },
    { name: "Ice Skating", URL: "", tag: "" },
    { name: "Junior Ranger Program", URL: "", tag: "" },
    { name: "Living History", URL: "", tag: "" },
    { name: "Museum Exhibits", URL: "", tag: "" },
    { name: "Paddling", URL: "", tag: "" },
    { name: "Park Film", URL: "", tag: "" },
    { name: "Playground", URL: "", tag: "" },
    { name: "SCUBA Diving", URL: "", tag: "" },
    { name: "Shopping", URL: "", tag: "" },
    { name: "Skiing", URL: "", tag: "" },
    { name: "Snorkeling", URL: "", tag: "" },
    { name: "Snow Play", URL: "", tag: "" },
    { name: "Snowmobiling", URL: "", tag: "" },
    { name: "Snowshoeing", URL: "", tag: "" },
    { name: "Surfing", URL: "", tag: "" },
    { name: "Swimming", URL: "", tag: "" },
    { name: "Team Sports", URL: "", tag: "" },
    { name: "Tubing", URL: "", tag: "" },
    { name: "Water Skiing", URL: "", tag: "" },
    { name: "Wildlife Watching", URL: "", tag: "" },
  ];
}

function topicSet() {
  //Todo
}

export default getRandomActivitySet;
