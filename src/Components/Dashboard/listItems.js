import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ListItemText } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ListItem = () => {
  const pathname = useLocation();
  const history = useHistory();

  return (
    <>
      <ListItemButton onClick={() => history.push("/")} selected={pathname.pathname === "/"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
      <ListItemButton onClick={() => history.push("/product")} selected={pathname.pathname === "/product"}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItemButton>
    </>
  );
};

export default ListItem;
