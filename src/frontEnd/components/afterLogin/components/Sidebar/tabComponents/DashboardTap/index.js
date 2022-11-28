import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProgressCircle, Spinner } from "../../../../../../helpers";
import { Header } from "../Header";

export const DashboardTap = () => {
  const [state] = useState(false);
  const { t } = useTranslation();

  const theme = useTheme();
  const colors = theme.palette;


  const test = {
    backgroundColor: colors.grey[900],
    height: "180px",
  };
  const test02 = {
    backgroundColor: colors.grey[900],
    height: "400px",
  };

  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />
      {state ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={test}>Comming Soon</Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={test}>Comming Soon</Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={test}>Comming Soon</Box>
            </Grid>
            {/* <ProgressCircle size="180" progress="0.60"/> */}
          </Grid>
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12} md={8}>
              <Box sx={test02}>Comming Soon</Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={test02}>Comming Soon</Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Spinner />
          <Typography>{t("coming")}</Typography>
        </>
      )}
    </>
  );
};
