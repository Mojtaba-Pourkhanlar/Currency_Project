import { Grid, Typography } from "@mui/material";
import React from "react";
import { DoughnutChart } from "./DoughnutChart";

const Layout03 = () => {
  const demo = {
    display: {
      xs: "none",
      lg: "flex",
    },
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const container = {
    mt: {
      xs: 0,
      md: "-50px",
    },
  };

  return (
    <Grid container sx={container}>
      <Grid item xs={12} lg={8}>
        <Typography sx={demo}>Coming Soon</Typography>
      </Grid>
      <Grid item xs={12} lg={4} align="center">
        <DoughnutChart />
      </Grid>
    </Grid>
  );
};

export default Layout03;
