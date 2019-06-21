import React, { Component } from "react";
import Cookies from "browser-cookies";
import Router from "next/router";
import { getAuthenicatedUser } from "../../lib/auth";
const OnlyGuest = PageComponent => {
  return class GuestHOC extends Component {
    static async getInitialProps(context) {
      let pageProps = {};

      let authUser = await getAuthenicatedUser(context);
      if (!process.browser) {
        // Server side

        if (authUser) {
          context.res.redirect("/dashboard");
          context.res.end();
          return;
        }
      } else {
        if (authUser) {
          Router.push("/dashboard");
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

export default OnlyGuest;
