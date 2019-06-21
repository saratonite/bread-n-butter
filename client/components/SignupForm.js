import React from "react";
import Router from "next/router";
import {
  InputField,
  FeildGroup,
  Button,
  AuthPageStyle
} from "../components/styles";
import { Formik } from "formik";
import { signupValidationSchema } from "../validations";
import { convertServerValidationErrors } from "../lib/error-handlers";

import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const USER_SIGNUP = gql`
  mutation SIGNUP($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      id
      name
    }
  }
`;

const SignupForm = () => {
  return (
    <AuthPageStyle>
      <Mutation mutation={USER_SIGNUP}>
        {(register, { loading, error }) => {
          return (
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirm_password: ""
              }}
              validationSchema={signupValidationSchema}
              onSubmit={async (values, actions) => {
                try {
                  await register({ variables: values });
                  actions.resetForm();
                  alert("Thank you for signup");
                  Router.push("/login");
                } catch (e) {
                  let serverErrorMsgs = convertServerValidationErrors(e);

                  if (serverErrorMsgs) {
                    actions.setErrors(serverErrorMsgs);
                  } else {
                    actions.setErrors({ email: e.graphQLErrors[0].message });
                  }
                }
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                loading,
                isValid
              }) => (
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
                    <Button
                      primary
                      full
                      type="submit"
                      disabled={loading || !isValid}
                    >
                      Signup&rarr;
                    </Button>
                  </FeildGroup>
                </form>
              )}
            </Formik>
          );
        }}
      </Mutation>
    </AuthPageStyle>
  );
};

export default SignupForm;
