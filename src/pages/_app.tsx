import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Footer from "~/components/Footer";
import Header from "../components/Header";
import "~/styles/globals.css";
import { useRouter } from "next/router";

const SITE_URL = "https://sirius.opensecurity.com";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const isDocsPage = router.pathname.startsWith("/docs");

  return (
    <>
      <Head>
        <title>Sirius Scan</title>
        <meta
          name="description"
          content="Sirius Scan is an enterprise-grade, open-source vulnerability management platform for modern security teams."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#15162c" />

        {/* OpenGraph defaults */}
        <meta property="og:site_name" content="Sirius Scan" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/dashboard-dark.gif`}
        />
        <meta
          property="og:image:alt"
          content="Sirius Scan dashboard showing vulnerability trends and scan results"
        />

        {/* Twitter Card defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/dashboard-dark.gif`}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      {!isDocsPage && <Footer />}
    </>
  );
};

export default MyApp;
