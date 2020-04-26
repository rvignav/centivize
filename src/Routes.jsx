import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './pages/App';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Auth from './pages/Auth';
import Demo from './pages/Demo';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/onboarding">
          <Onboarding />
        </Route>
        <Route path="/app">
          <App />
        </Route>
        <Route exact path="/(signin|signup)">
          <Auth />
        </Route>
        <Route exact path="/demo">
          <Demo />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
