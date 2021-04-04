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
        <Route path="/park/:id" children={<Child />}>
          <ParkPage />
        </Route>
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
