// pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";

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
      <main className="flex min-h-screen flex-col bg-white">
        <Header />
        <IntroSection />
        <div className="container flex flex-col items-center justify-center gap-12 px-4">

          asdf
          {/* Add other sections here */}
        </div>
      </main>
    </>
  );
}
