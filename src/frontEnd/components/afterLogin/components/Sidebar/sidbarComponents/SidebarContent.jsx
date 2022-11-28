import { Box, Divider, Typography } from "@mui/material";
import { SidebarTabs } from "./";

const SidebarContent = () => {
  const name = JSON.parse(localStorage.getItem("user"));

  const textColor = {
    color: "#fff",
m:'20px 0 35px'
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        py: 4,
      }}>

      <Typography variant="h6" sx={textColor}>
        Hi
        <span style={{ margin: "0 10px", color: "red" }}>
          <u>{name.toUpperCase()}</u>
        </span>
        Welcome
      </Typography>

      <Divider variant="middle" color="#fff" sx={{ mt: 3, mb: 2 }} />

      <SidebarTabs/>

      <Divider variant="middle" color="#fff" sx={{ mt: 2 }} />
    </Box>
  );
};

export default SidebarContent;
