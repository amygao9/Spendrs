import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import { userLinks, users } from "../../constants";

function Profile() {
  const path = window.location.pathname;
  const editable = path === '/profile';
  let user = path.substring(path.lastIndexOf('/') + 1);
  user = user != 'profile' ? users[user] : users['alexshih2018'];

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription editable={editable} user={user}/>
    </div>
  );
}

export default Profile;