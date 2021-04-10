import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";
import { userLinks } from "../../constants";
import { connect } from "react-redux";


function Profile(props) {
  const [loaded, setLoaded] = useState(false);
  const user = props.user;

  useEffect( () => {
    if (user && Object.keys(user).length > 0) {
      setLoaded(true)
    }
  }, [user])


  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  }

  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <ProfileDescription user={user}/>
      <ProfilePosts user={user} />
    </div>
  );
}


const mapStateToProps = (state) => {
  return { 
    user: state.userData,
   };
}

export default connect(mapStateToProps)(Profile);