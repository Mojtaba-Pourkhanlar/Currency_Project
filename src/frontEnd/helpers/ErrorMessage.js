import { Typography } from "@mui/material";
import React from "react";

export const ErrorMessage = ({ error, visible }) => {
  const errorText = {
    margin: "5px 0 7px 0",
    width: " fit-content",
    fontSize: "1.2rem",
    color: "#dc3545",
    padding: "0 5px",
    borderRadius: "3px",
    backgroundColor: "#ff00002d",
  };
  if (!error || !visible) return null;
  return (
    <Typography variant="span" sx={errorText}>
      {error}
    </Typography>
  );
};
