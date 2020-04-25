import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './pages/App';
import Landing from './pages/Landing';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/app">
        <App />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
