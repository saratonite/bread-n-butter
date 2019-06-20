import React, { Component } from "react";
import Cookies from "browser-cookies";
import Router from "next/router";
import { isTokenValid, getAuthenicatedUser } from "../../lib/auth";
const AuthGuard = PageComponent => {
  return class AuthHOC extends Component {
    static async getInitialProps(context) {
      let authUser = await getAuthenicatedUser(context);
      let pageProps = {};

      if (!process.browser) {
        // Server side

        if (!authUser) {
          context.res.redirect("/login");
          context.res.end();
          return;
        }
      } else {
        if (!authUser) {
          Router.push("/login");
        }
      }

      // get page props
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(context);
      }

      return pageProps;
    }
    render() {
      return <PageComponent {...this.props} />;
    }
  };
};

export default AuthGuard;
