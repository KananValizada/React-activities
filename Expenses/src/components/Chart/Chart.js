import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const chartValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxChartValue = Math.max(...chartValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxChartValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
