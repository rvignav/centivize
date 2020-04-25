import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase/firebase.utils';

import Home from '../components/Home';
import Search from '../components/Search';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Location from '../components/Location';
import Footer from '../components/Footer';

const App = () => {
  const [user, initializing] = useAuthState(auth);

  if (!initializing && !user) {
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
          <Redirect to="/app/home" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
