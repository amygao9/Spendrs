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
  "monthSpending": 465.49,
  "spendingCategories": {"food": 245.49, "misc": 28, "tech": 104, "games": 33, "valorant skins": 55},
  "monthTimeSeries": [["2021-03-01", 85.49], ["2021-03-04", 37], ["2021-03-09", 7], ["2021-03-12", 104], ["2021-03-20", 34], ["2021-03-21", 198]]
}

function Analytics(props) {
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <Container>
        <div className={"flexContainer"}>  {/*this class will allow mobile responsiveness*/}
          <div className={"flexCol"}>
            <Summary stats={stats} />
            <TimeSeriesGraph stats={stats.monthTimeSeries} />
          </div>
          <div className={"flexCol"}>
            <SpendingPieGraph stats={stats.spendingCategories} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Analytics;