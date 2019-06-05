import * as yup from "yup";

const email = yup
  .string()
  .required()
  .email();

const password = yup
  .string()
  .required()
  .min(6);

const name = yup.string().min(3);

export const loginValidationSchema = yup.object().shape({
  email,
  password
});

export const signupValidationSchema = yup.object().shape({
  name,
  email,
  password,
  confirm_password: password.label("Confirm password")
});
