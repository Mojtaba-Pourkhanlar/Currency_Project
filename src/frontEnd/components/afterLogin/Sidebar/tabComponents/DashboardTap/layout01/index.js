import { Box, Grid, Skeleton, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { DasboardData } from "frontEnd/context/Dahsboard";
import { ProgressCircle } from "frontEnd/helpers/ProgressCircle";

const Layout01 = () => {
  const { coins, loading } = useContext(DasboardData);

  const first = coins.slice(19, 22);
  const posi = {
    position: "absolute",
    top: "40px",
    left: "43%",
  };

  const theme = useTheme();
  const colors = theme.palette;

  const bgcolor =
    colors.mode === "dark" ? colors.primary.dark : colors.grey.dark;

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {loading ? (
          <>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Skeleton variant="rounded" height={140} animation="wave" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Skeleton variant="rounded" height={140} animation="wave" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Skeleton variant="rounded" height={140} animation="wave" />
            </Grid>
          </>
        ) : (
          <>
            {first.map((item) => (
              <Grid item xs={12} sm={6} md={6} lg={4}>
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
                      <Typography mx="10px">
                        {item.symbol.toUpperCase()}
                      </Typography>
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
                      {Math.round(item.current_price.toLocaleString())}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default Layout01;
