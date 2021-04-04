import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Col, Row } from "react-bootstrap";
import ProfileFriends from './ProfileFriends';

function ProfileStats({ user, isAdmin }) {
  const [followers] = useState(user.followers)
  const [following] = useState(user.following)
  const [posts] = useState(user.posts)
  const [showFollowers, setShowFollowers] = useState(false);
  const closeFollowers = () => setShowFollowers(false);
  const openFollowers = () => setShowFollowers(true);

  const [showFollowings, setShowFollowings] = useState(false);
  const closeFollowings = () => setShowFollowings(false);
  const openFollowings = () => setShowFollowings(true);

  return (
      <Row className="profileStatsContainer">
        <Col>
          <div className="profileStatsNumber">{posts.length}</div>
          <div>Posts</div>
        </Col>
        <Col onClick={openFollowers} className="clickable">
          <div className="profileStatsNumber">{followers ? followers.length : 0}</div>
          <div>Followers</div>
        </Col>
        <Col onClick={openFollowings} className="clickable">
          <div className="profileStatsNumber">{following ? following.length : 0}</div>
          <div>Following</div>
        </Col>
        <ProfileFriends isAdmin = {isAdmin} data = {followers} handleclose = {closeFollowers} show = {showFollowers}/>
        <ProfileFriends isAdmin = {isAdmin} data = {following} handleclose = {closeFollowings} show = {showFollowings}/>
      </Row>
  );
}

export default ProfileStats;