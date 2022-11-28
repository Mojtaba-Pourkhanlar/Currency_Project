import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = theme.palette;
  const { t } = useTranslation();

  return (
    <Box mb="30px" mt="10px" align="start">
      <Typography
        variant="h2"
        color={colors.grey.light}
        fontWeight="bold"
        sx={{ mb: "5px" }}>
        {t(`${title}`)}
      </Typography>
      <Typography variant="h5" mt="10px" color={colors.grey.main}>
{t(`${subtitle}`)}
      </Typography>
    </Box>
  );
};
