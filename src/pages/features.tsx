// pages/features.tsx
import Head from "next/head";
import FeaturesHero from "~/components/FeaturesHero";

export default function Features() {
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
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#15162c]">
        <div className="absolute left-0 top-0 z-0 h-full w-full translate-x-[-50%] -rotate-45 transform bg-gradient-to-br from-transparent via-violet-300/5 to-transparent md:-rotate-12"></div>
        <FeaturesHero />
      </main>
    </>
  );
}
