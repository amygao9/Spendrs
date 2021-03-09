import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Col, Row } from "react-bootstrap";
import ProfileFriends from './ProfileFriends';

function ProfileStats({ user }) {
  const [followers, setFollowers] = useState(user["followers"])
  const [following, setFollowing] = useState(user["following"])
  const [showFollowers, setShowFollowers] = useState(false);
  const closeFollowers = () => setShowFollowers(false);
  const openFollowers = () => setShowFollowers(true);

  const [showFollowings, setShowFollowings] = useState(false);
  const closeFollowings = () => setShowFollowings(false);
  const openFollowings = () => setShowFollowings(true);

  return (
      <Row className="profileStatsContainer">
        <Col>
          <div className="profileStatsNumber">{user["posts"]}</div>
          <div>Posts</div>
        </Col>
        <Col onClick={openFollowers} className="clickable">
          <div className="profileStatsNumber">{followers.length}</div>
          <div>Followers</div>
        </Col>
        <Col onClick={openFollowings} className="clickable">
          <div className="profileStatsNumber">{following.length}</div>
          <div>Following</div>
        </Col>
        <ProfileFriends data = {followers} handleclose = {closeFollowers} show = {showFollowers}/>
        <ProfileFriends data = {following} handleclose = {closeFollowings} show = {showFollowings}/>
      </Row>
  );
}

export default ProfileStats;