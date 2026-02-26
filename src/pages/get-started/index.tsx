import Head from "next/head";
import Link from "next/link";
import {
  CommandLineIcon,
  RocketLaunchIcon,
  CubeTransparentIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const SITE_URL = "https://sirius.opensecurity.com";

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Get Started - Sirius Scan</title>
        <meta
          name="description"
          content="Get started with Sirius Scan: install, configure, and begin scanning your infrastructure for vulnerabilities in minutes."
        />
        <link rel="canonical" href={`${SITE_URL}/get-started`} />
        <meta property="og:title" content="Get Started - Sirius Scan" />
        <meta
          property="og:description"
          content="Install and configure Sirius Scan to begin scanning your infrastructure for vulnerabilities in minutes."
        />
        <meta property="og:url" content={`${SITE_URL}/get-started`} />
        <meta name="twitter:title" content="Get Started - Sirius Scan" />
        <meta
          name="twitter:description"
          content="Install and configure Sirius Scan to begin scanning your infrastructure for vulnerabilities in minutes."
        />
      </Head>
      <main className="relative min-h-screen bg-[#15162c]">
        <div className="absolute left-0 top-0 z-0 h-full w-full translate-x-[-50%] -rotate-45 transform bg-gradient-to-br from-transparent via-violet-300/5 to-transparent md:-rotate-12" />

        {/* Hero */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-8 pt-28 text-center sm:pt-32">
          <span className="mb-4 inline-block rounded-full bg-violet-500/20 px-4 py-1 text-sm font-semibold text-violet-300">
            Open Source
          </span>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Get Started with{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-400 bg-clip-text text-transparent">
              Sirius Scan
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Sirius Scan is an enterprise-grade vulnerability management platform
            that unifies network scanning, agent telemetry, and operator-driven
            triage. Follow the steps below to go from zero to scanning in
            minutes.
          </p>
        </div>

        {/* Step Cards */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-8 text-center text-2xl font-semibold text-violet-200">
            Setup Guide
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              step={1}
              icon={<CommandLineIcon className="h-6 w-6 text-violet-400" />}
              title="Installation"
              description="Docker-based setup with secure defaults. Run two commands and you're up."
              href="/docs/getting-started/installation"
              cta="Install Now"
            />
            <StepCard
              step={2}
              icon={<RocketLaunchIcon className="h-6 w-6 text-violet-400" />}
              title="Quick Start"
              description="Launch your first scan, explore the dashboard, and learn essential workflows."
              href="/docs/getting-started/quick-start"
              cta="Start Learning"
            />
            <StepCard
              step={3}
              icon={<CubeTransparentIcon className="h-6 w-6 text-violet-400" />}
              title="Interface Tour"
              description="Discover every feature: vulnerability navigator, operator console, and more."
              href="/docs/getting-started/interface-tour"
              cta="Take the Tour"
            />
          </div>
        </section>

        {/* Agent Download Call-out */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-12">
          <Link
            href="/get-started/downloads"
            className="group block no-underline"
          >
            <div className="overflow-hidden rounded-2xl border border-violet-600/30 bg-gradient-to-br from-violet-900/30 via-[#1a1b35] to-[#15162c] p-8 transition-all duration-200 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 md:flex md:items-center md:gap-10">
              <div className="bg-violet-500/15 mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ring-1 ring-violet-500/25 md:mb-0">
                <CpuChipIcon className="h-8 w-8 text-violet-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-semibold text-violet-200">
                  Download the Sirius Agent
                </h3>
                <p className="text-gray-400">
                  Extend scanning to remote hosts with the Sirius Agent.
                  Available for Linux, macOS, and Windows with automatic
                  platform detection. Deploy it alongside Sirius Scan for
                  comprehensive, agent-based vulnerability telemetry across your
                  infrastructure.
                </p>
              </div>
              <div className="mt-6 shrink-0 md:mt-0">
                <span className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors group-hover:bg-violet-500">
                  Download Agent
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Resources */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 pb-24">
          <h2 className="mb-8 text-center text-2xl font-semibold text-violet-200">
            Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ResourceCard
              icon={<BookOpenIcon className="h-6 w-6 text-violet-400" />}
              title="Documentation"
              description="Full reference for architecture, APIs, and configuration."
              href="/docs"
            />
            <ResourceCard
              icon={<GitHubIcon />}
              title="GitHub Repository"
              description="Source code, issues, and contribution guidelines."
              href="https://github.com/SiriusScan/Sirius"
              external
            />
            <ResourceCard
              icon={<ShieldCheckIcon className="h-6 w-6 text-violet-400" />}
              title="Community & Support"
              description="Join the Discord, ask questions, and connect with other operators."
              href="/community"
            />
          </div>
        </section>
      </main>
    </>
  );
}

function StepCard({
  step,
  icon,
  title,
  description,
  href,
  cta,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Link href={href} className="group no-underline">
      <div className="relative h-full overflow-hidden rounded-xl border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-sm font-bold text-violet-400">
          {step}
        </div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-violet-200">{title}</h3>
        <p className="mb-4 text-sm text-gray-400">{description}</p>
        <span className="inline-flex items-center text-violet-400 transition-colors group-hover:text-violet-300">
          {cta}
          <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function ResourceCard({
  icon,
  title,
  description,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}) {
  const Wrapper = external ? "a" : Link;
  const extraProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper
      href={href}
      className="group block no-underline"
      {...(extraProps as any)}
    >
      <div className="flex h-full items-start gap-4 rounded-xl border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
          {icon}
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-violet-200">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </Wrapper>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-violet-400"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
