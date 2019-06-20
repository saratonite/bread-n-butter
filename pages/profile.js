import React from "react";
import AuthGuard from "../client/components/wrappers/AuthGuard";

const Profile = () => {
  return <h1>Profile</h1>;
};

export default AuthGuard(Profile);
