import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Backdrop, Box, Button, CircularProgress } from "@mui/material";
import { LoginUse } from "frontEnd/services/user";
import { CustomeTextField, Toastify } from "frontEnd/helpers";
import { useTranslation } from "react-i18next";

export const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const { t } = useTranslation();
  const togglePassword = () => {
    setPasswordType(!passwordType);
  };

  const submitHandler = async (user) => {
    try {
      setLoading(true);

      const status = await LoginUse(user);
      if (status === 200) {
        Toastify("login Successfully 😉", "success");
        setLoading(false);

        window.location = "/dashboard";
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const validationSchema = yup.object({
    email: yup.string().email(t("emailF")).required(t("emailF02")),
    password: yup.string().min(6, t("password02")).required(t("password")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  // Style
  const password = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    outline: "none",
    height: "100%",
    width: {
      sm: "400px",
      md: "300px",
      lg: "400px",
    },
  };
  const passToggle = {
    position: "absolute",
    width: "calc(50px - 100%)",
    right: "35px",
    zIndex: "100",
    top: "50px",
    cursor: "pointer",
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CustomeTextField
          name="email"
          label={t("email")}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Box sx={password}>
          <CustomeTextField
            name="password"
            label={t("pass")}
            type={passwordType ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box component="span" sx={passToggle} onClick={togglePassword}>
            {passwordType ? (
              <VisibilityOutlined color="success" />
            ) : (
              <VisibilityOffOutlined color="error" />
            )}
          </Box>
        </Box>
        {loading ? (
          <Backdrop
            sx={{
              color: "#FFEB3B",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}>
            <CircularProgress sx={{ color: "#FFEB3B" }} />
          </Backdrop>
        ) : (
          <Button
            color="success"
            variant="contained"
            fullWidth
            sx={{ mt: "20px", height: "50px" }}
            type="submit">
            {t("sin")}
          </Button>
        )}
      </form>
    </div>
  );
};
