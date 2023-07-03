import "../styles/globals.css";
import { Layout } from "../components";
import React from "react";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../Context/StateContext";

function MyApp({ Component, pageProps }) {
  <meta
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
  />;
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
