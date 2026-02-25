// pages/index.tsx
import Head from "next/head";
import IntroSection from "../components/IntroSection";
import FeaturesSection from "~/components/FeaturesSection";
import VGPTSection from "~/components/VGPTSection";

const SITE_URL = "https://sirius.opensecurity.com";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sirius Scan - Open-Source Vulnerability Management Platform</title>
        <meta
          name="description"
          content="Sirius Scan is an enterprise-grade, open-source vulnerability management platform that unifies network scanning, agent telemetry, and operator-driven triage."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Sirius Scan - Open-Source Vulnerability Management Platform" />
        <meta
          property="og:description"
          content="Enterprise-grade vulnerability management that unifies network scanning, agent telemetry, and operator-driven triage in one interface."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:title" content="Sirius Scan - Open-Source Vulnerability Management Platform" />
        <meta
          name="twitter:description"
          content="Enterprise-grade vulnerability management that unifies network scanning, agent telemetry, and operator-driven triage in one interface."
        />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#15162c]">
        <IntroSection />
        <FeaturesSection />
        <VGPTSection />
      </main>
    </>
  );
}
