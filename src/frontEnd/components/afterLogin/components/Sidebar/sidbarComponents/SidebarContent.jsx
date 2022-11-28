import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SidebarTabs } from "./";

const SidebarContent = () => {
  const name = JSON.parse(localStorage.getItem("user"));
  const theme = useTheme();
  const { t } = useTranslation();

  const textColor = {
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    m: "0px 0 35px",
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        py: 4,
      }}>
      <Typography variant="h5" sx={textColor}>
        {t("hi")}
        <span style={{ margin: "10px", color: "red" }}>
          <u>{name.toUpperCase()}</u>
        </span>
        {t("welcome")}
      </Typography>

      <Divider
        variant="middle"
        color={theme.palette.grey.dark}
        sx={{ mt: 8.5, mb: 2 }}
      />

      <SidebarTabs />

      <Divider
        variant="middle"
        color={theme.palette.grey.dark}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default SidebarContent;
