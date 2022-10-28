import { Route,Switch } from "react-router-dom";

import FavoritesPage from "./pages/Favourite";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  //localhost:3000/ - our domain
  // my-page.com/
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
