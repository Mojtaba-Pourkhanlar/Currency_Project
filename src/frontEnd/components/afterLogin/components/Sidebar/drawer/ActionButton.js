import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

export const ActionButton = ({setDrawerOpen}) => {

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
        sx={{ backgroundColor: "red", m: 2 }}>
        <MenuRounded />
      </Fab>
    </Box>
  );
};


