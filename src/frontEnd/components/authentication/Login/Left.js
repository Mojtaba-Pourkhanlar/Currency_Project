import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
// Icon
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  ArrowBack,
} from "@mui/icons-material";
// REUSABLE
// Form Validate
import { validate } from "../ValidetionInput/ValidetionInput";
import { Toastify, useTitle } from "frontEnd/helpers";

const FormContainer = () => {
  const [passwordType, setPasswordType] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useTitle("Login");

  const togglePassword = () => {
    setPasswordType(!passwordType);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setErrors(validate(data, "Login"));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://apingweb.com/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          Toastify("login Successfully 😉", "success");
          window.location = "/dashboard";
          const users = res.data.result.name;
          const token = res.data.token;
          const result = res.data.result;
          localStorage.setItem("user", JSON.stringify(users));
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("result", JSON.stringify(result));
        }
      })
      .catch((err) => {
        Toastify(`${err.response.data.message} 😒`, "error");
      });
    setTouched({
      email: true,
      password: true,
    });
  };

  // Style
  //#region
  const password = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    outline: "none",
    height: "100%",
  };
  const passToggle = {
    position: "absolute",
    width: "calc(50px - 100%)",
    right: "35px",
    zIndex: "100",
    bottom: "12px",
    cursor: "pointer",
  };

  const errorText = {
    margin: "5px 0 7px 0",
    width: " fit-content",
    fontSize: "1.2rem",
    color: "#dc3545",
    padding: "0 5px",
    borderRadius: "3px",
    backgroundColor: "#ff00002d",
  };

  const button = {
    width: "100%",
    height: "50px",
    mt: "50px",
    backgroundColor: "#084430",
  };

  const CssTextField = {
    margin: "30px 0 3px",
    width: "100%",
    "& label": {
      color: "#212121",
    },
    "& label.Mui-focused": {
      color: "#048830",
    },
    "& input": {
      color: "#212121 !important",
      fontSize: "20px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#616161",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
    "& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill":
      {
        boxShadow: "none",
        " -webkit-text-fill-color": "#000",
      },
  };
  //#endregion

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
            color: "#084430",
            fontWeight: 600,
            textAlign: "center",
          }}>
          LOGIN
        </Typography>

        <form onSubmit={submitHandler} style={{ width: "inherit" }}>
          <Grid item xs={12}>
            <TextField
              sx={CssTextField}
              // autoFocus
              color="secondary"
              label="Email"
              variant="outlined"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touched.email && (
              <Typography variant="span" style={errorText}>
                {errors.email}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Box component="div" sx={password}>
              <TextField
                sx={CssTextField}
                variant="outlined"
                label="Password"
                name="password"
                type={passwordType ? "text" : "password"}
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <Box component="span" sx={passToggle} onClick={togglePassword}>
                {passwordType ? (
                  <VisibilityOutlined color="success" />
                ) : (
                  <VisibilityOffOutlined color="error" />
                )}
              </Box>
            </Box>
            {errors.password && touched.password && (
              <Typography variant="span" style={errorText}>
                {errors.password}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" sx={button}>
              Login
            </Button>
          </Grid>
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
        </form>
      </Grid>
    </div>
  );
};

export default FormContainer;
