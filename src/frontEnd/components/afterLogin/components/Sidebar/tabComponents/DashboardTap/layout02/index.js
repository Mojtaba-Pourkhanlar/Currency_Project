import React, { useContext } from "react";
import { DasboardData } from "../../../../../../../context/Dahsboard";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import Chartjs from "./Chartjs";

const Layout02 = () => {
  const { allMarekts } = useContext(DasboardData);

  const theme = useTheme();
  const colors = theme.palette;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 3,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 3,
      backgroundColor: colors.secondary.main,
    },
  }));

  return (
    <>
      <Grid container spacing={2} mt="30px">
        <Grid item xs={12} sm={12} lg={8}>
          <Chartjs />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          {allMarekts.slice(30, 34).map((item) => (
            <>
              <Box key={item.id}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>{item.symbol.toUpperCase()}</Typography>
                  <Typography
                    sx={{
                      color: `${
                        item.price_change_percentage_24h > 0
                          ? "#00cc00"
                          : "#ff2626"
                      }`,
                    }}>
                    {" "}
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                </Box>
                <BorderLinearProgress
                  variant="determinate"
                  value={item.atl_change_percentage / 10}
                />
              </Box>
              <Divider sx={{ m: "25px 0" }} />
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout02;
