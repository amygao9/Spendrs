import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import { userLinks } from "../../constants";

const analStatistics = {
  "budget": 300,
  "daySpending": 21.5,
  "monthSpending": 125.5,
  "yearSpending": 125.5,
}

function Analytics(props) {
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      anal
    </div>
  );
}

export default Analytics;