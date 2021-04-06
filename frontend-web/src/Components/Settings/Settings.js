import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/settings.css';
import '../../styles/home.css';
import { userLinks, users } from "../../constants";
import { Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import {changeUserPrivacy} from "../../axios/user";

function Settings() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const user = useSelector(state => state.userData);
  const [radioValue, setRadioValue] = useState(user.privacy);

  const radios = [
    { name: 'Private', value: 'Private' },
    { name: 'Friends Only', value: 'Friends Only' },
    { name: 'Public', value: 'Public' },
  ];

  const logout = () => {
    Cookies.remove('jwt');
    dispatch({ type: 'LOGOUT' });
    history.push("/");
  }

  const changePrivacy = (e) => {
    setRadioValue(e.currentTarget.value)
    changeUserPrivacy(e.currentTarget.value)
  }
  if (!user) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  } 

  return (
    <div>
      <div className='settingsContainer'>
        <Navbar links={userLinks} />
        <h3 className = "headers"> Profile Information</h3>
        <div id = "users" className="list-group-item shadowSmall">
                  <Link to={`/profile`}>
                      <h5 className="mb-">{user.name}</h5>
                  </Link>
                  <p className="mb-1">Username: @{user.username}</p>
                  <p className="mb-1">Email: {user.email}</p>
                  <p className="mb-1">Date Registered: {user.createdAt.slice(0,10)}</p>
                  {/* <Button onClick={() => props.handleDelete(user.username)} className="btn-default" id = "deleteButton"> Delete user</Button> */}
        </div>

        <h3 className = "headers">Preferences</h3>
        <div className="list-group-item shadowSmall">
          <h5> Post Privacy </h5>
          <span> Who can see your posts: </span>
            <ButtonGroup toggle className = "selectionButtons">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio" 
                  variant="light"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={e => changePrivacy(e)}
                  id = "selectionButtons"
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
        </div>

        <h3 className = "headers">Account</h3>
        <div className="list-group-item shadowSmall">
          <div className="settingsInfoContainer">
            <span> Reset Password </span> 
            <Button className="settingsButton" variant="outline-info" onClick={() => console.log("Reset")}> Reset </Button>
          </div>

          <div className="settingsInfoContainer">
            <span> Delete Account </span> 
            <Button className="settingsButton" variant="outline-danger" onClick={() => console.log("Delete")}>Delete</Button> <br></br>
          </div>
        </div>
        <Button className="settingsButton" variant="outline-info" onClick={() => logout()}>LOGOUT</Button>
      </div>
    </div>
    
  );
}

export default Settings;
