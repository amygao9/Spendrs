import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks } from "../../constants";
import {useDispatch} from "react-redux";
import { getOtherUserData } from "../../reducers/userDataReducer";


function Profile({match:{params:{username}}}) {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(async () => {
    const data = await dispatch(getOtherUserData(username));
    console.log('data :>> ', data);
    if (data.err) {
      setError(true);
    } else{
      setUser(data)
    }
    setLoaded(true)
  }, [username])


  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  }

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      {
        error ?
        <h1> Profile does not exist. </h1> :
        (
          <>
            <ProfileDescription user={user} loggedIn={false}/>
            <ProfilePosts user={user} />
          </>
        ) 
      }
    </div>
  );
}

export default Profile;