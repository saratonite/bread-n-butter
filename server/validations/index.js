import Joi from "@hapi/joi";

const options = { abortEarly: false };
const name = Joi.string()
  .required()
  .label("Name");

const email = Joi.string()
  .email()
  .required()
  .label("Email");

const password = Joi.string()
  .required()
  .min(6);

const signupValidationSchema = Joi.object().keys({
  name,
  email,
  password
});

export const validateSignup = inputs =>
  Joi.validate(inputs, signupValidationSchema, options);

const loginSchema = Joi.object().keys({
  email,
  password
});

export const validateLogin = inputs =>
  Joi.validate(inputs, loginSchema, options);
