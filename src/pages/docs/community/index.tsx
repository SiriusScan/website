import React from "react";
import Link from "next/link";
import DocsLayout from "../../../components/DocsLayout";
import {
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  BookOpenIcon,
  HandRaisedIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const CommunityOverview = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold text-violet-200">Community</h1>
        <p className="mb-8 text-xl text-gray-300">
          Join the Sirius Scan community! Learn how to contribute, get support,
          and connect with other users and developers.
        </p>

        {/* Quick Links */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-violet-700/40 bg-violet-900/5 p-6">
            <div className="mb-6 flex flex-col items-center text-center">
              <UserGroupIcon className="mb-4 h-12 w-12 text-violet-400" />
              <h3 className="text-2xl font-bold text-violet-200">
                Contributing Guide
              </h3>
            </div>
            <p className="mb-6 text-center text-gray-300">
              Learn how to contribute to Sirius Scan and help make the project
              better.
            </p>
            <ul className="mb-6 space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <DocumentCheckIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                <span>Code contribution guidelines</span>
              </li>
              <li className="flex items-center space-x-3">
                <BookOpenIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                <span>Documentation improvements</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                <span>Community engagement</span>
              </li>
            </ul>
            <Link
              href="/docs/community/contributing"
              className="group inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-violet-700/40 bg-violet-500/10 px-4 py-2 text-violet-400 transition-colors hover:border-violet-600/60 hover:bg-violet-500/20 hover:text-violet-300"
            >
              <span>View Contributing Guide</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="rounded-xl border border-violet-700/40 bg-violet-900/5 p-6">
            <div className="mb-6 flex flex-col items-center text-center">
              <QuestionMarkCircleIcon className="mb-4 h-12 w-12 text-violet-400" />
              <h3 className="text-2xl font-bold text-violet-200">Support</h3>
            </div>
            <p className="mb-6 text-center text-gray-300">
              Get help from the community and find resources to solve common
              issues.
            </p>
            <ul className="mb-6 space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <UserIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                <span>Community support channels</span>
              </li>
              <li className="flex items-center space-x-3">
                <DocumentTextIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                <span>Troubleshooting guides</span>
              </li>
              <li className="flex items-center space-x-3">
                <HandRaisedIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                <span>Issue reporting guidelines</span>
              </li>
            </ul>
            <Link
              href="/docs/community/support"
              className="group inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-violet-700/40 bg-violet-500/10 px-4 py-2 text-violet-400 transition-colors hover:border-violet-600/60 hover:bg-violet-500/20 hover:text-violet-300"
            >
              <span>View Support Resources</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Community Channels */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Community Channels
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Connect with the Sirius Scan community through various channels:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <a
                  href="https://discord.gg/VTjqSxkJqX"
                  className="text-violet-400 no-underline hover:text-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Server
                </a>{" "}
                - Real-time chat and support
              </li>
              <li>
                <a
                  href="https://github.com/SiriusScan/Sirius/discussions"
                  className="text-violet-400 no-underline hover:text-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Discussions
                </a>{" "}
                - Q&A and community discussions
              </li>
              <li>
                <a
                  href="https://github.com/SiriusScan/Sirius/issues"
                  className="text-violet-400 no-underline hover:text-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>{" "}
                - Bug reports and feature requests
              </li>
            </ul>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Community Guidelines
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our community is built on mutual respect and collaboration. We
              expect all members to:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Be respectful and inclusive of all community members</li>
              <li>Help others learn and grow</li>
              <li>Share knowledge and experiences</li>
              <li>Keep discussions constructive and on-topic</li>
              <li>Follow our code of conduct</li>
            </ul>
          </div>
        </div>

        {/* Getting Started */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Getting Started
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              Ready to join the community? Here's how to get started:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>
                <Link
                  href="/docs/community/contributing"
                  className="text-violet-400 no-underline hover:text-violet-300"
                >
                  Read our contributing guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/community/support"
                  className="text-violet-400 no-underline hover:text-violet-300"
                >
                  Learn how to get support
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/VTjqSxkJqX"
                  className="text-violet-400 no-underline hover:text-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Discord server
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default CommunityOverview;
