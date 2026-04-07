import React from "react";
import Link from "next/link";

const stats = [
  { label: "GitHub Stars", value: "1.6k+" },
  { label: "Contributors", value: "10+" },
  { label: "Discord Members", value: "2081" },
  { label: "KEV100 Goal", value: "100" },
];

const CommunityHero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#2e026d] to-[#15162c] pb-16 pt-28">
      <div className="absolute left-0 top-0 z-0 h-full w-full translate-x-[-50%] -rotate-45 transform bg-gradient-to-br from-transparent via-violet-300/5 to-transparent md:-rotate-12" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="mb-6 inline-block rounded-full bg-violet-500/20 px-4 py-1 text-sm font-semibold text-violet-300">
          Open Source
        </span>

        <h1 className="mb-6 text-4xl font-bold text-amber-300 sm:text-5xl">
          Built by Security Professionals,
          <br />
          for Security Professionals
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-xl font-light text-violet-100">
          Sirius Scan is shaped by the collective voice of its community.
          Every feature, integration, and workflow reflects the real needs of
          security teams working in the field. Join us and help build the
          future of open-source vulnerability management.
        </p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-violet-700/40 bg-violet-900/10 px-4 py-6"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-violet-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://discord.gg/VTjqSxkJqX"
            className="inline-block rounded-md border border-violet-200 bg-violet-600 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-violet-700 hover:shadow-lg"
          >
            Join Discord
          </Link>
          <Link
            href="https://github.com/SiriusScan/Sirius"
            className="inline-block rounded-md border border-violet-200 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-white hover:text-violet-600 hover:shadow-lg"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
