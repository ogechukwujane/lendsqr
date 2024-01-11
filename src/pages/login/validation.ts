import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup.string().trim().email().required("Enter email address"),
  password: yup.string().trim().required("Enter password"),
});
