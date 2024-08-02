import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartjsRadarChart from "../../../charts/chartjs/ChartjsRadarChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const createDoughnutChartData = (items) => ({
  labels: items.map((item) => item.state),
  datasets: [
    {
      data: items.map((item) => parseFloat(item.requirement_in_mt_)),
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
});

const index = ({ data, product }) => {
  const filteredDataObj = data
    .filter((item) => item.product === product)
    .reduce((obj, item) => {
      if (!(item.state in obj)) {
        obj[item.state] = 0;
      }

      obj[item.state] += parseFloat(item.requirement_in_mt_);
      return obj;
    }, {});


  const filteredData = Object.keys(filteredDataObj).map((x) => ({ state: x, requirement_in_mt_: filteredDataObj[x] }));
  const sortedData = filteredData.sort((a, b) => parseFloat(b.requirement_in_mt_) - parseFloat(a.requirement_in_mt_));
  const top5Data = sortedData.slice(0, 5);

  return (
    <div style={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Doughnut data={createDoughnutChartData(top5Data)} />
    </div>
  );
};

export default index;
