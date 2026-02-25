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
      title: "Actionable Vulnerability Intelligence",
      subtitle:
        "Prioritize, filter, and investigate findings with operator-focused workflows.",
      description:
        "Sirius Scan gives you a live vulnerability navigator with severity distribution, CVSS-based filtering, grouped views, and fast export options. Move from raw findings to concrete remediation decisions without leaving the platform.",
      image: require("../../public/docs/vulnerability-navigator.png"),
    },
    {
      title: "Operator Console & Agent Operations",
      subtitle:
        "Coordinate interactive investigations across connected agents and targets.",
      description:
        "Use the Operator Console to execute commands, review command history, and manage active agents from a unified terminal experience. Sirius Scan combines interactive response with scalable automation for modern security operations.",
      image: require("../../public/docs/terminal.png"),
    },
    {
      title: "Enterprise-Grade Architecture",
      subtitle: "Microservices-based design built for scale and reliability",
      description:
        "Sirius Scan runs on a production-ready architecture with Next.js, Go services, PostgreSQL, RabbitMQ, and Valkey. The scanning pipeline integrates Nmap, Naabu, and agent telemetry with installer-first setup and hardened deployment options.",
      image: require("../../public/docs/scanner.png"),
    },
    {
      title: "System Monitoring & Observability",
      subtitle: "Real-time health monitoring and centralized logging",
      description:
        "Track service health, infrastructure metrics, and vulnerability trends in real time. Sirius Scan provides centralized observability across the stack so teams can validate scan outcomes while monitoring platform stability.",
      image: require("../../public/dashboard-dark.gif"),
    },
  ];

  return (
    <div className="container mx-auto mt-[-1px] bg-[#15162c] px-4 py-16 text-white">
      <h2 className="mb-8 text-center text-4xl text-violet-200 ">
        A Tactical Vulnerability Platform Built for Operators.
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
