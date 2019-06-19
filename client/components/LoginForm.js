import React from "react";
import Router from "next/router";
import { Formik } from "formik";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import {
  InputField,
  FeildGroup,
  Button,
  AuthPageStyle
} from "../components/styles";
import { loginValidationSchema } from "../validations";
import { convertServerValidationErrors } from "../lib/error-handlers";

const LOGIN_MUTATION = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const LoginForm = () => {
  return (
    <AuthPageStyle>
      <Mutation mutation={LOGIN_MUTATION}>
        {(login, { loading, error }) => {
          return (
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginValidationSchema}
              onSubmit={async (values, actions) => {
                console.log("Submitting login form !");

                try {
                  const data = await login({ variables: values });

                  if (data.token) {
                    // Logedin successfully
                  }
                  console.log("login data", data);

                  Router.push("/dashboard");
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
          );
        }}
      </Mutation>
    </AuthPageStyle>
  );
};

export default LoginForm;
