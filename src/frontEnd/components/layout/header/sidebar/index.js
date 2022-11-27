import { Box, Button, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Logo } from "../../../../assets/Logo";

const container = {
  backgroundColor: "#121519",
  height: "100%",
  width: "300px",
  padding: "16px",
};
export const SideBar = ({ anchor, toggleDrawer }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={container}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>

      <Box sx={{ cursor: "pointer" , mb:'50px'}}>
        <Link
          to="/landing"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Logo />
          {t("around")}
        </Link>
      </Box>

      <Divider variant="middle" color="#ccc" sx={{ margin: "20px 0" }} />
      <Box m="20px 10px">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="warning">
            <Typography variant="h6" color="#fff">
              {t("Login")}
            </Typography>
          </Button>
        </Link>
      </Box>

      <Divider variant="middle" color="#ccc" sx={{ margin: "10px 0" }} />
    </Box>
  );
};
