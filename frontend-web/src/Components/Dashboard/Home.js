import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import ShareForm from "./ShareForm";
import { Container } from "react-bootstrap";
import '../../styles/home.css';

export default function Home(props) {
  const userLinks = {
    "dashboard": "Feed",
    "analytics": "Analytics",
    "profile": "Profile",
    "settings": "Settings"
  }
  return (
    <div className='dashboard'>
      <Navbar links={userLinks} />
      <Container>
        <div id="shareContainer">
          <ShareForm />
        </div>
      </Container>
    </div>
  );
}
