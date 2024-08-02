import { Typography } from "@mui/material";
import React from "react";

const Title = ({ text }) => {
  return (
    <Typography fontSize={"20px"} fontWeight={"bold"}>
      {text}
    </Typography>
  );
};

export default Title;
