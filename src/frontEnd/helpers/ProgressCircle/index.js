import { Box, useTheme } from "@mui/material";

export const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = theme.palette;
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${
          colors.mode === "dark" ? "#0d1024" : "#e0e0e0"
        } 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${
          colors.primary.light
        } ${angle}deg 360deg),
            ${colors.success.light}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
