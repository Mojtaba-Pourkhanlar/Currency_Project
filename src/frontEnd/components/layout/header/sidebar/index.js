import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
      <Typography variant="h4" sx={{ cursor: "pointer" }}>
        <Link
        //   to="/home"
          style={{
            color: "#448c74",
            textDecoration: "none",
          }}>
          {t("around")}
        </Link>
      </Typography>

      <Divider variant="middle" color="danger" sx={{ margin: "20px 0" }} />
      <Box m="20px 10px">
        <Typography variant="p" fontWeight={600}>
          {/* <Link
            to="/context"
            style={{ textDecoration: "none", color: "#dbdbdb" }}>
          </Link> */}
            {t("context")}
        </Typography>
      </Box>

      <Divider variant="middle" color="daner" sx={{ margin: "10px 0" }} />
    </Box>
  );
};
