import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ScrollToTop from "./components/other/ScrollToTop";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/Home";
import Diagnose from "./components/diagnosis/Diagnose";

import "./assets/style.css";

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/diagnosis">
            <Diagnose />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
