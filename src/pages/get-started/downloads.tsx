import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import TerminalBlock from "~/components/TerminalBlock";

const SITE_URL = "https://sirius.opensecurity.com";
const REPO = "SiriusScan/app-agent";

type OS = "darwin" | "linux" | "windows";
type Arch = "amd64" | "arm64";

interface Asset {
  name: string;
  size: number;
  downloadUrl: string;
  os: OS;
  arch: Arch;
}

interface ReleaseData {
  version: string;
  publishedAt: string;
  assets: Asset[];
  checksumsUrl: string | null;
  htmlUrl: string;
}

const PLATFORMS: { os: OS; label: string; icon: React.ReactNode }[] = [
  { os: "linux", label: "Linux", icon: <LinuxIcon /> },
  { os: "darwin", label: "macOS", icon: <AppleIcon /> },
  { os: "windows", label: "Windows", icon: <WindowsIcon /> },
];

function detectOS(): OS | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent.toLowerCase();
  const platform = (
    (navigator as any).userAgentData?.platform ||
    navigator.platform ||
    ""
  ).toLowerCase();
  if (platform.includes("mac") || ua.includes("macintosh")) return "darwin";
  if (platform.includes("win") || ua.includes("windows")) return "windows";
  if (platform.includes("linux") || ua.includes("linux")) return "linux";
  return null;
}

function formatBytes(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseAsset(asset: {
  name: string;
  size: number;
  browser_download_url: string;
}): Asset | null {
  const match = asset.name.match(
    /^sirius-agent_[\d.]+_(darwin|linux|windows)_(amd64|arm64)\./,
  );
  if (!match) return null;
  return {
    name: asset.name,
    size: asset.size,
    downloadUrl: asset.browser_download_url,
    os: match[1] as OS,
    arch: match[2] as Arch,
  };
}

export const getStaticProps: GetStaticProps<{
  release: ReleaseData | null;
}> = async () => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();

    const assets: Asset[] = (data.assets || [])
      .map(parseAsset)
      .filter(Boolean) as Asset[];

    const checksumsAsset = (data.assets || []).find(
      (a: any) => a.name === "checksums.txt",
    );

    return {
      props: {
        release: {
          version: (data.tag_name || "").replace(/^v/, ""),
          publishedAt: data.published_at || "",
          assets,
          checksumsUrl: checksumsAsset?.browser_download_url || null,
          htmlUrl: data.html_url || `https://github.com/${REPO}/releases`,
        },
      },
      revalidate: 3600,
    };
  } catch {
    return { props: { release: null }, revalidate: 600 };
  }
};

