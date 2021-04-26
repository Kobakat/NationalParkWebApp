import HomePage from "./home/home-page";
import ParkResultsPage from "./park/park-result-page";
import ParkPage from "./park/park-page";
import { useState } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import RockClimbingList from "./park/activity-list";
import useGetNpsNews from "./hooks/use-get-nps-news";

function App() {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  // console.log(searchBarParams);
  useGetNpsNews();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage callback={searchBarCallback} />
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
