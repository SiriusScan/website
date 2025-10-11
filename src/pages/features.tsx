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
                  src="/dash-dark.gif"
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
                      Visual module editor for custom scan workflows
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
                  src="/docs/scanner.jpg"
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
                  src="/docs/vulnerability-navigator.jpg"
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
                  src="/docs/environment.jpg"
                  alt="Environment Overview"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* System Monitoring & Observability Section - NEW in v0.4.0 */}
          <section className="mb-24">
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                  System Monitoring & Observability
                </h2>
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-semibold text-violet-300">
                  NEW in v0.4.0
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-300">
                Comprehensive real-time monitoring, centralized logging, and performance metrics for maintaining optimal system health.
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
                      <h4 className="text-lg font-semibold text-violet-200">Real-time Health Monitoring</h4>
                      <p className="mt-1 text-gray-400">Monitor all microservices with live health checks for UI, API, Engine, Database, Cache, and Message Queue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                      <CommandLineIcon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-violet-200">Centralized Logging</h4>
                      <p className="mt-1 text-gray-400">Unified log collection from all services with advanced filtering, search, and export capabilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                      <ChartBarIcon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-violet-200">Performance Metrics</h4>
                      <p className="mt-1 text-gray-400">Track CPU, memory, disk, and network usage across all containers with historical trend analysis.</p>
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

          {/* Terminal Interface Section */}
          <section>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-violet-200 sm:text-4xl">
                Terminal Interface
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                PowerShell-based command interface for advanced operations and agent management.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5">
                <Image
                  src="/docs/terminal.jpg"
                  alt="Terminal Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-violet-200">
                    Terminal Features
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <CommandLineIcon className="h-5 w-5 text-violet-400" />
                      PowerShell environment with full scripting capabilities
                    </li>
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-violet-400" />
                      Remote agent deployment and configuration
                    </li>
                    <li className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-violet-400" />
                      Real-time system diagnostics and monitoring
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
