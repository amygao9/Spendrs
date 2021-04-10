import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Col, Row } from "react-bootstrap";
import ProfileFriends from './ProfileFriends';

function ProfileStats({ user }) {
  const [showFollowers, setShowFollowers] = useState(false);
  const closeFollowers = () => setShowFollowers(false);
  const openFollowers = () => setShowFollowers(true);

  const [showFollowings, setShowFollowings] = useState(false);
  const closeFollowings = () => setShowFollowings(false);
  const openFollowings = () => setShowFollowings(true);

  return (
      <Row className="profileStatsContainer">
        <Col>
          <div className="profileStatsNumber">{user.posts.length}</div>
          <div>Posts</div>
        </Col>
        <Col onClick={openFollowers} className="clickable">
          <div className="profileStatsNumber">{user.followers ? user.followers.length : 0}</div>
          <div>Followers</div>
        </Col>
        <Col onClick={openFollowings} className="clickable">
          <div className="profileStatsNumber">{user.following ? user.following.length : 0}</div>
          <div>Following</div>
        </Col>
        <ProfileFriends data = {user.followers} handleclose = {closeFollowers} show = {showFollowers}/>
        <ProfileFriends data = {user.following} handleclose = {closeFollowings} show = {showFollowings}/>
      </Row>
  );
}

export default ProfileStats;