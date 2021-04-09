import React, {useEffect, useRef, useState} from "react";
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
  const sortedStats = stats.sort(function(a, b) {
    const date1 = Date.parse(a[0]);
    const date2 = Date.parse(b[0]);
    return date1 - date2;
  })
  const series = convertToTimeSeries(sortedStats);
  const parentRef = useRef(null);
  const [graphWidth, setGraphWidth] = useState(500);

  useEffect ( () => {
    if(parentRef.current){
      setGraphWidth(parentRef.current.offsetWidth)
    }
  }, [parentRef]);

  return (
    <div className="seriesContainer spendrCard shadowMedium">
      <h2>
        Your Spending Over The Past Month
      </h2>
      <div className="chartContainer" ref = { parentRef }>
        <ChartContainer timeRange={series.range()}
                        format="%b %d"
                        timeAxisAngledLabels={window.innerWidth <= 500}
                        timeAxisHeight={65}
                        width={graphWidth}>
          <ChartRow height="200">
              <YAxis
                  id="price"
                  label="Price ($)"
                  min={series.min()} max={series.max()}
                  format="$,.2f"
                  width="50"/>
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