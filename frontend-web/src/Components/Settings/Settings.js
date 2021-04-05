import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/settings.css';
import '../../styles/home.css';
import { userLinks, users } from "../../constants";
import { Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";

function Settings() {
  const dispatch = useDispatch();
  const history = useHistory();
  let user = users["Alex Shih"]
  const [radioValue, setRadioValue] = useState('1');
  const userStatus = useSelector(state => state.userStatus);

  const radios = [
    { name: 'Private', value: '1' },
    { name: 'Friends Only', value: '2' },
    { name: 'Public', value: '3' },
  ];

  const logout = () => {
    Cookies.remove('jwt');
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: "CLEAR_USER_STATUS" });
    history.push("/");
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
                  <p className="mb-1">Date Registered: {user.register_date}</p>
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
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
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
            <Button className="settingsButton" variant="outline-info"> Reset </Button>
          </div>

          <div className="settingsInfoContainer">
            <span> Delete Account </span> 
            <Button className="settingsButton" variant="outline-danger">Delete</Button> <br></br>
          </div>
        </div>
        <Button className="settingsButton" variant="outline-info" onClick={() => logout()}>LOGOUT</Button>
      </div>
    </div>
    
  );
}

export default Settings;
