import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { DasboardData } from "../../../../../../../context/Dahsboard";
import { ProgressCircle } from "../../../../../../../helpers/ProgressCircle";

const Layout01 = () => {
  const { coins } = useContext(DasboardData);

  const first = coins.slice(22, 23).map((item) => item);
  const second = coins.slice(23, 24).map((item) => item);
  const thrid = coins.slice(24, 25).map((item) => item);

  const posi = {
    position: "absolute",
    top: "40px",
    mx: "30px",
  };

  const theme = useTheme();
  const colors = theme.palette;

  const bgcolor =
    colors.mode === "dark" ? colors.primary.dark : colors.grey.dark;

  return (
    <>
      <Grid container my="30px" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          {first.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              sx={{ background: bgcolor, p: "20px", borderRadius: "10px" }}>
              <Box>
                <Box display="flex" alignItems="center">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50px"
                    height="50px"
                  />
                  <Typography mx="10px">{item.symbol.toUpperCase()}</Typography>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                    color: `${
                      item.price_change_percentage_24h > 0
                        ? "#00cc00"
                        : "#ff2626"
                    }`,
                  }}>
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Box>
              </Box>

              <Box sx={{ position: "relative" }}>
                <ProgressCircle progress={item.current_price / 10} />
                <Typography sx={posi}>
                  {item.current_price.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {second.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              sx={{ background: bgcolor, p: "20px", borderRadius: "10px" }}>
              <Box>
                <Box display="flex" alignItems="center">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50px"
                    height="50px"
                  />
                  <Typography mx="10px">{item.symbol.toUpperCase()}</Typography>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                    color: `${
                      item.price_change_percentage_24h > 0
                        ? "#00cc00"
                        : "#ff2626"
                    }`,
                  }}>
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Box>
              </Box>

              <Box sx={{ position: "relative" }}>
                <ProgressCircle progress={item.current_price / 10} />
                <Typography sx={posi}>
                  {item.current_price.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {thrid.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              sx={{ background: bgcolor, p: "20px", borderRadius: "10px" }}>
              <Box>
                <Box display="flex" alignItems="center">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50px"
                    height="50px"
                  />
                  <Typography mx="10px">{item.symbol.toUpperCase()}</Typography>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                    color: `${
                      item.price_change_percentage_24h > 0
                        ? "#00cc00"
                        : "#ff2626"
                    }`,
                  }}>
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Box>
              </Box>
              <Box sx={{ position: "relative" }}>
                <ProgressCircle progress={item.current_price / 10} />
                <Typography sx={posi}>
                  {item.current_price.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout01;
