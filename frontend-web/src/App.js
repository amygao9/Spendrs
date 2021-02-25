import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./config/History";

import WelcomePage from "./WelcomePage/WelcomePage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/Navbar/" component={Navbar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
