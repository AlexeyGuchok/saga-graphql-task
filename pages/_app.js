import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
});

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    return {
      pageProps,
    };
  };

  state = {
    loaded: false,
  };

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className={this.state.loaded ? "full-height" : "load"}>
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(WrappedApp));

// export default wrapper.withRedux(WrappedApp);
