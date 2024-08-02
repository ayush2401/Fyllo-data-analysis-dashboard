import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const createChartData = (items) => ({
  labels: items.map((item) => item.name),
  datasets: [
    {
      data: items.map((item) => parseFloat(item.value)),
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

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.label || "";
          const value = context.raw || 0;
          const total = context.dataset.data.reduce((acc, item) => acc + item, 0);
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `${label}: ${value} (${percentage})`;
        },
      },
    },
    datalabels: {
      display: true,
      color: "white",
      formatter: (value, context) => {
        const total = context.dataset.data.reduce((acc, item) => acc + item, 0);
        const percentage = ((value / total) * 100).toFixed(2) + "%";
        return percentage;
      },
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  },
};

const index = ({ chartData }) => {
  return (
    <div style={{ height: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Pie data={createChartData(chartData)} options={options} />
    </div>
  );
};

export default index;
