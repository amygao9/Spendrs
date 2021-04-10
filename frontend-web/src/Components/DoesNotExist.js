import React from "react";
import '../styles/settings.css';
import '../styles/home.css';
import { userLinks } from "../constants";
import Navbar from "./Navbar/Navbar";


function DoesNotExist() {
  return (
    <div>
      <div className='settingsContainer'>
        <Navbar links={userLinks} />
        <h1>
          This page you are looking for does not exist.
        </h1>
      </div>
    </div>
    
  );
}

export default DoesNotExist;
