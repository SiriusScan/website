import React from "react";
import Link from "next/link";

const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 16 16"
    className={className}
  >
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const channels = [
  {
    title: "Discord",
    description:
      "Our primary community hub. Get real-time help, discuss features, share your security workflows, and connect with other operators and contributors.",
    icon: DiscordIcon,
    href: "https://discord.gg/VTjqSxkJqX",
    cta: "Join Server",
    color: "text-indigo-400",
  },
  {
    title: "GitHub Discussions",
    description:
      "The place for longer-form conversations, Q&A, feature proposals, RFCs, and community showcases. Great for topics that deserve more than a chat message.",
    icon: GitHubIcon,
    href: "https://github.com/SiriusScan/Sirius/discussions",
    cta: "Join Discussion",
    color: "text-gray-300",
  },
  {
    title: "Twitter / X",
    description:
      "Follow for project updates, security insights, release announcements, and community highlights. Tag @Sirius_Scan to share your experience.",
    icon: XIcon,
    href: "https://twitter.com/Sirius_Scan",
    cta: "Follow Us",
    color: "text-violet-300",
  },
];

const CommunityChannels: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#15162c] to-[#1a1b3a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Find the right channel for every conversation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="flex flex-col rounded-xl border border-violet-700/40 bg-violet-900/5 p-8"
            >
              <div className={`mb-5 ${channel.color}`}>
                <channel.icon />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-violet-200">
                {channel.title}
              </h3>
              <p className="mb-8 flex-1 leading-relaxed text-gray-400">
                {channel.description}
              </p>
              <Link
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-violet-700/40 bg-violet-500/10 px-6 py-2.5 text-center text-sm font-medium text-violet-400 transition-colors hover:border-violet-600/60 hover:bg-violet-500/20 hover:text-violet-300"
              >
                {channel.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityChannels;
