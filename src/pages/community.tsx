import Head from "next/head";
import CommunityHero from "~/components/CommunityHero";
import CommunityGetInvolved from "~/components/CommunityGetInvolved";
import CommunityKEV100 from "~/components/CommunityKEV100";
import CommunityChannels from "~/components/CommunityChannels";
import CommunityShowcase from "~/components/CommunityShowcase";
import CommunityRoadmap from "~/components/CommunityRoadmap";
import CommunityContributors from "~/components/CommunityContributors";
import CommunitySponsor from "~/components/CommunitySponsor";

export default function Community() {
  return (
    <>
      <Head>
        <title>Community - Sirius Scan</title>
        <meta
          name="description"
          content="Join the Sirius Scan community - contribute code, report issues, discuss features, and help build the future of open-source vulnerability management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#15162c]">
        <CommunityHero />
        <CommunityGetInvolved />
        <CommunityKEV100 />
        <CommunityChannels />
        <CommunityShowcase />
        <CommunityRoadmap />
        <CommunityContributors />
        <CommunitySponsor />
      </main>
    </>
  );
}
