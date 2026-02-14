import { useEffect } from "react";

import Layout from "@/components/Layout";
import CustomHead from "@/components/CustomHead";

import "@/styles/globals.css";
import "@/styles/themes.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  return (
    <Layout>
      <CustomHead title={`Sanjeev Kumar | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
