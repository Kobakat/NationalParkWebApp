import HomePage from "./home/home-page";
import ParkResultsPage from "./park/park-result-page";
import ParkPage from "./park/park-page";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/park/:code" children={<SetParkPage />} />
        <Route path="/results">
          <ParkResultsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function SetParkPage() {
  let { code } = useParams();
  return <ParkPage parkCode={code}></ParkPage>;
}

export default App;
