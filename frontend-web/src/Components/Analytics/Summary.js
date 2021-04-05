import React from "react";
import '../../styles/home.css';
import { displayMoney } from "../utils/utils";


function Summary(props) {
  const monthSpending = props.stats;

  return (
    <div className='summaryContainer spendrCard shadowMedium'>
      <h2>Summary</h2>
      <div>This month you have spent ${displayMoney(monthSpending)}.</div>
    </div>
  );
}

export default Summary;