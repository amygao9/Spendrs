import React from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import { userLinks } from "../../constants";
import SpendingPieGraph from "./PieChart";
import TimeSeriesGraph from "./TimeSeries";
import Summary from "./Summary";
import { Container } from "react-bootstrap";

const stats = {
  "budget": 300,
  "daySpending": 21.5,
  "monthSpending": 125.5,
  "spendingCategories": {"food": 469, "misc": 397, "tech": 1260, "games": 220, "valorant skins": 45},
  "monthTimeSeries": [["2021-03-01", 50], ["2021-03-04", 10], ["2021-03-09", 3], ["2021-03-12", 18], ["2021-03-20", 34], ["2021-03-21", 7]]
}

function Analytics(props) {
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <Container>
        <Summary stats={stats} />
        <SpendingPieGraph stats={stats.spendingCategories} />
        <TimeSeriesGraph stats={stats.monthTimeSeries} />
      </Container>
    </div>
  );
}

export default Analytics;