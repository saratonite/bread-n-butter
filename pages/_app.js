import App, { Container } from "next/app";
import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import withApollo from "../client/lib/with-apollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
