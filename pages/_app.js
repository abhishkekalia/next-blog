
import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import wrapper from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import configureStore from "../redux/store";
import '../styles/styles.css'
// import '../styles/style.css'

function MyApp({ Component, pageProps, store, ...rest }) {
  return (
    <Provider store={configureStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp