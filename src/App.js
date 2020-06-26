import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ScrollToTop from "./components/other/ScrollToTop";
import NavBar from "./components/navigation/NavBar";

import "./assets/style.css";

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/">
              hello
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Router>
    </React.StrictMode>
  );
}
