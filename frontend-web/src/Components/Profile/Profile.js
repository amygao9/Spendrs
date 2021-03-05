import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import { Container, Row } from "react-bootstrap";
import ProfileDescription from "./ProfileDescription";

function Profile(props) {
  const userLinks = {
    "dashboard": "Feed",
    "analytics": "Analytics",
    "profile": "Profile",
    "settings": "Settings"
  }
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription />
    </div>
  );
}

export default Profile;