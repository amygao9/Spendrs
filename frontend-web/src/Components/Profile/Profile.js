import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks, users } from "../../constants";

function Profile() {
  const path = window.location.pathname;
  const editable = path === '/profile';
  let user = path.substring(path.lastIndexOf('/') + 1);
  if (user !== 'profile' && users[user]) {
    user = users[user];
  }
  else {
    user = users['alexshih2018'];
  }

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription editable={editable} user={user}/>
      <ProfilePosts editable={editable} user={user} />
    </div>
  );
}

export default Profile;