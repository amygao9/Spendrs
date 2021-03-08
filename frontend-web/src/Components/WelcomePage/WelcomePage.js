import { useState, useEffect } from 'react';
import * as React from "react";
import '../../styles/welcome.css';
import blob from '../../assets/blob.svg';
import threeCharacters from '../../assets/3characters.svg'
import RegistrationModal from './Registration'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"

function WelcomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    if (data["username"] == "user" & data["password"] == "user") {
      console.log(data);
      history.push('/dashboard')
    }
  }
  return (
    <div id={"background"}>
      <div id={"leftSide"}>
        <div id={"welcomeText"}>
          <h1 className="welcomeTitle">
            Welcome&nbsp;to<br/>Spendr
          </h1>
          <h3 className="welcomeSubTitle">
            Track your spendings <br/>
            Share your cops
          </h3>
        </div>
      </div>

      <div>
        <img src={blob} id={'blob'}/>
        <img src={threeCharacters} id={'threeCharacters'}/>
      </div>

      <div id={'rightSide'}>
        <div id={'loginCard'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input ref ={register} className="inputBox" type="text" name="username" placeholder={"Username"}></input>
            <input ref ={register} className="inputBox" type="password" name="password" placeholder={"Password"}></input>
            <input className="inputBox" type={"submit"} id={"loginBtn"} value={"Log In"}/>
          </form>
          <button id={"createAccBtn"} onClick={handleShow}>Create New Account</button>
          <RegistrationModal handleClose = {handleClose} show = {show}/>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
