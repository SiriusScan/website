import React from "react";
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
  ServerStackIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const showcaseItems = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Building Together",
    quote:
      "Let's build an open-source vulnerability scanner together! 2 weeks ago hundreds of you all participated in a discussion on what features a vulnerability scanner needs.",
    author: "0sm0s1z",
    platform: "X / Twitter",
    description:
      "Hundreds of security practitioners shaped Sirius Scan's direction from day one through open community discussions.",
  },
  {
    icon: SparklesIcon,
    title: "Community-Requested Features",
    quote:
      "I think I may do a poll on most request features based on this thread. It looks like API extensibility is coming in at the top — module coverage and risk adjustment based on asset tagging.",
    author: "0sm0s1z",
    platform: "X / Twitter",
    description:
      "From scan profiles to environment views, every major feature started as a community request.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Community Wish List",
    quote:
      "Ok, wish list: 1) Import multiple vuln DBs... Not only the CVE one. 2) Adding more intelligence when fingerprinting. 3) Validation of vulns. 4) Graphic patterns...",
    author: "skywalkez",
    platform: "X / Twitter",
    description:
      "An open wish list lets everyone vote on priorities. The most-requested capabilities shape the roadmap.",
  },
  {
    icon: ServerStackIcon,
    title: "CMDB Integration",
    quote:
      "If you want to make it actionable at large scale, integration with an asset inventory is a must. And allow access to results based on that. Inventory data can be assigned through an API.",
    author: "goncalr",
    platform: "X / Twitter",
    description:
      "Enterprise users requested CMDB integration to connect vulnerability data with asset management workflows.",
  },
  {
    icon: ArrowPathIcon,
    title: "Regular Discussions",
    quote:
      "This week's topic will be on scanning agents! Agent AND scan-based, because I can't put agents on everything. Reasonable costs to deploy small and large. Remote engines. A solid API.",
    author: "SecCurmDgn",
    platform: "X / Twitter",
    description:
      "Ongoing conversations about scanning strategies and security operations keep the community engaged.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Remediation Evaluation",
    quote:
      "Tell me how effective I am at remediation. Ideally from the data the vulnerability was published but you could also take the data from the first scan.",
    author: "shakthack",
    platform: "X / Twitter",
    description:
      "Collaborative assessment of remediation strategies helps teams move from discovery to action.",
  },
  {
    icon: CpuChipIcon,
    title: "Agent-Based Scanning",
    quote:
      "I'll second the backdooring cleverness. They're all terrible at that. Agent AND scan-based, because I can't put agents on everything.",
    author: "SecCurmDgn",
    platform: "X / Twitter",
    description:
      "The agent architecture was designed with direct community input — lightweight, deployable agents that report host-level telemetry.",
  },
];

const CommunityShowcase: React.FC = () => {
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex flex-col rounded-xl border border-violet-700/30 bg-gradient-to-b from-violet-900/10 to-transparent p-6 transition-all duration-300 hover:border-violet-600/50 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                    <Icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-violet-200">
                    {item.title}
                  </h3>
                </div>

                <blockquote className="mb-4 flex-1 border-l-2 border-violet-700/40 pl-4 text-sm italic leading-relaxed text-gray-400">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-medium text-violet-300">
                    @{item.author}
                  </span>
                  <span>&middot;</span>
                  <span>{item.platform}</span>
                </div>

                <p className="text-sm leading-relaxed text-gray-400/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunityShowcase;
