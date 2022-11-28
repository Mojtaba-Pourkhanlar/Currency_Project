import { Box, Typography, useTheme } from "@mui/material";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Box mb="30px" mt="10px" align="start">
      <Typography
        variant="h2"
        color={colors.grey.light}
        fontWeight="bold"
        sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey.main}>
        {subtitle}
      </Typography>
    </Box>
  );
};
