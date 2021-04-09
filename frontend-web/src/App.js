import React, { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./config/History";

import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Home from "./Components/Dashboard/Home";
import Profile from "./Components/Profile/Profile";
import Analytics from "./Components/Analytics/Analytics";
import Settings from "./Components/Settings/Settings";
import Admin from "./Components/Admin/Admin";
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getUserData } from "./reducers/userDataReducer";
import OthersProfile from "./Components/Profile/OthersProfile";

function App() {
  const loggedIn = useSelector(state => state.loggedIn.loggedIn);
  const userData = useSelector(state => state.userData);
  console.log('userData :>> ', userData);
  const dispatch = useDispatch();
  
  useEffect(async () => {
    const logout = () => {
      Cookies.remove('jwt');
      dispatch({ type: 'home/logout' });
      history.push("/");
    }

    const authenticate = () => {
      let jwt = Cookies.get('jwt');
      if (jwt && jwt !== undefined) {
        dispatch({ type: 'loggedIn/login'});
      } else {
        console.log("LOGGING OUT");
        logout();
      }
    }

    authenticate();
    try {
      const result = await dispatch(getUserData);
      console.log('result :>> ', result);
      console.log('userData :>> ', userData);
    } catch (err) {
      console.log('err :>> ', err);
      logout();
    }
  }, []);




  return (
    <Router history={history}>
      <div className="app">
        {
          loggedIn & !userData.admin ? 
          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:username" component={OthersProfile} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />
          </Switch> :
          loggedIn & userData.admin ?
          <Switch>
            <Route exact path="/" component={Admin} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
          :
          <Switch>
            <Route path="/" component={WelcomePage} />
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
