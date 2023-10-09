// pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import FeaturesSection from "~/components/FeaturesSection";
import VGPTSection from "~/components/VGPTSection";
import Footer from "~/components/Footer";

export default function Home() {
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
      <main className="flex min-h-screen flex-col bg-[#15162c]">
        <Header />
        <IntroSection />
        <FeaturesSection />
        <VGPTSection />
        <Footer />
      </main>
    </>
  );
}
