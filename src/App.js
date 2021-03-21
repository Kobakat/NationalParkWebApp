import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";
import HomePage from "./home/home-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
