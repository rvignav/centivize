import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../components/Home';
import Search from '../components/Search';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Location from '../components/Location';
import Steem from '../components/Steem';
import Footer from '../components/Footer';
import { useFirstTime, useLoggedIn } from '../hooks/auth';

const App = () => {
  const [loggedIn, loadingLoggedIn] = useLoggedIn();
  const [firstTime, loadingUserData] = useFirstTime();

  if (!loadingLoggedIn && !loggedIn) {
    return <Redirect to="/" />;
  }

  if (!loadingUserData && firstTime) {
    return <Redirect to="/onboarding" />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/app/home" component={Home} />
          <Route path="/app/search" component={Search} />
          <Route path="/app/post" component={Post} />
          <Route path="/app/profile" component={Profile} />
          <Route path="/app/location" component={Location} />
          <Route path="/app/steem" component={Steem} />
          <Redirect to="/app/home" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
