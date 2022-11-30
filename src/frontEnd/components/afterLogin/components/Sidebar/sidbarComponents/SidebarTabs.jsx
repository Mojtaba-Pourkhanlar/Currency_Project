import { Tabs, Tab, Box, Typography, useTheme } from "@mui/material";
import {
  PeopleOutlined,
  HomeOutlined,
  Face,
  BarChart,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DasboardData } from "../../../../../context/Dahsboard";

const SidebarTabs = () => {
  const { setDrawerOpen, pageNumber, handlePageNumber } =
    useContext(DasboardData);

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
    backgroundColor: colors.grey[900],
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
      textColor="inherit"
      indicatorColor={colors.primary[500]}
      value={pageNumber}
      onChange={handlePageNumber}>
      <Tab
        label={
          <Box sx={design}>
            <HomeOutlined sx={{ m: "0 10px" }} />
            <Typography>{t("dashboard")}</Typography>
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
            <PeopleOutlined sx={{ m: "0 10px" }} />
            <Typography>{t("MarketTab")}</Typography>
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
            <PeopleOutlined sx={{ m: "0 10px" }} />
            <Typography>{t("manageTeam")}</Typography>
          </Box>
        }
        sx={demo}
        iconPosition="start"
        onClick={() => setDrawerOpen(false)}
        {...tabProps(2)}
      />

      <Tab
        label={
          <Box sx={design}>
            <BarChart sx={{ m: "0 10px" }} />
            <Typography>{t("chart")}</Typography>
          </Box>
        }
        iconPosition="start"
        sx={demo}
        onClick={() => setDrawerOpen(false)}
        {...tabProps(3)}
      />
      <Tab
        label={
          <Box sx={design}>
            <Face sx={{ m: "0 10px" }} />
            <Typography>{t("anoutMe")}</Typography>
          </Box>
        }
        iconPosition="start"
        sx={demo}
        onClick={() => setDrawerOpen(false)}
        {...tabProps(4)}
      />
    </Tabs>
  );
};

export default SidebarTabs;
