import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../components/Home';
import Search from '../components/search/Search';
import Post from '../components/posts/Post';
import Profile from '../components/Profile';
import Footer from '../components/footer/Footer';
import { useFirstTime, useLoggedIn } from '../hooks/auth';

const App = () => {
  const [loggedIn, loadingLoggedIn] = useLoggedIn();
  const [firstTime, loadingFirstTime] = useFirstTime();

  if (!loadingLoggedIn && !loggedIn) {
    return <Redirect to="/" />;
  }

  if (!loadingFirstTime && firstTime) { // TODO: uncomment for production
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
          <Redirect to="/app/home" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
