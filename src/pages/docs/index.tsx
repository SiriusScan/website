import React from "react";
import Head from "next/head";
import Link from "next/link";
import DocsLayout from "~/components/DocsLayout";
import GridBackground from "~/components/GridBackground";
import CodePlayground from "~/components/CodePlayground";
import {
  SIRIUS_VERSION,
  LAST_UPDATED_DATE,
  getTimeAgo,
} from "~/constants/version";
import {
  BookOpenIcon,
  CommandLineIcon,
  CodeBracketIcon,
  UsersIcon,
  ArrowRightIcon,
  StarIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  ServerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const quickStartExample = {
  python: `from sirius_scan import Scanner

scanner = Scanner()
results = scanner.scan("example.com", 
    scan_type="full",
    options={
        "threads": 10,
        "timeout": 30
    }
)

for vulnerability in results.vulnerabilities:
    print(f"Found {vulnerability.severity}: {vulnerability.title}")`,
  javascript: `import { Scanner } from 'sirius-scan';

const scanner = new Scanner();
const results = await scanner.scan('example.com', {
  scanType: 'full',
  options: {
    threads: 10,
    timeout: 30
  }
});

results.vulnerabilities.forEach(vulnerability => {
  console.log(\`Found \${vulnerability.severity}: \${vulnerability.title}\`);
});`,
};

const DocsIndex = () => {
  return (
    <>
      <Head>
        <title>Documentation - Sirius Scan</title>
        <meta
          name="description"
          content="Documentation for Sirius Scan - Enterprise-grade Open-source Vulnerability Scanner"
        />
      </Head>
      <DocsLayout
        meta={{
          title: "Documentation",
          description:
            "Sirius Scan documentation - Learn how to use and integrate Sirius Scan",
        }}
      >
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="relative mb-12 rounded-xl bg-gradient-to-br from-violet-900/20 via-violet-800/10 to-transparent p-8">
            <GridBackground />
            <h1 className="mb-6 bg-gradient-to-br from-violet-200 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
              Sirius Scan Documentation
            </h1>
            <div className="space-y-4 text-xl text-gray-300">
              <p>
                Sirius Scan is an enterprise-grade, open-source vulnerability
                scanner designed to identify and assess security vulnerabilities
                across your entire infrastructure.
              </p>
              <div className="grid gap-4 pt-4 md:grid-cols-3">
                <div className="flex items-start space-x-2">
                  <ShieldCheckIcon className="mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
                  <span className="text-base">
                    Enterprise-grade security scanning with an intuitive
                    graphical interface
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <ServerIcon className="mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
                  <span className="text-base">
                    Scales effortlessly from small deployments to large
                    infrastructures
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <ChartBarIcon className="mt-1 h-6 w-6 flex-shrink-0 text-violet-400" />
                  <span className="text-base">
                    Comprehensive vulnerability assessment and reporting
                  </span>
                </div>
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="mt-8 overflow-hidden rounded-lg bg-[#161b37] shadow-2xl">
              <div className="relative aspect-[16/9] w-full">
                <iframe
                  src="https://www.youtube.com/embed/zMxONns_Ik4"
                  title="Sirius Scan Demo Video"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Quick Stats */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center rounded-full bg-violet-900/20 px-3 py-1">
                <StarIcon className="mr-1 h-5 w-5 text-violet-400" />
                <span>Version {SIRIUS_VERSION}</span>
              </div>
              <div className="flex items-center rounded-full bg-violet-900/20 px-3 py-1">
                <DocumentCheckIcon className="mr-1 h-5 w-5 text-violet-400" />
                <span>Last Updated: {getTimeAgo(LAST_UPDATED_DATE)}</span>
              </div>
              <Link
                href="https://github.com/SiriusScan/Sirius"
                className="flex items-center rounded-full bg-violet-900/20 px-3 py-1 transition-colors hover:bg-violet-900/30"
              >
                <CodeBracketIcon className="mr-1 h-5 w-5 text-violet-400" />
                <span>Open Source</span>
              </Link>
            </div>
          </div>

          {/* Quick Access Section */}
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-violet-200">
              Quick Access
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              <Link
                href="/docs/getting-started/installation"
                className="block no-underline"
              >
                <div className="group relative h-full rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                      <CommandLineIcon className="h-6 w-6 text-violet-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center font-semibold text-violet-200">
                    Installation
                  </h3>
                  <p className="text-center text-sm text-gray-400">
                    Get Sirius Scan installed and running
                  </p>
                </div>
              </Link>

              <Link
                href="/docs/getting-started/quick-start"
                className="block no-underline"
              >
                <div className="group relative h-full rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                      <StarIcon className="h-6 w-6 text-violet-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center font-semibold text-violet-200">
                    Quick Start
                  </h3>
                  <p className="text-center text-sm text-gray-400">
                    Start your first scan in minutes
                  </p>
                </div>
              </Link>

              <Link href="/docs/api" className="block no-underline">
                <div className="group relative h-full rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                      <CodeBracketIcon className="h-6 w-6 text-violet-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center font-semibold text-violet-200">
                    API Reference
                  </h3>
                  <p className="text-center text-sm text-gray-400">
                    Integrate with our API
                  </p>
                </div>
              </Link>

              <Link
                href="/docs/community/contributing"
                className="block no-underline"
              >
                <div className="group relative h-full rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                      <UsersIcon className="h-6 w-6 text-violet-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center font-semibold text-violet-200">
                    Community
                  </h3>
                  <p className="text-center text-sm text-gray-400">
                    Join our growing community
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Getting Started */}
            <div className="group relative overflow-hidden rounded-lg border border-violet-700/40 p-6">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex items-center">
                <BookOpenIcon className="mr-3 h-6 w-6 text-violet-400" />
                <h2 className="text-2xl font-semibold text-violet-200">
                  Getting Started
                </h2>
              </div>
              <p className="mb-4 text-gray-300">
                New to Sirius Scan? Start here to learn the basics and get up
                and running quickly.
              </p>
              <Link href="/docs/getting-started/installation">
                <span className="group inline-flex items-center text-violet-400 transition-colors hover:text-violet-300">
                  <span>Installation Guide</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Guides */}
            <div className="group relative overflow-hidden rounded-lg border border-violet-700/40 p-6">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex items-center">
                <CommandLineIcon className="mr-3 h-6 w-6 text-violet-400" />
                <h2 className="text-2xl font-semibold text-violet-200">
                  Guides
                </h2>
              </div>
              <p className="mb-4 text-gray-300">
                Learn how to perform scans, configure settings, and get the most
                out of Sirius Scan.
              </p>
              <Link href="/docs/guides/scanning">
                <span className="group inline-flex items-center text-violet-400 transition-colors hover:text-violet-300">
                  <span>View Guides</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* API Reference */}
            <div className="group relative overflow-hidden rounded-lg border border-violet-700/40 p-6">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex items-center">
                <CodeBracketIcon className="mr-3 h-6 w-6 text-violet-400" />
                <h2 className="text-2xl font-semibold text-violet-200">
                  API Reference
                </h2>
              </div>
              <p className="mb-4 text-gray-300">
                Detailed documentation of Sirius Scan's API endpoints and
                integration options.
              </p>
              <Link href="/docs/api">
                <span className="group inline-flex items-center text-violet-400 transition-colors hover:text-violet-300">
                  <span>API Documentation</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Community */}
            <div className="group relative overflow-hidden rounded-lg border border-violet-700/40 p-6">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex items-center">
                <UsersIcon className="mr-3 h-6 w-6 text-violet-400" />
                <h2 className="text-2xl font-semibold text-violet-200">
                  Community
                </h2>
              </div>
              <p className="mb-4 text-gray-300">
                Join the community, contribute to the project, and get support
                when you need it.
              </p>
              <Link href="/docs/community/contributing">
                <span className="group inline-flex items-center text-violet-400 transition-colors hover:text-violet-300">
                  <span>Get Involved</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

          {/* Latest Updates */}
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-violet-200">
              Latest Updates
            </h2>
            <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10">
                    <StarIcon className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-violet-200">
                      New Feature: Advanced Scanning
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Added support for custom scan patterns and improved
                      detection algorithms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10">
                    <DocumentCheckIcon className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-violet-200">
                      Documentation Update
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Expanded API reference with new endpoints and examples.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default DocsIndex;