export default function AgentDownload({
  release,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [detectedOS, setDetectedOS] = useState<OS | null>(null);

  useEffect(() => {
    setDetectedOS(detectOS());
  }, []);

  const version = release?.version ?? "latest";

  return (
    <>
      <Head>
        <title>Download Sirius Agent - Sirius Scan</title>
        <meta
          name="description"
          content={`Download Sirius Agent v${version} for Linux, macOS, and Windows. Extend vulnerability scanning to remote hosts.`}
        />
        <link rel="canonical" href={`${SITE_URL}/get-started/downloads`} />
        <meta
          property="og:title"
          content="Download Sirius Agent - Sirius Scan"
        />
        <meta
          property="og:description"
          content={`Download Sirius Agent v${version} for Linux, macOS, and Windows.`}
        />
        <meta property="og:url" content={`${SITE_URL}/get-started/downloads`} />
      </Head>
      <main className="relative min-h-screen bg-[#15162c]">
        <div className="absolute left-0 top-0 z-0 h-full w-full translate-x-[-50%] -rotate-45 transform bg-gradient-to-br from-transparent via-violet-300/5 to-transparent md:-rotate-12" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-32">
          <Link
            href="/get-started"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 no-underline transition-colors hover:text-violet-300"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Get Started
          </Link>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Download{" "}
              <span className="bg-gradient-to-r from-violet-300 to-cyan-400 bg-clip-text text-transparent">
                Sirius Agent
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Deploy the Sirius Agent on remote hosts to enable template-based
              vulnerability detection, software inventory, and real-time
              telemetry back to your Sirius Scan instance.
            </p>
          </div>

          {release && (
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span className="rounded-full bg-violet-500/20 px-3 py-1 font-semibold text-violet-300">
                v{release.version}
              </span>
              <span>Released {formatDate(release.publishedAt)}</span>
              {release.checksumsUrl && (
                <a
                  href={release.checksumsUrl}
                  className="text-violet-400 no-underline hover:text-violet-300"
                >
                  Checksums
                </a>
              )}
              <a
                href={release.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 no-underline hover:text-violet-300"
              >
                All releases on GitHub
              </a>
            </div>
          )}

          {!release && (
            <div className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center text-gray-300">
              <p className="mb-2 font-semibold text-amber-300">
                Unable to load release data
              </p>
              <p className="text-sm">
                Download directly from{" "}
                <a
                  href={`https://github.com/${REPO}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300"
                >
                  GitHub Releases
                </a>
              </p>
            </div>
          )}

          {release && (
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {PLATFORMS.map(({ os, label, icon }) => {
                const platformAssets = release.assets.filter(
                  (a) => a.os === os,
                );
                const isDetected = detectedOS === os;
                return (
                  <div
                    key={os}
                    className={`relative rounded-xl border p-6 transition-all ${
                      isDetected
                        ? "border-violet-500/60 bg-violet-900/20 shadow-lg shadow-violet-500/10"
                        : "border-violet-700/30 bg-violet-900/5"
                    }`}
                  >
                    {isDetected && (
                      <span className="absolute -top-3 left-4 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold text-white">
                        Recommended
                      </span>
                    )}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                        {icon}
                      </div>
                      <h3 className="text-xl font-semibold text-violet-200">
                        {label}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {platformAssets.map((asset) => (
                        <a
                          key={asset.name}
                          href={asset.downloadUrl}
                          className="flex items-center justify-between rounded-lg border border-violet-700/20 bg-[#0d0d1a] px-4 py-3 no-underline transition-colors hover:border-violet-600/40 hover:bg-violet-900/10"
                        >
                          <div>
                            <span className="block text-sm font-medium text-gray-200">
                              {asset.arch === "arm64" ? "ARM64" : "x86_64"}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatBytes(asset.size)}
                            </span>
                          </div>
                          <span className="rounded-md bg-violet-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-violet-500">
                            Download
                          </span>
                        </a>
                      ))}
                      {platformAssets.length === 0 && (
                        <p className="text-sm text-gray-500">
                          No builds available
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-violet-200">
              Install and Run
            </h2>
            <p className="mb-4 text-sm text-gray-400">
              Managed runtime uses <code>SIRIUS_API_KEY</code> and{" "}
              <code>SERVER_ADDRESS</code>. CLI mode can run templates locally
              without server connectivity.
            </p>
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col">
                <h3 className="mb-3 text-lg font-medium text-gray-200">
                  Linux / macOS Runtime
                </h3>
                <TerminalBlock
                  title="bash"
                  className="flex-1"
                  commands={[
                    'export SIRIUS_API_KEY="<your-sirius-api-key>"',
                    'export SERVER_ADDRESS="<sirius-host>:50051"',
                    "sirius-agent",
                  ]}
                />
              </div>
              <div className="flex h-full flex-col">
                <h3 className="mb-3 text-lg font-medium text-gray-200">
                  Windows Runtime
                </h3>
                <TerminalBlock
                  title="powershell"
                  className="flex-1"
                  commands={[
                    '$env:SIRIUS_API_KEY = "<your-sirius-api-key>"',
                    '$env:SERVER_ADDRESS = "<sirius-host>:50051"',
                    ".\\sirius-agent.exe",
                  ]}
                />
              </div>
              <div className="flex h-full flex-col">
                <h3 className="mb-3 text-lg font-medium text-gray-200">
                  CLI Mode (Local)
                </h3>
                <TerminalBlock
                  title="bash"
                  className="flex-1"
                  commands={[
                    "sirius-agent template list",
                    "sirius-agent template run ./templates/builtin/<template>.yaml",
                    "sirius-agent template run-all",
                  ]}
                />
              </div>
            </div>
          </section>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a
              href={`https://github.com/${REPO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 no-underline hover:text-violet-300"
            >
              Agent Source Code
            </a>
            <a
              href={`https://github.com/${REPO}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 no-underline hover:text-violet-300"
            >
              All Releases
            </a>
            <Link
              href="/docs/getting-started/agent-downloads"
              className="text-violet-400 no-underline hover:text-violet-300"
            >
              Agent Setup Guide
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

function LinuxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-violet-400"
    >
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.195 1.643 1.007.53-.193.732-.816.34-1.594a2.097 2.097 0 00-.114-.199c.046-.07.105-.136.157-.21.228-.33.313-.67.27-.94-.046-.26-.143-.45-.303-.58-.188-.135-.381-.24-.58-.29-.123-.036-.253-.078-.37-.038a.86.86 0 00-.282.188c-.115.116-.202.255-.272.406-.07.136-.11.282-.123.41a.77.77 0 00.002.162 1.63 1.63 0 01-.172.078c-.32.106-.673.106-1.086.09-.413-.02-.877-.06-1.36.04-.397.074-.722.267-.94.498a.725.725 0 01-.282-.08c-.24-.115-.39-.294-.543-.47-.15-.176-.32-.37-.542-.435-.1-.03-.208-.046-.31-.034-.054-.18-.126-.378-.222-.537-.302-.497-.739-.796-.992-.738-.256.06-.327.467-.025.962.085.135.195.255.305.355-.003.116-.004.236.013.354.021.139.075.278.14.398a.473.473 0 01-.05.02c-.266.1-.612.135-.826.538a1.12 1.12 0 00-.1.317c-.002.024-.005.048-.005.073 0 .03.003.058.005.085.014.218.092.427.199.585a.66.66 0 00.093.12c.185.17.38.322.555.468.077.058.153.122.23.18a5.004 5.004 0 01-.24.03c-.413.042-.838-.024-1.13-.246-.292-.221-.332-.559-.082-.944a.86.86 0 00.027-.044c.006-.01.013-.024.02-.034l.002-.006a.508.508 0 00.065-.14c.067-.207.049-.458-.103-.66-.152-.202-.402-.302-.636-.258-.235.044-.398.216-.478.432-.079.215-.089.476-.009.705a.956.956 0 00.036.09c-.193.282-.318.597-.313.919.01.4.218.75.543 1.012.328.268.766.434 1.212.456.27.015.52-.01.755-.054.012.085.032.166.067.243.07.152.19.277.32.374.393.288.9.394 1.374.369.217-.012.43-.043.626-.09.18.31.457.568.82.66a.41.41 0 00.098.017c.34.04.629-.081.87-.24.24-.15..." />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-violet-400"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-violet-400"
    >
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}
