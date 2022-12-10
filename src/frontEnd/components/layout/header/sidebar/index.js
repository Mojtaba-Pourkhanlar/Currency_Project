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
  const isLogin = localStorage.getItem("token");

  return (
    <Box
      sx={container}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mb: "50px",
        }}>
        <Logo />
        {t("around")}
      </Box>

      {isLogin ? null : (
        <Box m="20px 10px">
          <Divider variant="middle" color="#ccc" sx={{ margin: "20px 0" }} />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="warning">
              <Typography variant="h6" color="#fff">
                {t("Login")}
              </Typography>
            </Button>
          </Link>
          <Divider variant="middle" color="#ccc" sx={{ margin: "10px 0" }} />
        </Box>
      )}
    </Box>
  );
};
