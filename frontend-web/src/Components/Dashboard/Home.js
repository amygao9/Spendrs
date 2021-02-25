import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Home(props) {
  const userLinks = {
    "dashboard": "Feed",
    "analytics": "Analytics",
    "profile": "Profile",
    "settings": "Settings"
  }
  return (
    <>
      <Navbar links={userLinks} />
    </>
  );
}
