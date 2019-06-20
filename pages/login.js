import React from "react";
import LoginForm from "../client/components/LoginForm";
import OnlyGuest from "../client/components/wrappers/OnlyGuest";

const Login = () => {
  return <LoginForm />;
};

export default OnlyGuest(Login);
