// pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import FeaturesSection from "~/components/FeaturesSection";

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
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#131e38] to-[#15162c]">
        <Header />
        <IntroSection />
        <FeaturesSection />
        <div className="container flex flex-col items-center justify-center gap-12 px-4">

          asdf
          {/* Add other sections here */}
        </div>
      </main>
    </>
  );
}
