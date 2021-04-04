import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";
import HomePage from "./home/home-page";
import ParkPage from "./park/park-page";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/park/:code" children={<SetParkPage />} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}

function SetParkPage() {
  let { code } = useParams();
  return <ParkPage parkCode={code}></ParkPage>;
}

export default App;
