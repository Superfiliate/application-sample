import "@fontsource/oxygen/400.css";
import "@fontsource/oxygen/700.css";
import "../styles/fonts/trio-grotesk/600.css";
import "../styles/fonts/good-sans/400.css";
import "../styles/fonts/good-sans/500.css";
import "../styles/fonts/good-sans/700.css";
import "../styles/globals.css";

import Layout from "components/Layout";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Onboarding = dynamic(() => import("components/Onboarding"), {
  ssr: false,
});

const BaseNotification = dynamic(
  () => import("components/BaseNotification")
);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Superfiliate</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      </Head>

      <Component {...pageProps} />

      <BaseNotification />
      <Onboarding />
    </Layout>
  );
}

export default MyApp;
