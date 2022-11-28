import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import { DasboardData } from "../../../../../context/Dahsboard";

export const ActionButton = () => {
  const { setDrawerOpen } = useContext(DasboardData);

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}>
      <Fab
        aria-label="Sidebar"
        size="small"
        onClick={() => setDrawerOpen(true)}
        sx={{ backgroundColor: "red", m: 2, borderRadius:'9px'  }}>
        <MenuRounded />
      </Fab>
    </Box>
  );
};
