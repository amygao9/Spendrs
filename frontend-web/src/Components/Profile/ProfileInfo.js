import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Row } from "react-bootstrap";

function ProfileInfo() {

  return (
    <div className="infoContainer">
      <Row className="nameContainer">
        <div className="bold profileName">Alex Shih</div>
        <div className="grey">@alexshih2018</div>
      </Row>
      <Row>
        <div className="edit">Edit Bio</div>
      </Row>
      
      <Row className="descriptionContainer">
        <div>My name is IU. I am totally not a catfish account.</div>
      </Row>
      <Row>
        <div className="edit">Edit Description</div>
      </Row>
    </div>
  );
}

export default ProfileInfo;