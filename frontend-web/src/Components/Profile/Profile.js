import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks } from "../../constants";
import {useSelector} from "react-redux";


function Profile() {
  const [editable, setEditable] = useState(true);
  const [loaded, setLoaded] = useState(false)
  const user = useSelector(state => state.userData);

  useEffect( () => {
    if (Object.keys(user).length > 0) {
      console.log("useeffect user ", user)
      setLoaded(true)
    }
  }, [user])


  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  }

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription editable={editable} user={user}/>
      <ProfilePosts user={user} />
    </div>
  );
}

export default Profile;