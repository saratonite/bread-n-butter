import React from "react";
import {
  InputField,
  FeildGroup,
  Button,
  AuthPageStyle
} from "../components/styles";
import { Formik } from "formik";
import { loginValidationSchema } from "../validations";

const LoginForm = () => {
  return (
    <AuthPageStyle>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, actions) => {
          console.log("Submitting login form !");
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Login :)</h2>
            <InputField
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <FeildGroup>
              <Button type="submit" primary>
                Login&rarr;
              </Button>
              <Button>Back</Button>
            </FeildGroup>
          </form>
        )}
      </Formik>
    </AuthPageStyle>
  );
};

export default LoginForm;
