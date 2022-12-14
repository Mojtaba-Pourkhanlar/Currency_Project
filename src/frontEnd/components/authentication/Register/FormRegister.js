import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { RegisterUser } from "frontEnd/services/user";
import { CustomeTextField, Toastify } from "frontEnd/helpers";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { t, i18n } = useTranslation();
  const togglePassword = () => {
    setPasswordType(!passwordType);
  };
  const navigate = useNavigate();
  const submitHandler = async (user) => {
    try {
      const status = await RegisterUser(user);
      if (status === 200) {
        Toastify("Register Successfully 😉", "success");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("fullname")),
    phone: Yup.number().min(10, t("phoneF02")).required(t("phoneF")),
    email: Yup.string().email(t("emailF")).required(t("emailF02")),
    password: Yup.string().min(6, t("password02")).required(t("password")),
    password_confirmation: Yup.string()
      .required(t("CPassword"))
      .oneOf([Yup.ref("password"), null], t("CPassword02")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
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
          name="name"
          label="Fullname"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <CustomeTextField
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <CustomeTextField
          name="phone"
          label="Phone"
          type="number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
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
        <Box sx={password}>
          <CustomeTextField
            name="password_confirmation"
            label="Password Confirmation"
            type={passwordType ? "text" : "password"}
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.password_confirmation &&
              Boolean(formik.errors.password_confirmation)
            }
            helperText={
              formik.touched.password_confirmation &&
              formik.errors.password_confirmation
            }
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
          {t('sub')}
        </Button>
      </form>
    </div>
  );
};
