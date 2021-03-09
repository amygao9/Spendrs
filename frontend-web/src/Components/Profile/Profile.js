import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import { userLinks } from "../../constants";

function Profile() {
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription />
    </div>
  );
}

export default Profile;