import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import { userLinks } from "../../constants";

function Settings(props) {
  return (
    <div className='home'>
      <Navbar links={userLinks} />
    </div>
  );
}

export default Settings;