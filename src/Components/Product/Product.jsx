import { data } from "../../result";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardHeader } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    sortable: true,
    floatingFilter: true,
  },

  {
    field: "_year",
    headerName: "Year",
    width: 200,
    sortable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "month",
    filter: "agTextColumnFilter",
    headerName: "Month",
    width: 150,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "product",
    filter: "agTextColumnFilter",
    headerName: "Product",
    width: 180,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "state",
    filter: "agTextColumnFilter",
    headerName: "State",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "requirement_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Requirement (MT)",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "availability_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Availability (MT)",
    width: 190,
    sortable: true,
    floatingFilter: true,
  },
];

function ProductTable() {
  return (
    <Card sx={{ width: "90%", marginX: "auto" }}>
      <CardHeader title="Fertilizer dataset" />
      <Box sx={{ height: 600 }}>
        <DataGrid
          sx={{ height: "600px" }}
          isRowSelectable={false}
          columns={columns}
          rows={data.map((item) => ({
            ...item,
            requirement_in_mt_: parseFloat(item["requirement_in_mt_"]),
            availability_in_mt_: parseFloat(item["availability_in_mt_"]),
          }))}
          pageSize={10}
        />
      </Box>
    </Card>
  );
}

export default ProductTable;
