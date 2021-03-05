import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./config/History";

import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Dashboard/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from "./Components/Profile/Profile";

function App() {
  const siteLinks = {
    "about": "About",
    "services": "Services",
    "contact": "Contact",
    "signup": "Sign Up"
  }
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/navbar/" component={() => (<Navbar links={siteLinks} />)} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
