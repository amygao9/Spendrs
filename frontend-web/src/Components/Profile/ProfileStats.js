import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Col, Container, Row } from "react-bootstrap";
import ProfileFriends from './ProfileFriends';

function ProfileStats() {
  const followers = ["Amy Gao", "Jacky Yang"]
  const following = ["Amy Gao", "Jacky Yang", "Ray Peng"]
  const [showFollowers, setShowFollowers] = useState(false);
  const closeFollowers = () => setShowFollowers(false);
  const openFollowers = () => setShowFollowers(true);

  const [showFollowings, setShowFollowings] = useState(false);
  const closeFollowings = () => setShowFollowings(false);
  const openFollowings = () => setShowFollowings(true);

  return (
      <Row className="profileStatsContainer">
        <Col></Col>
        <Col></Col>
        <Col>
          <div className="profileStatsNumber">2</div>
          <div>Posts</div>
        </Col>
        <Col onClick={openFollowers}>
          <div className="profileStatsNumber">2</div>
          <div >Followers</div>
          
        </Col>
        <Col onClick={openFollowings}>
          <div className="profileStatsNumber">3</div>
          <div  >Following</div>
          
        </Col>
        <ProfileFriends data = {followers} handleclose = {closeFollowers} show = {showFollowers}/>
        <ProfileFriends data = {following} handleclose = {closeFollowings} show = {showFollowings}/>
      </Row>
  );
}

export default ProfileStats;