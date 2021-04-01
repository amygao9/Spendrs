import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Container } from "react-bootstrap";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";

function ProfileDescription({ editable, user, isAdmin }) {
  const defaultAvatar = "https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme.png"

  return (
    <div className="profileContainer shadowMedium">
      <img src={user.image? user.image : defaultAvatar} alt="Profile" className="profilePicture shadowSmall"/>
      <Container>
        <ProfileStats user={user} isAdmin = {isAdmin}/>
        <ProfileInfo editable={editable} user={user} />
      </Container>
    </div>
  );
}

export default ProfileDescription;