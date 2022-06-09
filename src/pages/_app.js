import React from "react";
import App from "next/app";
import Head from "next/head";

import "../assets/scss/bootstrap.scss"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../node_modules/swiper/swiper.scss";
import "../assets/scss/main.scss"
import "../assets/scss/react-scss.scss"
import "../assets/fonts/fontawesome-5/css/all.min.css"
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Layout from "../components/Layout";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
