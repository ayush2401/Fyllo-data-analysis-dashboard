import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const index = ({ data, month, state }) => {
  const filterData = data.filter((item) => item.month === month && item.state === state);

  const labels = filterData.map((item) => item.product);
  const availabilityData = filterData.map((item) => parseFloat(item.availability_in_mt_));
  const requirementData = filterData.map((item) => parseFloat(item.requirement_in_mt_));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Availability in MT",
        data: availabilityData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Requirement in MT",
        data: requirementData,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Fertilizer Availability and Requirement in ${month} for ${state}`,
        position: 'bottom'
      },
    },
  };

  return <Bar height={120} data={chartData} options={options} />;
};

export default index;
