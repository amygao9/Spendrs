import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Container } from "react-bootstrap";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";

function ProfileDescription(props) {

  const profilePicture = "https://www.allkpop.com/upload/2020/04/content/091439/1586457559-9490h64e069pk776ou0b.jpg";

  return (
    <div className="profileContainer shadowMedium">
      <img src={profilePicture} alt="Profile" className="profilePicture shadowSmall"/>
      <Container>
        <ProfileStats />
        <ProfileInfo />
      </Container>
    </div>
  );
}

export default ProfileDescription;