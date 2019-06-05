import React from "react";
import {
  InputField,
  FeildGroup,
  Button,
  AuthPageStyle
} from "../components/styles";
import { Formik } from "formik";
import { signupValidationSchema } from "../validations";

const SignupForm = () => {
  return (
    <AuthPageStyle>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm_password: ""
        }}
        validationSchema={signupValidationSchema}
        onSubmit={(values, actions) => {
          console.log("Submitting signup form");
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Signup :)</h2>
            <InputField
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
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
            <InputField
              name="confirm_password"
              label="Confirm Password"
              type="password"
              value={values.confirm_password}
              onChange={handleChange}
              error={errors.confirm_password}
            />
            <FeildGroup>
              <Button primary full type="submit">
                Signup&rarr;
              </Button>
            </FeildGroup>
          </form>
        )}
      </Formik>
    </AuthPageStyle>
  );
};

export default SignupForm;
