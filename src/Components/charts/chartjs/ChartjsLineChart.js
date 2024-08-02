// ** Third Party Imports
import { useTheme } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Registering the required components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ChartjsLineChart = (props) => {
  const theme = useTheme();

  // Vars
  const whiteColor = "#fff";
  const lineChartPrimary = "#8479F2";
  const borderColor = theme.palette.divider;
  const labelColor = theme.palette.text.disabled;
  const legendColor = theme.palette.text.secondary;

  // ** Props
  const { labels, dataset } = props;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          color: borderColor,
        },
      },
      y: {
        ticks: {
          color: labelColor,
          callback: function (value) {
            return Math.round(value / 100000) + "L";
          },
        },
        grid: {
          color: borderColor,
        },
      },
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: {
          padding: 25,
          boxWidth: 10,
          color: legendColor,
          usePointStyle: true,
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: "values in MT",
        pointHoverRadius: 5,
        pointStyle: "circle",
        borderColor: lineChartPrimary,
        backgroundColor: lineChartPrimary,
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: whiteColor,
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: lineChartPrimary,
        data: dataset,
      },
    ],
  };

  return <Line data={data} height={400} options={options} />;
};

export default ChartjsLineChart;
