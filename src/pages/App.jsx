import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase/firebase.utils';

import Home from './Home';
import Search from './Search';
import Post from './Post';
import Profile from './Profile';
import Footer from '../components/Footer';

const App = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Redirect to="/app/onboarding" />;
  }

  // const isOnboarding = useRouteMatch('/app/:slug') === 'onboarding';

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/app/home" component={Home} />
          <Route path="/app/search" component={Search} />
          <Route path="/app/post" component={Post} />
          <Route path="/app/profile" component={Profile} />
        </Switch>
        {}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
