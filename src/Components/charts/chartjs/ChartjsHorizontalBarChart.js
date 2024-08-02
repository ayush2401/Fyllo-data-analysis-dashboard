// ** Third Party Imports
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartjsHorizontalBarChart = (props) => {
  // ** Props
  const { labelColor, borderColor, legendColor, data } = props;

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15,
        },
      },
    },
    layout: {
      padding: { top: -4 },
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: borderColor,
        },
        ticks: { color: labelColor },
      },
      y: {
        grid: {
          display: false,
          color: borderColor,
        },
        ticks: { color: labelColor },
      },
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: { color: legendColor },
      },
    },
  };

  return <Bar data={data} height={400} options={options} />;
};

export default ChartjsHorizontalBarChart;
