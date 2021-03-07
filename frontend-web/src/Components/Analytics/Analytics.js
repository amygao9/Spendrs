import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import { userLinks } from "../../constants";
import SpendingPieGraph from "./SpendingPieGraph";

const stats = {
  "budget": 300,
  "daySpending": 21.5,
  "monthSpending": 125.5,
  "yearSpending": 125.5,
  "spendingCategories": {"food": 469, "misc": 397, "tech": 1260, "games": 220, "valorant skins": 45}
}

function Analytics(props) {
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <SpendingPieGraph stats={stats.spendingCategories} />
    </div>
  );
}

export default Analytics;