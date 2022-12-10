import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ProgressCircle } from "frontEnd/helpers/ProgressCircle";

const Chart = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        key={data.id}
        xs={12}
        sm={6}
        md={5}
        sx={{ background: "#000", padding: "20px" }}
        display="flex"
        justifyContent="space-between">
        <Box>
          <img src={data.image} alt={data.name} width="50px" />
          <Typography>{data.symbol.toUpperCase()}</Typography>
        </Box>
        <Box>
          <ProgressCircle progress={data.current_price / 10} />
          <Typography>{data.current_price.toLocaleString()}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chart;
