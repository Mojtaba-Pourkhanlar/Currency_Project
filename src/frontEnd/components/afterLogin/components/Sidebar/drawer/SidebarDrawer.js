import { Drawer } from "@mui/material";
import { useContext } from "react";
import { DasboardData } from "../../../../../context/Dahsboard";
import { SidebarContent } from "../sidbarComponents";

export const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(DasboardData);

  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
        backgroundColor: "#121519" ,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
      }}>
      <SidebarContent/>
    </Drawer>
  );
};


