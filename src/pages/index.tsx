// pages/index.tsx
import IntroSection from "../components/IntroSection";
import FeaturesSection from "~/components/FeaturesSection";
import VGPTSection from "~/components/VGPTSection";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#15162c]">
        <IntroSection />
        <FeaturesSection />
        <VGPTSection />
      </main>
    </>
  );
}
