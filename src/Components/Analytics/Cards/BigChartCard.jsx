import { Box, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import React, { useState } from "react";
import ChartjsHorizontalBarChart from "../../charts/chartjs/ChartjsHorizontalBarChart";
import { months } from "../../../utils";

const BigChartCard = ({ data, title }) => {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedState, setSelectedState] = useState("Karnataka");

  const states = [...new Set(data.map((item) => item.state))];

  const filterData = data.filter((item) => item.month === selectedMonth && item.state === selectedState);
  const labels = filterData.map((item) => item.product);
  const availabilityData = filterData.map((item) => parseFloat(item.availability_in_mt_));
  const requirementData = filterData.map((item) => parseFloat(item.requirement_in_mt_));

  const theme = useTheme();

  // Vars

  const horizontalBarInfo = "#26c6da";
  const warningColorShade = "#ffbd1f";
  const borderColor = theme.palette.divider;
  const labelColor = theme.palette.text.disabled;
  const legendColor = theme.palette.text.secondary;

  const graphdata = {
    labels: labels,
    datasets: [
      {
        maxBarThickness: 15,
        label: "Availablity in MT",
        backgroundColor: warningColorShade,
        borderColor: "transparent",
        data: availabilityData,
      },
      {
        maxBarThickness: 15,
        backgroundColor: horizontalBarInfo,
        label: "Requirement in MT",
        borderColor: "transparent",
        data: requirementData,
      },
    ],
  };

  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        sx={{
          flexDirection: ["column", "row"],
          alignItems: ["flex-start", "center"],
          "& .MuiCardHeader-action": { mb: 0 },
          "& .MuiCardHeader-content": { mb: [2, 0] },
          pb: "10px",
        }}
        title={title}
        titleTypographyProps={{ sx: { fontSize: { base: "12px", lg: "21px" } } }}
        subheader={`Fertilizer Availability and Requirement in ${selectedMonth} for ${selectedState}`}
        subheaderTypographyProps={{ sx: { color: (theme) => `${theme.palette.text.disabled} !important`, fontSize: { base: "10px", lg: "14px" } } }}
        action={
          <Box sx={{ display: "flex", gap: "10px", wrap: "wrap", alignItems: "center", width: "300px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedMonth}
                label="month"
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((x, _) => (
                  <MenuItem key={x} value={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedState}
                label="State"
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map((x, _) => (
                  <MenuItem key={x} value={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        }
      />
      <CardContent>
        <ChartjsHorizontalBarChart labelColor={labelColor} borderColor={borderColor} legendColor={legendColor} data={graphdata} />
      </CardContent>
    </Card>
  );
};

export default BigChartCard;
