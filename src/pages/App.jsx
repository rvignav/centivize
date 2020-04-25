import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Search from './Search'
import Post from './Post'
import Profile from './Profile'
import Footer from '../components/Footer'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/app/home" component={Home} />
        <Route path="/app/home" component={Search} />
        <Route path="/app/post" component={Post} />
        <Route path="/app/profile" component={Profile} />
      </Switch>
      <Footer />
    </div>
  </Router>

);

export default App;
