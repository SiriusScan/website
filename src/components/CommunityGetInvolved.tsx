import React from "react";
import Link from "next/link";
import {
  BugAntIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const pathways = [
  {
    title: "Report Issues",
    description:
      "Found a bug or have a feature idea? Open a GitHub issue with clear reproduction steps and help us improve Sirius Scan for everyone.",
    icon: BugAntIcon,
    href: "https://github.com/SiriusScan/Sirius/issues",
    cta: "Open an Issue",
  },
  {
    title: "Contribute Code",
    description:
      "Pick up a good-first-issue, submit a PR, or propose a new feature. Our contributing guide walks you through the full workflow.",
    icon: CodeBracketIcon,
    href: "/docs/community/contributing",
    cta: "Contributing Guide",
  },
  {
    title: "Improve Documentation",
    description:
      "Documentation is open source too. Fix a typo, add examples, or write a guide — every improvement helps the next person.",
    icon: DocumentTextIcon,
    href: "https://github.com/SiriusScan/Sirius",
    cta: "View Docs Repo",
  },
  {
    title: "Share & Discuss",
    description:
      "Join conversations on Discord for real-time help, or use GitHub Discussions for longer-form topics, RFCs, and community showcases.",
    icon: ChatBubbleLeftRightIcon,
    href: "https://discord.gg/VTjqSxkJqX",
    cta: "Start a Conversation",
  },
];

const CommunityGetInvolved: React.FC = () => {
  return (
    <div className="bg-[#15162c] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Get Involved
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            There are many ways to contribute — no matter your skill level or
            background.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-violet-700/40 bg-violet-900/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                <item.icon className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-violet-200">
                {item.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                {item.cta}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityGetInvolved;
