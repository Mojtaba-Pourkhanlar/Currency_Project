import { Grid, useTheme } from "@mui/material";
import { useState } from "react";
import { Sidebar } from "./sidbarComponents";
import { AboutTab, ChartTab, DashboardTap, ManageTab } from "./tabComponents";
import { TabPanel } from "./TabPanel";

export const SideBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newPage) => {
    setValue(newPage);
  };

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
          <Sidebar handleChange={handleChange} value={value} />
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
          <TabPanel value={value} index={0}>
            <DashboardTap/>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <ManageTab/>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <ChartTab/>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <AboutTab/>
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};
