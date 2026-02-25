import React, { useState } from "react";

const showcaseItems = [
  {
    id: 0,
    image: "/community-interaction/build-together.png",
    title: "Building Together",
    description:
      "Driven by the collective voice of hundreds on Twitter, Sirius Scan is more than just a vulnerability scanner — it's a testament to the power of community collaboration. Each feature reflects the specific needs of real security teams.",
  },
  {
    id: 1,
    image: "/community-interaction/community-features.png",
    title: "Community-Requested Features",
    description:
      "The features that make Sirius Scan powerful came directly from users. From scan profiles to environment views, community feedback drives what gets built next.",
  },
  {
    id: 2,
    image: "/community-interaction/wish-list.png",
    title: "Community Wish List",
    description:
      "An open wish list lets everyone vote on priorities. The most-requested capabilities rise to the top and shape the project roadmap.",
  },
  {
    id: 3,
    image: "/community-interaction/cmdb-integration.png",
    title: "CMDB Integration",
    description:
      "Enterprise users requested CMDB integration to connect vulnerability data with asset management workflows — and the community delivered.",
  },
  {
    id: 4,
    image: "/community-interaction/regular-discussions.png",
    title: "Regular Discussions",
    description:
      "Ongoing conversations about vulnerability management, scanning strategies, and security operations keep the community engaged and informed.",
  },
  {
    id: 5,
    image: "/community-interaction/remediation-evaluation.png",
    title: "Remediation Evaluation",
    description:
      "Collaborative assessment of remediation strategies helps teams move from discovery to action with community-validated approaches.",
  },
  {
    id: 6,
    image: "/community-interaction/agent-scanning.png",
    title: "Agent-Based Scanning",
    description:
      "The agent architecture was designed with direct community input — lightweight, deployable agents that report back host-level telemetry.",
  },
];

const CommunityShowcase: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-[#15162c] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Community in Action
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Real conversations and collaborations that shaped Sirius Scan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setSelected(selected === item.id ? null : item.id)
              }
              className="group cursor-pointer rounded-xl border border-violet-700/40 bg-violet-900/5 p-0 text-left transition-all duration-300 hover:border-violet-600/60 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-violet-200">
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed text-gray-400 transition-all duration-300 ${
                    selected === item.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-100"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityShowcase;
