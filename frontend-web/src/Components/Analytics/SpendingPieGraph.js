import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import '../../styles/analytics.css';
import { PieChart } from "react-minimal-pie-chart";

const colors = ['#E38627', '#C13C37', '#4B33FF ', '#6A2135', '#3FFF9C', '#3FFFEE', '#DF3FFF', '#FFB6B6', '#6A2135', '#FF3F96']

function SpendingPieGraph(props) {
  const stats = props.stats;
  const [pieStatistics, setPieStatistics] = useState([]);
  const [selected, setSelected] = useState(0);
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
  }, [])

  const data = pieStatistics.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const getLabel = (data) => {
    const label = data.title + "\n" + Math.round(data.percentage) + '%'
    return label
  }

  return (
    <div className="pieContainer">
      <h2>
        Your Overall Spending
      </h2>
      <PieChart
        style={{
          fontFamily:
            '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
          fontSize: '4px',
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
          opacity: 0.75,
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
    </div>

  );
}

export default SpendingPieGraph;