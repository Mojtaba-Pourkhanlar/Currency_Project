import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../Header";
import ShowMarkets from "./ShowMarkets";
import TopChartMarket from "./TopChartMarket";

export const MarketTab = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={t("market")} subtitle={t("marketDec")} />
      <Grid container my="20px">
        <Grid item xs={12}>
          <TopChartMarket />
        </Grid>
        <Grid item xs={12}>
          <ShowMarkets />
        </Grid>
      </Grid>
    </>
  );
};
