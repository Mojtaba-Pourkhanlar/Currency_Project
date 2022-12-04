import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import bgImage from "../../../assets/images/btc/05.jpg";
import bgImageDark from "../../../assets/images/btc/06.jpg";
import SlideHeader from "./Slider/Slider";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";

const Banner = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const bg = document.querySelector("#bg");
    window.addEventListener("scroll", function () {
      bg.style.opacity = 1 - +window.pageYOffset / 800;
    });
  }, []);


  const imageContainer = {
    position: "absolute",
    top: "50px",
    left: 0,
    width: "100%",
    height: "528px",
    overflow: "hidden",
    zIndex: "-100",
    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
    background: "#000",
  };

  const headerImage = {
    objectFit: "cover",
    objectPosition: " 50% 50%",
    maxWidth: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: " 580px",
    overflow: "hidden",
    pointerEvents: "none",
    transformOrigin: "preserve-3d",
    backfaceVisibility: "hidden",
    marginTop: "-85px",
    transform: "translate3d(0px, 85px, 0px)",
    opacity: 1,
  };

  return (
    <Grid container sx={{ minHeight: "83vh"}}>

      <Container maxWidth="xl">
        <Box sx={{ m: "70px 0 0", width: "100%" }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                textAlign: theme.palette.mode === "light" ? "start" : "center",
                color: "#fff",
                pt: "50px",
              }}>
              {t("cryptocurrency")}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                textAlign: theme.palette.mode === "light" ? "start" : "center",
                color: "#ccc",
                pt: "15px",
              }}>
              {t("infoCrypto")}
            </Typography>
          </Grid>
        </Box>
        <Grid item>
          <Box sx={{ mb: "30px", pt: "120px", textAlign: "center" }}>
            <SlideHeader />
          </Box>
        </Grid>
      </Container>

      <Grid item sx={imageContainer}>
        {theme.palette.mode === "dark" ? (
          <img style={headerImage} src={bgImage} alt="immHheader" id="bg" />
        ) : (
          <img style={headerImage} src={bgImageDark} alt="immHheader" id="bg" />
        )}
      </Grid>
    </Grid>
  );
};

export default Banner;
