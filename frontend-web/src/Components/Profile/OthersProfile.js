import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks, adminLinks } from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import { checkFollowing, getOtherUserData } from "../../reducers/userDataReducer";


function Profile({match:{params:{username}}}) {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [following, setFollowing] = useState(false);
  const dispatch = useDispatch();
  const [navBarlinks, setNavBarlinks] = useState(userLinks);
  const currUser = useSelector(state => state.userData);

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
    if (currUser && Object.keys(currUser).length > 0) {
      loadData();
      if (currUser.admin) {
        setNavBarlinks(adminLinks)
      }
    }

  }, [username, dispatch, currUser])

  const loadProfileContent = () => {
    let publicProfile = true;
    if (currUser.admin || currUser._id === user._id) {
      publicProfile = true;
    }
    else if (user.privacy === "Private") {
      publicProfile = false;
    } else if (user.privacy === "Friends Only") {
      publicProfile = following;
    }

    return (
      <>
        <ProfileDescription user={user} loggedIn={false} canFollow={currUser._id !== user._id}/>
        {
          publicProfile ?
          <ProfilePosts user={user} /> :
          <div className='center' id = 'centerHeader'> 
            <h3> Private Profile </h3> 
            { (user.privacy === "Private") ? 
            <p> User in private mode. </p> :
            <p> Please follow to view posts. </p> 
            }
            
          </div>
        }
      </>
    )
  }


  if (!loaded) {
    return (<div className='home'> <Navbar links={navBarlinks} /> </div>)
  }

  return (
    <div className='home'>
      <Navbar links={navBarlinks} />
      {
        error ?
        <div className='center' id = 'centerHeader'> <h1> Profile does not exist. </h1> </div>
         :
        loadProfileContent()
      }
    </div>
  );
}

export default Profile;