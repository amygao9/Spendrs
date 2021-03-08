import React from "react";
import '../../styles/home.css';


function Summary(props) {
  const stats = props.stats;

  return (
    <div className='summaryContainer'>
      <h2>Summary</h2>
      <div>This month you have spent {stats.monthSpending}.</div>
    </div>
  );
}

export default Summary;