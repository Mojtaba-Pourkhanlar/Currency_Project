import * as Yup from "yup";

export const yupValidation = Yup.object().shape({
  fullname: Yup.string().required("Username required"),
  phone: Yup.number()
    .required("Phone required")
    .max(10, "The number of characters must be 10"),
  email: Yup.string()
    .required("Email required")
    .email("Email address is invalid"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password need to be 6 characters or more"),
  passwordConfirmation: Yup.string()
    .required("Confirm the Password")
    .oneOf([Yup.ref("password"), null], "Password do not match"),
});
