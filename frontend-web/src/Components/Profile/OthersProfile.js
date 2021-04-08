import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks } from "../../constants";
import {useSelector} from "react-redux";
import {getUserInfo} from "../../axios/user";


function Profile({match:{params:{username}}}) {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect( () => {
    getUserInfo(username).then( data => {
      setUser(data)
      setLoaded(true)
    });

  }, [username])


  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  }

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription user={user} loggedIn={false}/>
      <ProfilePosts user={user} />
    </div>
  );
}

export default Profile;