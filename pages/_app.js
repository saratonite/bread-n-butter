import App, { Container } from "next/app";
import React, { Component } from "react";
import Layout from "../client/components/Layout";

import { ApolloProvider } from "react-apollo";
import withApollo from "../client/lib/with-apollo";

import { getAuthenicatedUser } from "../client/lib/auth";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // Getiing the auth user data
    let userdata = null;

    try {
      userdata = await getAuthenicatedUser(ctx);
    } catch (e) {
      userdata = null;
    }

    if (Component.getInitialProps) {
      try {
        pageProps = await Component.getInitialProps(ctx);
      } catch (e) {
        //TODO : Error handling
        pageProps = {};
      }
    }
    pageProps = { ...pageProps, isAuth: userdata, user: userdata, kk: true };

    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout user={pageProps.user}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
