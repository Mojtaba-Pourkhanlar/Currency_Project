import { Logout, Person, Home, Create } from "@mui/icons-material";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("token");
  window.location = "/landing";
};

const actions = [
  // {
  //   icon: (
  //     <Link to="/home" style={{ textDecoration: "none", color: "#048830" }}>
  //       <Home />
  //     </Link>
  //   ),
  //   name: "Home",
  // },
  // {
  //   icon: (
  //     <Link to="/UserPanel" style={{ textDecoration: "none" }}>
  //       <Person color="secondary" />
  //     </Link>
  //   ),
  //   name: "Profile",
  // },
  { icon: <Logout color="error" onClick={logout} />, name: "Logout" },
];
export const SpeedDialDrop = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const demo = {
    backgroundColor: "#000 !important",
  };

  const test = {
    position:'fixed',
    right:'15px',
    bottom:'18px',
    "& button": {
      backgroundColor: "#084430",
    },
  };

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: "-5px",
        right: "-5px",
      }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={test}
        icon={<SpeedDialIcon openIcon={<Create />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}>
        {actions.map((action) => (
          <SpeedDialAction
            color="secondary"
            sx={demo}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
