// pages/features.tsx
import Head from "next/head";
import FeaturesHero from "~/components/FeaturesHero";
import Image from "next/image";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  ServerIcon,
  CommandLineIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - Sirius Scan</title>
        <meta
          name="description"
          content="Explore the powerful features of Sirius Scan - Real-time vulnerability scanning, comprehensive dashboard, advanced scanning controls, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen bg-[#15162c]">
        <div className="absolute left-0 top-0 z-0 h-full w-full translate-x-[-50%] -rotate-45 transform bg-gradient-to-br from-transparent via-violet-300/5 to-transparent md:-rotate-12"></div>

        <FeaturesHero />

        {/* Main Features Grid */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          {/* Dashboard Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Real-time Dashboard
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Your central command center for comprehensive security insights
                and system monitoring.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/dashboard-dark.gif"
                  alt="Sirius Scan Dashboard"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Key Features
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      Real-time scanning activity and progress tracking
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Latest vulnerability discoveries and trends
                    </li>
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      System performance and health indicators
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Scanning Interface Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Advanced Scanning Interface
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Complete control over vulnerability assessments with our
                powerful scanning interface.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Scanning Controls
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <CommandLineIcon className="h-5 w-5 text-violet-400" />
                      Flexible profile and target control for scan runs
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="h-5 w-5 text-violet-400" />
                      Real-time scan progress monitoring
                    </li>
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Automated scanning schedules
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/scanner.png"
                  alt="Scanning Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Vulnerability Navigator Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Vulnerability Navigator
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Comprehensive platform for managing and analyzing discovered
                vulnerabilities.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/vulnerability-navigator.png"
                  alt="Vulnerability Navigator"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Navigator Features
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      Dynamic vulnerability listing with real-time updates
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Advanced search and filtering capabilities
                    </li>
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Detailed vulnerability reports and analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Environment Overview Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Environment Overview
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Complete visibility into your infrastructure security landscape.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Environment Features
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Complete inventory of discovered hosts
                    </li>
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      Risk scoring and security metrics
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Interactive network topology visualization
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/environment.png"
                  alt="Environment Overview"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* System Monitoring & Observability Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                System Monitoring & Observability
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Comprehensive real-time monitoring, centralized logging, and
                performance metrics for maintaining optimal system health.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5 p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                      <ShieldCheckIcon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-violet-200">
                        Real-time Health Monitoring
                      </h4>
                      <p className="mt-1 text-gray-400">
                        Monitor all microservices with live health checks for
                        UI, API, Engine, Database, Cache, and Message Queue.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                      <CommandLineIcon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-violet-200">
                        Centralized Logging
                      </h4>
                      <p className="mt-1 text-gray-400">
                        Unified log collection from all services with advanced
                        filtering, search, and export capabilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                      <ChartBarIcon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-violet-200">
                        Performance Metrics
                      </h4>
                      <p className="mt-1 text-gray-400">
                        Track CPU, memory, disk, and network usage across all
                        containers with historical trend analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Key Capabilities
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Automatic log retention with configurable policies
                    </li>
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      Real-time updates with optimized polling
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Advanced filtering and export functionality
                    </li>
                    <li className="flex items-center gap-3">
                      <CommandLineIcon className="h-5 w-5 text-violet-400" />
                      Minimal system impact with efficient design
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Software Inventory Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Software Inventory & SBOM
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Inspect package-level software inventory and export SBOM data for
                compliance and remediation workflows.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/software-inventory.png"
                  alt="Software Inventory"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Inventory Capabilities
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Host-level package inventory with architecture metadata
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="h-5 w-5 text-violet-400" />
                      Exportable SBOM output for downstream tooling
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Security status visibility tied to discovered assets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Vulnerability Detail Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Deep Vulnerability Investigation
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Drill into CVE detail pages with scoring, impact context, and
                references to accelerate triage and response.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/vulnerability-detail.png"
                  alt="Vulnerability details"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Detail Page Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      CVSS score breakdown and attack vector context
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Threat analysis and remediation guidance
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="h-5 w-5 text-violet-400" />
                      Linked references including NVD source context
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Agent Management Section */}
          <section className="mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Agent Management
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Monitor connected agents, validate target context, and launch
                scoped actions directly from the Operator Console.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Agent Workflows
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Live connectivity and status tracking for online agents
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-violet-400" />
                      Targeted execution with single and multi-agent modes
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRightIcon className="h-5 w-5 text-violet-400" />
                      Fast pivot from host context to active remediation steps
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/console-agent.png"
                  alt="Operator Console agent management"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Operator Console Section */}
          <section>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Operator Console
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Unified command, history, and agent control surfaces for
                interactive security operations.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/terminal.png"
                  alt="Operator Console Terminal"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Operator Features
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <CommandLineIcon className="h-5 w-5 text-violet-400" />
                      Interactive command execution from the terminal tab
                    </li>
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Agent targeting and multi-target orchestration
                    </li>
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      Historical command review for repeatable workflows
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
