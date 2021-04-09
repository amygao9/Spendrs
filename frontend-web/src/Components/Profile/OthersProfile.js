import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks } from "../../constants";
import {useDispatch} from "react-redux";
import { checkFollowing, getOtherUserData } from "../../reducers/userDataReducer";


function Profile({match:{params:{username}}}) {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [following, setFollowing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const data = await dispatch(getOtherUserData(username));
      if (data.err) {
        setError(true);
      } else{
        setUser(data)
        const isFollowing = await dispatch(checkFollowing(data.username));
        setFollowing(isFollowing);
      }
      setLoaded(true);
    }
    loadData();
  }, [username, dispatch])

  const loadProfileContent = () => {
    let publicProfile = true;

    if (user.privacy === "Private") {
      publicProfile = false;
    } else if (user.privacy === "Friends Only") {
      publicProfile = following;
    }

    return (
      <>
        <ProfileDescription user={user} loggedIn={false}/>
        {
          publicProfile ?
          <ProfilePosts user={user} /> :
          <h1> Private profile </h1>
        }
      </>
    )
  }


  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  }

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      {
        error ?
        <h1> Profile does not exist. </h1> :
        loadProfileContent()
      }
    </div>
  );
}

export default Profile;