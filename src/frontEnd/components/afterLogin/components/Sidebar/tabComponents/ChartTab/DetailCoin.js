import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const DetailCoin = ({ coin }) => {
  const {
    market_cap_rank,
    symbol,
    name,
    image,
    price_change_24h,
    market_cap_change_24h,
    last_updated,
    current_price,
    low_24h,
  } = coin;
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const colors = theme.palette;

  const alignText = {
    textAlign: i18n.language === "en" ? "left" : "right",
  };

  const displayBox = {
    display: { xs: "flex", md: "block" },
    justifyContent: "space-between",
    my: "20px",
  };

  const boxContainer = {
    display: { xs: "block", lg: "flex" },
    justifyContent: "space-between",
    textAlign: i18n.language === "en" ? "left" : "right",
  };

  return (
    <>
      <Grid container>
        <Grid item sx={alignText} xs={12} sm={12} md={5} lg={5} align="left">
          <Button variant="contained" color="secondary">
            #{market_cap_rank} {t("rank")}
          </Button>
          <Box display="flex" alignItems="center" mt="30px" mb="50px">
            <img src={image} alt={name} width="70px" />
            <Box mx="20px">
              <Typography variant="h3" color={colors.grey.light}>
                {name}
              </Typography>
              <Typography variant="h4" color={colors.grey.main}>
                {symbol}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" fontWeight={500} color={colors.grey.main}>
              {name} Price in USD
            </Typography>
            <Typography
              variant="h2"
              fontWeight={600}
              color={colors.grey.light}
              my="25px">
              ${current_price.toLocaleString()}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} sx={boxContainer}>
          <Box>
            <Box sx={displayBox}>
              <Typography variant="h5" color={colors.grey.main} mb="10px">
                {t("currentPrice")}
              </Typography>
              <Typography variant="h4" color={colors.grey.light}>
                ${current_price.toLocaleString()}
              </Typography>
            </Box>
            <Box sx={displayBox}>
              <Typography variant="h5" color={colors.grey.main} mb="10px">
                {t("changePrice")}
              </Typography>
              <Typography variant="h4" color={colors.grey.light}>
                ${price_change_24h.toLocaleString()}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box sx={displayBox}>
              <Typography variant="h5" color={colors.grey.main} mb="10px">
                {t("currentLow")}
              </Typography>
              <Typography variant="h4" color={colors.grey.light}>
                ${low_24h}
              </Typography>
            </Box>
            <Box sx={displayBox}>
              <Typography variant="h5" color={colors.grey.main} mb="10px">
                {t("currentMarket")}
              </Typography>
              <Typography variant="h4" color={colors.grey.light}>
                ${market_cap_change_24h.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailCoin;
