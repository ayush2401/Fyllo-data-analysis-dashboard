import React from "react";
import ReactApexcharts from "react-apexcharts";
import { useTheme } from "@mui/material/styles";

const areaColors = {
  series2: "#b992fe",
  series3: "#e0cffe",
};

const ApexAreaChart = ({ labels, series }) => {
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { shared: true },
    dataLabels: { enabled: true },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: { colors: theme.palette.text.secondary },
      markers: {
        offsetY: 1,
        offsetX: -3,
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    colors: [areaColors.series2, areaColors.series3],
    fill: {
      opacity: [0.4, 0.6],
      type: "solid",
    },
    grid: {
      show: true,
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true },
      },
    },
    yaxis: {
      labels: {
        style: { colors: theme.palette.text.disabled },
        formatter: (value) => {
          return (value / 1000000).toFixed(0) + "m";
        },
      },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: theme.palette.divider },
      crosshairs: {
        stroke: { color: theme.palette.divider },
      },
      labels: {
        style: { colors: theme.palette.text.disabled },
      },
      categories: labels,
    },
  };

  return <ReactApexcharts type="area" height={400} options={options} series={series} />;
};

export default ApexAreaChart;
