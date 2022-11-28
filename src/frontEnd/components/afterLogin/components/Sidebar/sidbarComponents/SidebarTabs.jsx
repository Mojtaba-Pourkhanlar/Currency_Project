import { Tabs, Tab, Box, Typography, useTheme } from "@mui/material";
import {
  FaceRounded,
  HomeOutlined,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const SidebarTabs = ({ setDrawerOpen, value, handleChange }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const theme = useTheme();
  const colors = theme.palette;

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const demo = {
    backgroundColor: colors.grey.light,
    borderRadius: 2,
    my: 1,
    mx: 2,
    minHeight: 50,
    color: colors.grey[100],
    "&.Mui-selected": {
      backgroundColor: colors.primary.main,
    },
  };

  const design = {
    position: "absolute",
    left: `${language === "en" ? 0 : null}`,
    right: `${language === "fa" ? 0 : null}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      textColor="grey"
      indicatorColor={colors.primary[500]}
      value={value}
      onChange={handleChange}>
      <Tab
        label={
          <Box sx={design}>
            <HomeOutlined sx={{ m: "0 10px" }} />
            <Typography>{t("Dashboard")}</Typography>
          </Box>
        }
        iconPosition="start"
        sx={demo}
        onClick={() => setDrawerOpen(false)}
        {...tabProps(0)}
      />

      <Tab
        label={
          <Box sx={design}>
            <FaceRounded sx={{ m: "0 10px" }} />
            <Typography>{t("Manage Team")}</Typography>
          </Box>
        }
        sx={demo}
        iconPosition="start"
        onClick={() => setDrawerOpen(false)}
        {...tabProps(1)}
      />

      <Tab
        label={
          <Box sx={design}>
            <ConnectWithoutContactRounded sx={{ m: "0 10px" }} />
            <Typography>{t("Chart")}</Typography>
          </Box>
        }
        iconPosition="start"
        sx={demo}
        onClick={() => setDrawerOpen(false)}
        {...tabProps(2)}
      />
      <Tab
        label={
          <Box sx={design}>
            <ConnectWithoutContactRounded sx={{ m: "0 10px" }} />
            <Typography>{t("About me")}</Typography>
          </Box>
        }
        iconPosition="start"
        sx={demo}
        onClick={() => setDrawerOpen(false)}
        {...tabProps(3)}
      />
    </Tabs>
  );
};

export default SidebarTabs;
