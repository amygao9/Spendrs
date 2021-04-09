import React, {useState} from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import {Button, Container} from "react-bootstrap";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";
import {AiFillEdit} from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../reducers/userDataReducer";

function ProfileDescription({ user, loggedIn = true, canFollow}) {

  const [editable, setEditable] = useState(false);
  const currUser = useSelector(state => state.userData);
  const dispatch = useDispatch();

  const triggerFollow = (isFollowing) => {
    if (isFollowing) {
      dispatch(unfollowUser(user._id))
    } else {
      dispatch(followUser(user._id))
    }
  }

  const renderButton = () => {
    const isFollowing = user.followers.some(f => {
      return f._id === currUser._id;
    })
    const followText = isFollowing ? "Unfollow" : "Follow";

    return (
      <Button onClick={() => triggerFollow(isFollowing)}>
        { followText }
      </Button>
    )
  }

  return (
    <div className="profileContainer shadowMedium">
      <ProfilePicture editable={loggedIn} user={user}/>
      {loggedIn?
        <div className={"editProfileButton"} onClick={() => setEditable(!editable)}>
          <AiFillEdit size={"1.5em"} color={"grey"} title={"Toggle Edit Profile"}/>
          {/*<span className="tooltipBlack">Toggle Edit Profile Mode</span>*/}
        </div> : <></>}

      <Container>
        <ProfileStats user={user}/>
        <ProfileInfo editable={editable} user={user} />
        { canFollow ? renderButton() :<></> }
      </Container>
    </div>
  );
}

export default ProfileDescription;