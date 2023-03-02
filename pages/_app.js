import "../styles/globals.css";
import { Layout } from "../components";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Offline } from "next-offline/runtime";
import { StateContext } from "../Context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Offline />
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
