import { Grid, Skeleton, Typography } from "@mui/material";
import { DasboardData } from "frontEnd/context/Dahsboard";
import React, { useContext } from "react";
import { DoughnutChart } from "./DoughnutChart";

const Layout03 = () => {
  const { loading } = useContext(DasboardData);
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

      {loading ? (
        <Grid item xs={12} lg={4} align="center" sx={{ mt: "80px" }}>
          <Skeleton variant="rounded" height={300} animation="wave" />
        </Grid>
      ) : (
        <Grid item xs={12} lg={4} align="center">
          <DoughnutChart />
        </Grid>
      )}
    </Grid>
  );
};

export default Layout03;
