import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ShareForm from "./ShareForm";
import { Container, Row } from "react-bootstrap";
import '../../styles/home.css';
import Feed from "./Feed";

export default function Home(props) {
  const userLinks = {
    "dashboard": "Feed",
    "analytics": "Analytics",
    "profile": "Profile",
    "settings": "Settings"
  }
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <Container className='homeContainer'>
        <Row>
          <div id="shareContainer">
            <ShareForm />
          </div>
          <div id="feedContainer">
            <Feed />
          </div>
        </Row>
      </Container>
    </div>
  );
}
