import React, {useState} from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import {Container} from "react-bootstrap";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";
import {AiFillEdit} from "react-icons/all";

function ProfileDescription({ user, isAdmin, loggedIn = true}) {

  const [editable, setEditable] = useState(false);


  return (
    <div className="profileContainer shadowMedium">
      <ProfilePicture editable={loggedIn} user={user}/>
      {loggedIn?
        <div className={"editProfileButton"} onClick={() => setEditable(!editable)}>
          <AiFillEdit size={"1.5em"} color={"lightgrey"} title={"Toggle Edit Profile"}/>
          {/*<span className="tooltipBlack">Toggle Edit Profile Mode</span>*/}
        </div> : <></>}

      <Container>
        <ProfileStats user={user} isAdmin = {isAdmin}/>
        <ProfileInfo editable={editable} user={user} />
      </Container>
    </div>
  );
}

export default ProfileDescription;