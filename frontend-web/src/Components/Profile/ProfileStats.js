import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Col, Container, Row } from "react-bootstrap";

function ProfileStats() {

  return (
      <Row className="profileStatsContainer">
        <Col></Col>
        <Col></Col>
        <Col>
          <div className="profileStatsNumber">2</div>
          <div>Posts</div>
        </Col>
        <Col>
          <div className="profileStatsNumber">17</div>
          <div>Followers</div>
        </Col>
        <Col>
          <div className="profileStatsNumber">15</div>
          <div>Following</div>
        </Col>
      </Row>
  );
}

export default ProfileStats;