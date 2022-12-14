import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { LoginUse } from "frontEnd/services/user";
import { CustomeTextField, Toastify } from "frontEnd/helpers";
import { useTranslation } from "react-i18next";

export const FormLogin = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { t, i18n } = useTranslation();
  const togglePassword = () => {
    setPasswordType(!passwordType);
  };

  const submitHandler = async (user) => {
    try {
      const status = await LoginUse(user);
      if (status === 200) {
        Toastify("login Successfully 😉", "success");
        window.location = "/dashboard";
      }
    } catch (err) {
      console.log(err);
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
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Box sx={password}>
          <CustomeTextField
            name="password"
            label="Password"
            type={passwordType ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {i18n.language === "en" && (
            <Box component="span" sx={passToggle} onClick={togglePassword}>
              {passwordType ? (
                <VisibilityOutlined color="success" />
              ) : (
                <VisibilityOffOutlined color="error" />
              )}
            </Box>
          )}
        </Box>
        <Button
          color="success"
          variant="contained"
          fullWidth
          sx={{ mt: "20px", height: "50px" }}
          type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
