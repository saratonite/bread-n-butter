import * as yup from "yup";

const email = yup
  .string()
  .required()
  .email()
  .label("Email");

const password = yup
  .string()
  .required()
  .min(6)
  .label("Password");

const name = yup
  .string()
  .min(3)
  .required()
  .label("Name");

export const loginValidationSchema = yup.object().shape({
  email,
  password
});

//TODO : Confirm password shoul match the password field
export const signupValidationSchema = yup.object().shape({
  name,
  email,
  password,
  confirm_password: password.label("Confirm password")
});
