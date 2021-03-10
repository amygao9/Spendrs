import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Container } from "react-bootstrap";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";

function ProfileDescription({ editable, user, isAdmin }) {

  return (
    <div className="profileContainer shadowMedium">
      <img src={user["profilePicture"]} alt="Profile" className="profilePicture shadowSmall"/>
      <Container>
        <ProfileStats user={user} isAdmin = {isAdmin}/>
        <ProfileInfo editable={editable} user={user} />
      </Container>
    </div>
  );
}

export default ProfileDescription;