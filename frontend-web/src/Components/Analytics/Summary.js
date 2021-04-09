import React from "react";
import '../../styles/home.css';
import { displayMoney } from "../utils/utils";


function Summary(props) {
  return (
    <div className='summaryContainer spendrCard shadowMedium'>
      <h2>Summary</h2>
      <div>This month you have spent ${displayMoney(props.stats)} on {props.numItems} items.</div>
    </div>
  );
}

export default Summary;