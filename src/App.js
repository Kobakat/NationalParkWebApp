import HomePage from "./components/HomePage/home-page";
import ParkResultsPage from "./components/ParkComponents/park-result-page";
import ParkPage from "./components/ParkComponents/park-page";
import AboutPage from "./components/AboutPage/AboutPage";
import { useState } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";


import useGetNpsNews from "./hooks/use-get-nps-news";
import RockClimbingList from "./components/ParkComponents/activity-list";

function App() {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  // console.log(searchBarParams);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage callback={searchBarCallback} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/park/:code" children={<SetParkPage />} />
        <Route path="/activities/:activity" children={<SetActivitiesPage />} />
        <Route path="/results">
          <ParkResultsPage search={searchBarParams} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function SetParkPage() {
  let { code } = useParams();
  return <ParkPage parkCode={code}></ParkPage>;
}

function SetActivitiesPage() {
  let { activity } = useParams();
  return <RockClimbingList activity={activity} />;
}

export default App;
