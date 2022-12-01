import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DasboardData } from "../../../../../../context/Dahsboard";
import { Header } from "../Header";
import Layout02 from "./layout02";
import Layout01 from "./layout01";
import { Spinner } from "../../../../../../helpers/Spinner/Spinner";

export const DashboardTap = () => {
  const { loading } = useContext(DasboardData);

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />

      <>
        <>
          <Layout01 />
        </>

        <>
          <Layout02 />
        </>
      </>

      {/* <Grid container>
        <Grid item xs={12} sm={6} md={4} sx={demo}>
          moji
        </Grid>
        <Grid item xs={12} sm={6} md={8} sx={demo}>
          moji
        </Grid>
      </Grid> */}
    </>
  );
};
