import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// Icon
import { ArrowBack } from "@mui/icons-material";
import { useTitle } from "frontEnd/helpers";
import { FormLogin } from "./FormLogin";

const FormContainer = () => {
  useTitle("Login");

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
            startIcon={<ArrowBack />}>
            Return Landing
          </Button>
        </Link>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "25%",
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
            color: "#048830",
            fontWeight: 600,
            textAlign: "center",
          }}>
          LOGIN
        </Typography>

        <FormLogin />

        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", mt: "50px" }}>
            <Typography variant="h6" color="GrayText">
              Don't have an account yet?
            </Typography>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Typography color="secondary" fontWeight={700}>
                <u>Create an account</u>
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormContainer;
