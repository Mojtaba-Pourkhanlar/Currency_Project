import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DasboardData } from "frontEnd/context/Dahsboard";
import MarketChart from "./MarketChart";

const TopChartMarket = () => {
  const { allMarekts } = useContext(DasboardData);

  const textPosi = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "20px",
  };

  const container = {
    p: "20px",
    borderRadius: "20px",
  };
  return (
    <Grid container sx={{mb:'50px'}}>
      {allMarekts.slice(0, 3).map((item) => (
        <Grid item key={item.id} xs={12} sm={12} md={6} lg={4} sx={container}>
          <Box sx={textPosi}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={item.image} width="45px" alt={item.name} />
              <Typography variant="h5" mx="10px">
                {item.name}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: `${
                  item.price_change_percentage_24h > 0 ? "#00cc00" : "#ff2626"
                }`,
              }}>
              {item.price_change_percentage_24h.toFixed(2)}%
            </Typography>
          </Box>
          <MarketChart
            id={item.id}
            itemColor={item.price_change_percentage_24h}
          />
          <Divider sx={{ mt: "20px" }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopChartMarket;
