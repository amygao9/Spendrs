import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/settings.css';
import '../../styles/home.css';
import { userLinks, adminLinks, users } from "../../constants";
import { Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import {changeUserPrivacy} from "../../axios/user";
import PasswordModal from "./SettingsModal"
import DeleteModal from "./DeleteAccountModal"
function Settings() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const user = useSelector(state => state.userData);
  const [radioValue, setRadioValue] = useState(user.privacy);
  const [modalShow, setModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const radios = [
    { name: 'Private', value: 'Private' },
    { name: 'Friends Only', value: 'Friends Only' },
    { name: 'Public', value: 'Public' },
  ];
  useEffect( () => {
    if (!user || Object.keys(user).length === 0) {
      return;
    }
    setRadioValue(user.privacy)
    setLoaded(true);
      
  }, [user])

  const logout = () => {
    Cookies.remove('jwt');
    dispatch({ type: 'home/logout' });
    history.push("/");
  }

  const changePrivacy = (e) => {
    setRadioValue(e.currentTarget.value)
    changeUserPrivacy(e.currentTarget.value)
  }
  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  } 
  if (user.admin) {
    return (
      <div>
      <div className='settingsContainer'>
        <Navbar links={adminLinks} />
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

        <h3 className = "headers">Account</h3>
        <div className="list-group-item shadowSmall">
          <div className="settingsInfoContainer">
            <span> Reset Password </span> 
            <Button className="settingsButton" variant="outline-info" onClick={() => setModalShow(true)}> Reset </Button>
            <PasswordModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <br/>
            
          </div>
        </div>
        <div className="list-group-item">
          <Button className="settingsButton" onClick={() => logout()}>Logout</Button>
        </div>
        
      </div>
    </div>
    )

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
            <Button className="settingsButton"  onClick={() => setModalShow(true)}> Reset </Button>
            <PasswordModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>

          <div className="settingsInfoContainer">
            <span> Delete Account </span> 
            <Button className="settingsButton" id = "deleteButton" onClick={() => setDeleteModalShow(true)}>Delete</Button> <br></br>
            <DeleteModal
              show={deleteModalShow}
              onHide={() => setDeleteModalShow(false)}
            />
          </div>
          
        </div>
        <div className="list-group-item shadowSmall">
          <Button className="settingsButton btn-default" onClick={() => logout()}>Logout</Button>
        </div>
      </div>
    </div>
    
  );
}

export default Settings;
