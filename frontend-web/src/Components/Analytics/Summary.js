import React from "react";
import '../../styles/home.css';


function Summary(props) {
  const stats = props.stats;

  return (
    <div className='summaryContainer'>
      <h2>Summary</h2>
      <div>This month you have spent ${(Math.round(stats.monthSpending * 100) / 100).toFixed(2)}.</div>
    </div>
  );
}

export default Summary;