import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks, users } from "../../constants";
import { getUserInfo } from "../../axios/user";


function Profile() {
  const [user, setUser] = useState(null);
  const [editable, setEditable] = useState(true);
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {  // Changed to non-async func, async gives React warning.
    getUserInfo().then((data) => {
      console.log('data :>> ', data);
      setUser(data)
      setLoaded(true);
      console.log(user)
    })
    // console.log("useeffect")
    // const path = window.location.pathname;
    // setEditable(path === '/profile');
    // let usertemp = path.substring(path.lastIndexOf('/') + 1);
    // if (usertemp !== 'profile' && users[user]) {
    //   setUser(users[user]);
    // }
    // else {
    //   setUser(users['alexshih2018'])
    // }

  }, [])



  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
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