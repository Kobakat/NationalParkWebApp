import HomePage from "./home/home-page";
import ParkPage from "./park/park-page";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import RockClimbingList from "./park/activity-list";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/park/:code" children={<SetParkPage />} />
        <Route path="/activities/:activity" children={<SetActivitiesPage />} />
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
