import Arts from "../components/HomePage/images/pexels-valeria-ushakova-3094218.jpg";
import Astronomy from "../components/HomePage/images/pexels-tomáš-malík-1703314.jpg";
import Atv from "../components/HomePage/images/pexels-athena-2986384.jpg";
import Biking from "../components/HomePage/images/pexels-mike-1174103.jpg";
import Boating from "../components/HomePage/images/pexels-oliver-sjöström-1122462.jpg";
import Camping from "../components/HomePage/images/pexels-cottonbro-5993950.jpg";
import Canyoneering from "../components/HomePage/images/pexels-dziana-hasanbekava-5480815.jpg";
import Caving from "../components/HomePage/images/pexels-adil-2801579.jpg";
import Climbing from "../components/HomePage/images/pexels-regina-jane-1824649.jpg";
import Compass from "../components/HomePage/images/pexels-supushpitha-atapattu-1736222.jpg";
import DogSledding from "../components/HomePage/images/pexels-chepté-cormani-1499215.jpg";
import Fishing from "../components/HomePage/images/pexels-luiz-fernando-3728396.jpg";
import Flying from "../components/HomePage/images/pexels-prashant-gautam-3783385.jpg";
import Food from "../components/HomePage/images/pexels-elevate-1267239.jpg";
import Golfing from "../components/HomePage/images/pexels-tom-jackson-2891910.jpg";
import Guided from "../components/HomePage/images/pexels-te-lensfix-1371360.jpg";
import HandsOn from "../components/HomePage/images/pexels-gregory-whitcoe-718324.jpg";
import Hiking from "../components/HomePage/images/pexels-dziana-hasanbekava-5589433.jpg";
import Horse from "../components/HomePage/images/pexels-pixabay-162520.jpg";
import Hunting from "../components/HomePage/images/pexels-erik-karits-4219684.jpg";
import IceSkating from "../components/HomePage/images/pexels-gantas-vaičiulėnas-3737687.jpg";
import JuniorRanger from "../components/HomePage/images/pexels-maël-balland-3195777.jpg";
import LivingHistory from "../components/HomePage/images/pexels-jeanetta-richardsonanhalt-6555730.jpg";
import Museum from "../components/HomePage/images/pexels-julia-volk-5272995.jpg";
import Paddling from "../components/HomePage/images/pexels-thilo-lehnert-3413678.jpg";
import ParkFilm from "../components/HomePage/images/pexels-anastasia-shuraeva-4100797.jpg";
import Playground from "../components/HomePage/images/pexels-krivec-ales-552168.jpg";
import Scuba from "../components/HomePage/images/pexels-tirachard-kumtanom-887826.jpg";
import Shopping from "../components/HomePage/images/pexels-maria-orlova-4947110.jpg";
import Skiing from "../components/HomePage/images/pexels-pixabay-209878.jpg";
import Snorkeling from "../components/HomePage/images/pexels-elaine-bernadine-castro-2403840.jpg";
import Snowplay from "../components/HomePage/images/pexels-irina-kajdakowska-3727742.jpg";
import Snowmobiling from "../components/HomePage/images/pexels-jenny-uhling-4335754.jpg";
import Snowshoeing from "../components/HomePage/images/pexels-maël-balland-3604917.jpg";
import Surfing from "../components/HomePage/images/pexels-jess-vide-4611990.jpg";
import Swimming from "../components/HomePage/images/pexels-jondave-libiran-2405639.jpg";
import Team from "../components/HomePage/images/pexels-andrea-piacquadio-3755440.jpg";
import Tubing from "../components/HomePage/images/pexels-must-bee-1305095.jpg";
import WaterSkiing from "../components/HomePage/images/pexels-francesco-ungaro-6793642.jpg";
import WildlifeWatching from "../components/HomePage/images/pexels-burst-374719.jpg";

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
    {
      name: "Arts and Culture",
      URL: Arts,
      tag: "Embrace culture",
    },
    {
      name: "Astronomy",
      URL: Astronomy,
      tag: "Explore the unexplored",
    },
    {
      name: "Auto and ATV",
      URL: ATV,
      tag: "Feel the road",
    },
    {
      name: "Biking",
      URL: Biking,
      tag: "Exercise with a view",
    },
    {
      name: "Boating",
      URL: Boating,
      tag: "A day on the lake",
    },
    {
      name: "Camping",
      URL: Camping,
      tag: "Night by the fire",
    },
    {
      name: "Canyoneering",
      URL: Canyoneering,
      tag: "Explore together",
    },
    {
      name: "Caving",
      URL: Caving,
      tag: "Uncover the depths",
    },
    {
      name: "Climbing",
      URL: Climbing,
      tag: "Reach new heights",
    },
    {
      name: "Compass and GPS",
      URL: Compass,
      tag: "Find your destination",
    },
    {
      name: "Dog Sledding",
      URL: DogSledding,
      tag: "Mans best friend",
    },
    {
      name: "Fishing",
      URL: Fishing,
      tag: "Lifelong memories",
    },
    {
      name: "Flying",
      URL: Flying,
      tag: "Soar to new heights",
    },
    {
      name: "Food",
      URL: Food,
      tag: "Refuel on your hike",
    },
    {
      name: "Golfing",
      URL: Golfing,
      tag: "Shoot your shot",
    },
    {
      name: "Guided Tours",
      URL: Guided,
      tag: "Explore together",
    },
    {
      name: "Hands-On",
      URL: HandsOn,
      tag: "Feel the earth",
    },
    {
      name: "Hiking",
      URL: Hiking,
      tag: "Till you can't stop",
    },
    {
      name: "Horse Trekking",
      URL: Horse,
      tag: "Saddle up!",
    },
    {
      name: "Hunting and Gathering",
      URL: Hunting,
      tag: "Foraging",
    },
    {
      name: "Ice Skating",
      URL: IceSkating,
      tag: "A winter wonderland!",
    },
    {
      name: "Junior Ranger Program",
      URL: JuniorRanger,
      tag: "Start em' young!",
    },
    {
      name: "Living History",
      URL: LivingHistory,
      tag: "A part of us",
    },
    {
      name: "Museum Exhibits",
      URL: Museum,
      tag: "Uncover the past",
    },
    {
      name: "Paddling",
      URL: Paddling,
      tag: "Fun for kids!",
    },
    {
      name: "Park Film",
      URL: ParkFilm,
      tag: "The perfect shot",
    },
    {
      name: "Playground",
      URL: Playground,
      tag: "Great for kids!",
    },
    {
      name: "SCUBA Diving",
      URL: Scuba,
      tag: "Dive deep",
    },
    {
      name: "Shopping",
      URL: Shopping,
      tag: "Take home memories",
    },
    {
      name: "Skiing",
      URL: Skiing,
      tag: "Ride the slopes",
    },
    {
      name: "Snorkeling",
      URL: Snorkeling,
      tag: "Explore the depths",
    },
    {
      name: "Snow Play",
      URL: Snowplay,
      tag: "Winter vibes",
    },
    {
      name: "Snowmobiling",
      URL: Snowmobiling,
      tag: "Feed your adrenaline",
    },
    {
      name: "Snowshoeing",
      URL: Snowshoeing,
      tag: "Make your trails",
    },
    {
      name: "Surfing",
      URL: Surfing,
      tag: "Find your waves",
    },
    {
      name: "Swimming",
      URL: Swimming,
      tag: "Family fun",
    },
    {
      name: "Team Sports",
      URL: Team,
      tag: "Friendly competition",
    },
    {
      name: "Tubing",
      URL: Tubing,
      tag: "River thrills",
    },
    {
      name: "Water Skiing",
      URL: WaterSkiing,
      tag: "A day on the lake",
    },
    {
      name: "Wildlife Watching",
      URL: WildlifeWatching,
      tag: "Embrace life",
    },
  ];
}

function topicSet() {
  //Todo
}

export default getRandomActivitySet;
