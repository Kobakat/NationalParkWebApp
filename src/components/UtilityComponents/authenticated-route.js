import { Route } from "react-router";
import { Link } from "react-router-dom";

function NotLoggedInContent() {
  return (
    <main>
      <h1>Not Logged In</h1>
      <p>
        You need to sign in. Head to the <Link to="/">homepage</Link>
      </p>
    </main>
  );
}

function AuthenticatedRoute({ children, user, ...routeProps }) {
  const userExists = user !== undefined && user !== null;
  return (
    <Route {...routeProps}>
      {userExists ? children : <NotLoggedInContent />}
    </Route>
  );
}

export default AuthenticatedRoute;
