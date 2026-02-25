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
          content="Join the Sirius Scan community - contribute, discuss, and collaborate on the open-source vulnerability management platform."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sirius.opensecurity.com/community" />
        <meta property="og:title" content="Community - Sirius Scan" />
        <meta
          property="og:description"
          content="Contribute, discuss, and collaborate on the Sirius Scan open-source vulnerability management platform."
        />
        <meta property="og:url" content="https://sirius.opensecurity.com/community" />
        <meta name="twitter:title" content="Community - Sirius Scan" />
        <meta
          name="twitter:description"
          content="Contribute, discuss, and collaborate on the Sirius Scan open-source vulnerability management platform."
        />
      </Head>
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#15162c]">
        <CommunityHero />
        <CommunityInteraction />
        <CommunitySponsor />
      </main>
    </>
  );
}
