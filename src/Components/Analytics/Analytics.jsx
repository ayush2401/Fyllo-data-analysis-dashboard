import { Box, Grid } from "@mui/material";
import React from "react";
import { data } from "../../result.js";
import PiechartCard from "./Cards/PiechartCard.jsx";
import BigchartCard from "./Cards/BigChartCard.jsx";
import DoughnutChartCard from "./Cards/DoughnutChartCard.jsx";
import AreaChartCard from "./Cards/AreaChartCard.jsx";
import LineChartCard from "./Cards/LineChartCard.jsx";

const Analytics = () => {
  return (
    <Box sx={{width: '80%', marginX: 'auto'}}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <PiechartCard data={data} title="Required fertilizers" dataKey="requirement_in_mt_" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <PiechartCard data={data} title="Available fertilizers" dataKey="availability_in_mt_" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DoughnutChartCard data={data} title="State wise fertilizer requirement" dataKey="requirement_in_mt_" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DoughnutChartCard data={data} title="State wise fertilizer availablity" dataKey="availability_in_mt_" />
        </Grid>
        <Grid item xs={12}>
          <BigchartCard data={data} title="Product Availability and Requirements" />
        </Grid>
        <Grid item xs={12}>
          <AreaChartCard data={data} title="Requirement vs. Availability by Month" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <LineChartCard data={data} title="Month wise fertilizer requirement" dataKey="required"/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <LineChartCard data={data} title="Month wise fertilizer availiblity" dataKey="available" />
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Chart data={data} title="State wise product" grid parent="state" child="product" defaultValue={data[0]} /> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Chart data={data} title="Year wise product" grid parent="_year" child="product" defaultValue={data[0]} /> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Chart data={data} title="Month wise product" grid parent="month" child="product" defaultValue={data[0]} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
