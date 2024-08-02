import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { getMonthlyTotal } from "../../../utils";
import ApexAreaChart from "../../charts/apex-charts/ApexAreaChart";

const AreaChartCard = ({ data, title }) => {
  const totalData = getMonthlyTotal(data);

  const series = [
    {
      name: "Required",
      data: totalData.map((item) => Math.round(item.required)),
    },
    {
      name: "Available",
      data: totalData.map((item) => Math.round(item.available)),
    },
    
  ];

  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        sx={{ pb: "10px" }}
        title={title}
        titleTypographyProps={{ sx: { fontSize: { base: "12px", lg: "21px" } } }}
        subheader={`The graph depicts the required vs available quantity (in mt) of fertilizers for each month.`}
        subheaderTypographyProps={{ sx: { color: (theme) => `${theme.palette.text.disabled} !important`, fontSize: { base: "10px", lg: "14px" } } }}
      />
      <CardContent>
        <ApexAreaChart labels={totalData.map((item) => item.name)} series={series} />
      </CardContent>
    </Card>
  );
};

export default AreaChartCard;
