import React from "react";
import '../../styles/home.css';
import '../../styles/analytics.css';
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Baseline
} from "react-timeseries-charts";
import { TimeSeries } from "pondjs";

const convertTimeEvent = (data) => {
  const events = data.map(dataPoint => {
    return [
      Date.parse(dataPoint[0]), dataPoint[1]
    ]
  });
  return events;
}

const convertToTimeSeries = (data) => {
  const spendingData = {
    name: "Spending",
    columns: ["time", "value"],
    points: convertTimeEvent(data)
  }
  return new TimeSeries(spendingData);
}

function TimeSeriesGraph(props) {
  const stats = props.stats;
  const series = convertToTimeSeries(stats);

  return (
    <div className="seriesContainer spendrCard shadowMedium">
      <h2>
        Your Spending Over The Past Month
      </h2>
      <div className="chartContainer">
        <ChartContainer timeRange={series.range()} format="%b %d">
          <ChartRow height="150">
              <YAxis
                  id="price"
                  label="Price ($)"
                  min={series.min()} max={series.max()}
                  width="60" format="$,.2f"/>
              <Charts>
                  <LineChart axis="price" series={series}/>
                  <Baseline axis="price" value={series.avg()} label="Avg"/>
              </Charts>
          </ChartRow>
        </ChartContainer>
      </div>
    </div>

  );
}

export default TimeSeriesGraph;