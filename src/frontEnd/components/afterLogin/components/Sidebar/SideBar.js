import { Grid, useTheme } from "@mui/material";
import { useContext } from "react";
import { DasboardData } from "../../../../context/Dahsboard";
import { Sidebar } from "./sidbarComponents";
import { AboutTab, ChartTab, DashboardTap, ManageTab } from "./tabComponents";
import { TabPanel } from "./TabPanel";

export const SideBar = () => {
  const { pageNumber } = useContext(DasboardData);

  const theme = useTheme();
  const colors = theme.palette;

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          lg={2}
          xl={2}
          sx={{
            backgroundColor: colors.primary,
            width: "inherit",
          }}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          lg={10}
          xl={10}
          sx={{
            backgroundColor: colors.primary,
            transition: "all 0.50s linear",
            textAlign: "center",
          }}>
          <TabPanel value={pageNumber} index={0}>
            <DashboardTap />
          </TabPanel>

          <TabPanel value={pageNumber} index={1}>
            <ManageTab />
          </TabPanel>

          <TabPanel value={pageNumber} index={2}>
            <ChartTab />
          </TabPanel>

          <TabPanel value={pageNumber} index={3}>
            <AboutTab />
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};
