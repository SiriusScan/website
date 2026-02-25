import React from "react";
import Link from "next/link";

interface Contributor {
  name: string;
  username: string;
  role: string;
}

const contributors: Contributor[] = [
  { name: "0sm0s1z", username: "0sm0s1z", role: "Project Lead" },
  { name: "SiriusScan", username: "SiriusScan", role: "Organization" },
  { name: "Open Security", username: "OpenSecurity-Infosec", role: "Sponsor" },
  { name: "Josh Christman", username: "jchristman", role: "Contributor" },
];

const CommunityContributors: React.FC = () => {
  return (
    <div className="bg-[#15162c] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Contributors
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            The people behind Sirius Scan. Every contribution matters.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
          {contributors.map((contributor) => (
            <Link
              key={contributor.username}
              href={`https://github.com/${contributor.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="mb-3 overflow-hidden rounded-full border-2 border-violet-700/40 transition-all duration-300 group-hover:border-violet-400 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                <img
                  src={`https://github.com/${contributor.username}.png`}
                  alt={contributor.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <span className="text-sm font-medium text-violet-200 transition-colors group-hover:text-white">
                {contributor.name}
              </span>
              <span className="text-xs text-gray-500">{contributor.role}</span>
            </Link>
          ))}

          <Link
            href="https://github.com/SiriusScan/Sirius/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-violet-700/40 transition-all duration-300 group-hover:border-violet-400">
              <span className="text-2xl text-violet-500 transition-colors group-hover:text-violet-300">
                +
              </span>
            </div>
            <span className="text-sm font-medium text-violet-200 transition-colors group-hover:text-white">
              View All
            </span>
            <span className="text-xs text-gray-500">on GitHub</span>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/docs/community/contributing"
            className="inline-block rounded-md border border-violet-200 bg-violet-600 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-violet-700 hover:shadow-lg"
          >
            Become a Contributor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityContributors;
