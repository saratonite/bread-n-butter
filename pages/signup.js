import React from "react";
import OnlyGuest from "../client/components/wrappers/OnlyGuest";
import SignupForm from "../client/components/SignupForm";

const Signup = () => {
  return <SignupForm />;
};

export default OnlyGuest(Signup);
