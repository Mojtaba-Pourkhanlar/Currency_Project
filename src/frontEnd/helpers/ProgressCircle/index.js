import { Box, useTheme } from "@mui/material";

export const ProgressCircle = ({ progress, size = "100" }) => {
  const theme = useTheme();
  const colors = theme.palette;
  const angle = progress * 90;

  return (
    <Box
      sx={{
        background: `radial-gradient(${
          colors.mode === "dark" ? "#131836" : "#b3b3b3"
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
