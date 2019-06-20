import Cookies from "browser-cookies";
import Router from "next/router";
import jwt from "jsonwebtoken";
export const setAuthCookie = token => Cookies.set("token", token);

export const getAuthenicatedUser = async context => {
  let userData,
    token = null;
  if (!process.browser) {
    // Server side
    token = context.req.cookies.token || null;
  } else {
    // Client side
    token = Cookies.get("token");
  }

  try {
    userData = await jwt.decode(token);
  } catch (e) {
    userData = null;
  }

  return userData;
};

export const isTokenValid = context => {
  let serverToken, clientToken;

  if (!process.browser) {
    // Server side

    serverToken = context.req.cookies.token || null;

    if (!serverToken) {
      context.res.redirect("/login");
      context.res.end();
    }
  } else {
    // Client side
    clientToken = Cookies.get("token");
    if (!clientToken) {
      Router.push("/login");
    }
  }

  let isAuth = serverToken || clientToken ? true : false;

  return isAuth;
};
