import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { getMonthlyTotal } from "../../../utils";
import ChartjsLineChart from "../../charts/chartjs/ChartjsLineChart";

const LineChartCard = ({ title, data, dataKey }) => {
  const totalData = getMonthlyTotal(data);
  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        sx={{ pb: "10px" }}
        title={title}
        titleTypographyProps={{ sx: { fontSize: { base: "12px", lg: "21px" } } }}
        subheader={`Across all states`}
        subheaderTypographyProps={{ sx: { color: (theme) => `${theme.palette.text.disabled} !important`, fontSize: { base: "10px", lg: "14px" } } }}
      />
      <CardContent>
        <ChartjsLineChart labels={totalData.map((item) => item.name)} dataset={totalData.map((item) => item[dataKey])} />
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
