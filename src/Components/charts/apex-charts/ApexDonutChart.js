// ** MUI Imports
import { useTheme } from "@mui/material/styles";

// ** Component Import
import ReactApexChart from "react-apexcharts";

const donutColors = {
  series1: "#fdd835",
  series2: "#00d4bd",
  series3: "#826bf8",
  series4: "#1FD5EB",
  series5: "#ffa1a1",
  series6: "#ffb1e1",
};

const ApexDonutChart = ({ label, data }) => {
  // ** Hook
  const theme = useTheme();

  const options = {
    stroke: { width: 0 },
    labels: label,
    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2, donutColors.series4, donutColors.series6],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${parseInt(val, 10)}%`,
    },
    legend: {
      position: "bottom",
      markers: { offsetX: -3 },
      labels: { colors: theme.palette.text.secondary },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: "1.2rem",
            },
            value: {
              fontSize: "1.2rem",
              color: theme.palette.text.secondary,
              formatter: (val) => `${parseInt(val, 10)}`,
            },
            total: {
              show: false,
              fontSize: "1.2rem",
              label: "Operational",
              color: theme.palette.text.primary,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: theme.typography.body1.fontSize,
                  },
                  value: {
                    fontSize: theme.typography.body1.fontSize,
                  },
                  total: {
                    fontSize: theme.typography.body1.fontSize,
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  return <ReactApexChart type="donut" height={400} options={options} series={data} />;
};

export default ApexDonutChart;
