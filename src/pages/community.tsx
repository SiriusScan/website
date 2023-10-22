// pages/features.tsx
import Head from "next/head";
import CommunityHero from "~/components/CommunityHero";
import CommuinitySponsor from "~/components/CommunitySponsor";

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
        <CommunityHero />
        <CommuinitySponsor />
      </main>
    </>
  );
}
