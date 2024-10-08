import { Grid } from "@mui/material";
import FormContainer from "../../components/authentication/Register/Left";
import ImageContainer from "../../components/authentication/Register/Right";

export const Register = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <FormContainer />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        sx={{
          backgroundColor: "#0D1024",
          minHeight: "100vh",
          display: {
            xs: "none",
            md: "flex",
          },
        }}>
        <ImageContainer />
      </Grid>
    </Grid>
  );
};
