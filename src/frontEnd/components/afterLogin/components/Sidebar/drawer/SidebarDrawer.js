import { Drawer } from "@mui/material";
import { SidebarContent } from "../sidbarComponents";

export const SidebarDrawer = ({ setDrawerOpen, drawerOpen, value, handleChange }) => {

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
      <SidebarContent
        value={value}
        handleChange={handleChange}
        setDrawerOpen={setDrawerOpen}
      />
    </Drawer>
  );
};


