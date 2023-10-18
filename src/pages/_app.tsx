import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Footer from "~/components/Footer";
import Header from "../components/Header";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sirius Scan</title>
        <meta
          name="description"
          content="Sirius Scan is an open-source General-Purpose Vulnerability Scanner."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
