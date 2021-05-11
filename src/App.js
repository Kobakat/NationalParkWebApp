import HomePage from "./components/HomePage/home-page";
import ParkResultsPage from "./components/ParkComponents/park-result-page";
import ParkPage from "./components/ParkComponents/park-page";
import AboutPage from "./components/AboutPage/AboutPage";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import RockClimbingList from "./components/ParkComponents/activity-list";
import FAQPage from "./components/FAQPage/FAQPage";
import AccountPage from "./components/AccountPage/AccountPage";
import useUser from "./hooks/use-user";
import { auth } from "./firebase/firebase";
import { SearchProvider } from "./components/hooks/use-search";
import EventsPage from "./components/EventsPage/EventsPage";
import AuthenticatedRoute from "./components/UtilityComponents/authenticated-route";

function App() {
  const user = useUser(auth);

  return (
    <BrowserRouter>
      <SearchProvider>
        <Switch>
          <Route path="/" exact>
            <HomePage user={user} />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <AuthenticatedRoute user={user} path="/account">
            <AccountPage />
          </AuthenticatedRoute>
          <Route path="/park/:code" children={<SetParkPage />} />
          <Route
            path="/activities/:activity"
            children={<SetActivitiesPage />}
          />
          <Route path="/results">
            <ParkResultsPage />
          </Route>
        </Switch>
      </SearchProvider>
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
