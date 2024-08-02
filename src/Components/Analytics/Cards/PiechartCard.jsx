import { Box, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { getPieData, getPieDataReverse } from "../../../utils";
import Piecharts from "../Charts/Piecharts";

const PiechartCard = ({ data, title, dataKey }) => {
  let chartData = getPieData(data, dataKey);
  let chartDataReverse = getPieDataReverse(data, dataKey);

  const [order, selectOrder] = useState(true);
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardHeader
        sx={{ pb: "10px" }}
        title={title}
        titleTypographyProps={{ sx: { fontSize: { base: "12px", lg: "21px" } } }}
        subheader={`${order ? 'Top': "Bottom"} 5 products Overview`}
        subheaderTypographyProps={{ sx: { color: (theme) => `${theme.palette.text.disabled} !important`, fontSize: { base: "10px", lg: "14px" } } }}
        action={
          <Box sx={{ display: "flex", gap: "10px", wrap: "wrap", alignItems: "center", width: "150px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Order</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={order ? 'High to Low': "Low to High"}
                label="order"
                onChange={(e) => selectOrder(!order)}
              >
                {["High to Low", "Low to High"].map((x, _) => (
                  <MenuItem key={x} value={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>{" "}
          </Box>
        }
      />
      <CardContent>
        <Piecharts chartData={order ? chartData : chartDataReverse} />
      </CardContent>
    </Card>
  );
};

export default PiechartCard;
