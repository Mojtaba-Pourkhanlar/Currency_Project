import { SidebarContent } from "./";
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { ActionButton } from "../drawer/ActionButton";
import { SidebarDrawer } from "../drawer/SidebarDrawer";

const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const colors = theme.palette;

  return (
    <>
      <ActionButton setDrawerOpen={setDrawerOpen} />

      <Box
        sx={{
          backgroundColor: `${
            colors.mode === "dark" ? colors.grey[900] : colors.grey[800]
          } `,
          transition: "all 0.50s linear",
          minHeight: "100vh",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}>
        <SidebarContent
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </Box>

      <SidebarDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        value={value}
        handleChange={handleChange}
      />
    </>
  );
};

export default Sidebar;
