import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
// Icon
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useTitle } from "frontEnd/helpers";
import { FormRegister } from "./FormRegister";
import { useTranslation } from "react-i18next";

const FormContainer = () => {
  useTitle("Register");
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        background: "#f1f1f1",
        width: "100%",
        minHeight: "100vh",
      }}>
      <Box>
        <Link to="/landing" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "50px",
              m: "10px",
            }}
            startIcon={
              i18n.language === "en" ? (
                <ArrowBack />
              ) : (
                <ArrowForward sx={{ ml: "10px" }} />
              )
            }>
            {t("bLand")}
          </Button>
        </Link>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: {
            xs: "10%",
            lg: "15%",
          },
          alignItems: "center",
          px: {
            xs: "50px",
            sm: "100px",
            md: "50px",
            lg: "100px",
            xl: "200px",
          },
        }}>
        <Typography
          variant="h4"
          sx={{
            color: "#084430",
            fontWeight: 600,
            textAlign: "center",
          }}>
          {t("sin")}
        </Typography>

        <FormRegister />

        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", my: "50px" }}>
            <Typography variant="h6" color="GrayText">
              {t("Do")}
            </Typography>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography color="secondary" fontWeight={700}>
                <u>{t("Login")}</u>
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormContainer;
