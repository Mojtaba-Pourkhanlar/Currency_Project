import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CS from "./NotFound.module.css";

export const NotFound = ({ demo }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const container = document.querySelector("#container");

    window.onmousemove = function (e) {
      let x = e.clientX / 5;
      let y = e.clientY / 5;

      container.style.backgroundPositionX = x + "px";
      container.style.backgroundPositionY = y + "px";
    };
  }, []);

  return (
    <div className={CS.container} id="container">
      <Box align="center" mb="20px">
        <Typography variant="h2">404</Typography>
        <Typography variant="h3">{t("notFound")}</Typography>
      </Box>
      <Link to={`/${demo}`} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          {t("back")}
        </Button>
      </Link>
    </div>
  );
};
