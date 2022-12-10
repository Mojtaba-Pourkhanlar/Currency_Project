import { Typography, useTheme } from "@mui/material";
import { PlayArrow, ArrowLeft } from "@mui/icons-material";

export const DevInfoEN = ({ children }) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Typography
      variant="h5"
      color={colors.grey.main}
      textAlign="left"
      sx={{ mt: 2 }}>
      <PlayArrow
        sx={{
          verticalAlign: "bottom",
        }}
      />
      {children}
    </Typography>
  );
};

export const DevInfoFA = ({ children }) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Typography
      variant="h5"
      color={colors.grey.main}
      textAlign="right"
      sx={{ mt: 2 }}>
      <ArrowLeft
        sx={{
          verticalAlign: "bottom",
          fontSize: 30,
        }}
      />
      {children}
    </Typography>
  );
};
