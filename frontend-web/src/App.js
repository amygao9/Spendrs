import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./config/History";

import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Home from "./Components/Dashboard/Home";
import Profile from "./Components/Profile/Profile";
import Analytics from "./Components/Analytics/Analytics";
import Settings from "./Components/Settings/Settings";
import Admin from "./Components/Admin/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:username" render={() => <Profile key={Math.random()}/>} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
