import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Footer from "~/components/Footer";
import Header from "../components/Header";
import "~/styles/globals.css";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const isDocsPage = router.pathname.startsWith("/docs");

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
      {!isDocsPage && <Footer />}
    </>
  );
};

export default MyApp;
