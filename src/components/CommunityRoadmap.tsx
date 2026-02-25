import React from "react";
import Link from "next/link";
import {
  CheckCircleIcon,
  ArrowPathIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

type MilestoneStatus = "done" | "in-progress" | "upcoming";

interface Milestone {
  title: string;
  description: string;
  status: MilestoneStatus;
  communityRequested?: boolean;
}

const milestones: Milestone[] = [
  {
    title: "v1.0.0 Production Release",
    description:
      "Full production-ready platform with installer-first setup, microservices architecture, and comprehensive scanning pipeline.",
    status: "done",
  },
  {
    title: "Agent-Based Scanning",
    description:
      "Lightweight host agents that report telemetry, software inventory, and vulnerability data back to the central engine.",
    status: "done",
    communityRequested: true,
  },
  {
    title: "KEV100 Coverage",
    description:
      "Detect every vulnerability on CISA's Known Exploited Vulnerabilities list with open-source tooling.",
    status: "in-progress",
    communityRequested: true,
  },
  {
    title: "Sirius Pro & Enterprise Features",
    description:
      "Advanced reporting, team collaboration, managed infrastructure, and priority support for enterprise security operations.",
    status: "upcoming",
  },
  {
    title: "Plugin & Extension System",
    description:
      "A modular extension framework for custom assessors, integrations, and community-built scanning modules.",
    status: "upcoming",
    communityRequested: true,
  },
];

const statusConfig: Record<
  MilestoneStatus,
  { icon: React.FC<{ className?: string }>; dotColor: string; label: string }
> = {
  done: {
    icon: CheckCircleIcon,
    dotColor: "border-emerald-500 bg-emerald-500/20",
    label: "Completed",
  },
  "in-progress": {
    icon: ArrowPathIcon,
    dotColor: "border-amber-400 bg-amber-400/20",
    label: "In Progress",
  },
  upcoming: {
    icon: ClockIcon,
    dotColor: "border-violet-500 bg-violet-500/20",
    label: "Upcoming",
  },
};

const CommunityRoadmap: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1b3a] to-[#15162c] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Project Roadmap
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Where we&apos;ve been and where we&apos;re headed — shaped by
            community input.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-violet-700/40 md:left-8" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const config = statusConfig[milestone.status];
              const Icon = config.icon;
              return (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  <div
                    className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 md:h-16 md:w-16 ${config.dotColor}`}
                  >
                    <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                  </div>

                  <div className="flex-1 rounded-xl border border-violet-700/40 bg-violet-900/5 p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-violet-200">
                        {milestone.title}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          milestone.status === "done"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : milestone.status === "in-progress"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-violet-500/20 text-violet-400"
                        }`}
                      >
                        {config.label}
                      </span>
                      {milestone.communityRequested && (
                        <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                          Community Requested
                        </span>
                      )}
                    </div>
                    <p className="leading-relaxed text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://github.com/SiriusScan/Sirius/milestones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-violet-200 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-white hover:text-violet-600 hover:shadow-lg"
          >
            View Full Roadmap on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityRoadmap;
