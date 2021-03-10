import React, { useEffect, useState } from "react";
import '../../styles/home.css';
import '../../styles/analytics.css';
import ReactTooltip from 'react-tooltip';
import { PieChart } from "react-minimal-pie-chart";
import { displayMoney } from "../utils/utils";

const colors = ['#ffe6b3', '#ffb3d1', '#b3ecff ', '#99ff99', '#ffff99', '#99ffcc', '#ff99e6', '#FFB6B6', '#6A2135', '#FF3F96']

function SpendingPieGraph(props) {
  const stats = props.stats;
  const [pieStatistics, setPieStatistics] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [hovered, setHovered] = useState(undefined);
  const lineWidth = 60;

  useEffect(() => {
    const newStats = Object.keys(stats).map((stat, index) => {
      return {
        title: stat,
        label: stat,
        value: stats[stat],
        color: colors[index]
      };
    });
    setPieStatistics(newStats);
  }, [stats])

  const data = pieStatistics.map((entry, i) => {
    console.log('entry :>> ', entry);
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
        title: entry.title
      };
    }
    return entry;
  });

  const getLabel = (data) => {
    const label = data.title + "\n" + Math.round(data.percentage) + '%'
    return label
  }

  function makeTooltipContent(entry) {
    const money = displayMoney(entry.value);
    return `You have spent $${money} on ${entry.title} this month.`;
  }
  
  return (
    <div>
      <h2>
        Your Spending Distribution
      </h2>
      <div className="pieContainer spendrCard shadowMedium" data-tip="" data-for="chart">
        <PieChart
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: '4px',
            color: "white"
          }}
          data={data}
          radius={PieChart.defaultProps.radius - 6}
          lineWidth={60}
          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          segmentsShift={(index) => (index === selected ? 6 : 1)}
          animate
          label={({ dataEntry }) => getLabel(dataEntry)}
          labelPosition={100 - lineWidth / 2}
          labelStyle={{
            fill: '#000',
            opacity: 0.9,
            pointerEvents: 'none',
          }}
          onClick={(_, index) => {
            setSelected(index === selected ? undefined : index);
          }}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={() => {
            setHovered(undefined);
          }}
        />
        <ReactTooltip
          id="chart"
          getContent={() =>
            typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
          }
        />
      </div>
    </div>
    

  );
}

export default SpendingPieGraph;