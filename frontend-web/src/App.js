import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./config/History";

import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Dashboard/Home";
import Profile from "./Components/Profile/Profile";
import Analytics from "./Components/Analytics/Analytics";
import Settings from "./Components/Settings/Settings";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const siteLinks = {
    dashboard: "Feed",
    analytics: "Analytics",
    profile: "Profile",
    settings: "Settings",
  };
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/navbar/"
            component={() => <Navbar links={siteLinks} />}
          />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
