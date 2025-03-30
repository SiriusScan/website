import React from "react";
import Image, { StaticImageData } from "next/image";

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Actionable Vulnerabilities",
      subtitle:
        "Understand systems, work through vulnerabilities, and take action.",
      description:
        "Interacting with vulnerabilities is a core security practice. Your vulnerability scanner should make it easy to take action on your findings. Sirius Scan allows you to quickly exclude vulnerabilities from systems or even entire engagements so that you can focus on what matters most.",
      image: require("../../public/vulnerabilityNav.png"),
    },
    {
      title: "Vulnerability Discovery and Remediation (VDR)",
      subtitle:
      "Don't be passive, hunt down vulnerabilities wherever they may be.",
      description: "With its powerful agent Sirius Scan makes interacting with vulnerabilities a breeze. Are you looking to script specialized discovery? How about automate validation? Exploitation? Sirius Scan has you covered.",
      image: require("../../public/svdb.gif"),
    },
    {
      title: "Modular Scanning Engine",
      subtitle: "Your favorite scanners, plus one, then enhanced!",
      description: "The Sirius Scan engine is modular and integrates with the best open source scanners including Rustscan, Nmap Scripting Engine and Nuclei. Sirius also includes its own customizable scanner, Howl.",
      image: require("../../public/scanningEngine.png"),
    },
  ];

  return (
    <div className="container mx-auto bg-[#15162c] px-4 py-16 text-white mt-[-1px]">
      <h2 className="mb-8 text-center text-4xl text-violet-200 ">
        A Tactical Vulnerability Scanner. One Dedicated To You, The Operator.
      </h2>
      <div className="grid grid-cols-1 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
          >
            {index % 2 === 0 ? (
              <>
                <FeatureImage feature={feature} />
                <FeatureText feature={feature} />
              </>
            ) : (
              <>
                <FeatureText feature={feature} />
                <FeatureImage feature={feature} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

const FeatureImage: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="px-8 py-4 text-center">
    <Image
      src={feature.image}
      alt={feature.title}
      layout="responsive"
      width={500}
      height={300}
      className="rounded-lg"
    />
  </div>
);

const FeatureText: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="px-8 py-4">
    <h3 className="mb-2 text-3xl font-medium text-amber-300">
      {feature.title}
    </h3>
    <h4 className="mb-4 text-xl text-violet-200">{feature.subtitle}</h4>
    <p className="text-xl font-extralight">{feature.description}</p>
  </div>
);
