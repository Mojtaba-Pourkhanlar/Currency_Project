import { SidebarContent } from "./";
import { Box } from "@mui/material";
import { ActionButton } from "../drawer/ActionButton";
import { SidebarDrawer } from "../drawer/SidebarDrawer";

const Sidebar = () => {
  return (
    <>
      <ActionButton />

      <Box
        sx={{
          backgroundColor: "transparent",
          transition: "all 0.50s linear",
          minHeight: "100vh",
          position: "fixed",
          width: {
            md: "225px",
            lg: "210px",
            xl: "250px",
          },
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}>
        <SidebarContent />
      </Box>

      <SidebarDrawer />
    </>
  );
};

export default Sidebar;
