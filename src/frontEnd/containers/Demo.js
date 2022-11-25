import { Button, Typography, useTheme } from "@mui/material";
import React from "react";

const Demo = () => {
    const theme = useTheme()
    const colors = theme.palette
    // console.log(colors)
  return (
    <div>
      <Typography variant="h1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>
      <br/>
      <Typography variant="h2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>
      <br/>
      <Typography variant="h3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>
      <br/>
      <Typography variant="h4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>
      <br/>
      <Typography variant="h5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>
      <br/>
      <Typography variant="h6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>
      <br/>
      <Typography variant="p">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolore.
      </Typography>

      <Button variant="contained" color="error">Demo</Button>
    </div>
  );
};

export default Demo;
