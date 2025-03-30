// pages/features.tsx
import Head from "next/head";
import CommunityHero from "~/components/CommunityHero";
import CommunityInteraction from "~/components/CommunityInteraction";
import CommunitySponsor from "~/components/CommunitySponsor";

export default function Community() {
  return (
    <>
      <Head>
        <title>Community - Sirius Scan</title>
        <meta
          name="description"
          content="Join the Sirius Scan community - an open-source General-Purpose Vulnerability Scanner."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#15162c]">
        <CommunityHero />
        <CommunityInteraction />
        <CommunitySponsor />
      </main>
    </>
  );
}
