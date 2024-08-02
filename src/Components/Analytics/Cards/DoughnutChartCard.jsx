// ** MUI Imports
import CardContent from "@mui/material/CardContent";
import { Box, Card, CardHeader, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ApexDonutChart from "../../charts/apex-charts/ApexDonutChart";

// ** Component Import
import { useState } from "react";
import { getCityWiseProduct } from "../../../utils";

const DoughnutChartCard = ({ data, title, dataKey }) => {
  // ** Hook

  const [selectedProduct, setSelectedProduct] = useState("UREA");
  const products = [...new Set(data.map((item) => item.product))];

  const top5Data = getCityWiseProduct(data, dataKey, selectedProduct);

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
        title={title}
        subheader={`Overview for ${selectedProduct}`}
        titleTypographyProps={{ sx: { fontSize: { base: "12px", lg: "21px" } } }}
        subheaderTypographyProps={{ sx: { color: (theme) => `${theme.palette.text.disabled} !important`, fontSize: { base: "10px", lg: "14px" } } }}
        action={
          <Box sx={{ display: "flex", gap: "10px", wrap: "wrap", alignItems: "center", width: "100px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedProduct}
                label="product"
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                {products.map((x, _) => (
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
        <ApexDonutChart label={top5Data.map((i) => i.state)} data={top5Data.map((item) => parseFloat(item[dataKey]))} />
      </CardContent>
    </Card>
  );
};

export default DoughnutChartCard;
