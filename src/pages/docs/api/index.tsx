import React from "react";
import Head from "next/head";
import Link from "next/link";
import DocsLayout from "~/components/DocsLayout";
import CodePlayground from "~/components/CodePlayground";
import { SIRIUS_VERSION } from "~/constants/version";
import {
  CodeBracketIcon,
  BookOpenIcon,
  ServerIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  CommandLineIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  KeyIcon,
  ArrowPathIcon,
  ClockIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const quickStartExample = {
  go: `package main

import (
    "log"
    "github.com/SiriusScan/go-api/sirius"
    "github.com/SiriusScan/go-api/sirius/host"
)

func main() {
    // Initialize a new host
    newHost := sirius.Host{
        IP:        "192.168.1.1",
        Hostname:  "example-host",
        OS:        "Linux",
        OSVersion: "Ubuntu 20.04",
    }

    // Add host to database
    if err := host.AddHost(newHost); err != nil {
        log.Fatalf("Failed to add host: %v", err)
    }

    log.Printf("Successfully added host: %s", newHost.Hostname)
}`,
};

const APIOverview = () => {
  return (
    <>
      <Head>
        <title>API Overview - Sirius Scan</title>
        <meta
          name="description"
          content="API and SDK documentation for Sirius Scan - Enterprise-grade vulnerability scanner"
        />
      </Head>
      <DocsLayout
        meta={{
          title: "API Overview",
          description:
            "API and SDK documentation for Sirius Scan - Enterprise-grade vulnerability scanner",
        }}
      >
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-violet-900/20 via-violet-800/10 to-transparent p-8">
            <h1 className="mb-4 bg-gradient-to-br from-violet-200 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
              API & SDK Documentation
            </h1>
            <p className="text-xl text-gray-300">
              Integrate Sirius Scan's powerful vulnerability scanning
              capabilities into your applications using our REST API or official
              Go SDK.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-3">
                <ServerIcon className="h-5 w-5 flex-shrink-0 text-violet-400" />
                <span className="text-sm text-gray-300">
                  RESTful API with comprehensive endpoints
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CodeBracketIcon className="h-5 w-5 flex-shrink-0 text-violet-400" />
                <span className="text-sm text-gray-300">
                  Official Go SDK for native integration
                </span>
              </div>
            </div>
          </div>

          {/* Integration Options */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-violet-200">
              Integration Options
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-violet-700/40 bg-violet-900/5 p-6">
                <div className="mb-6 flex flex-col items-center text-center">
                  <ServerIcon className="mb-4 h-12 w-12 text-violet-400" />
                  <h3 className="text-2xl font-bold text-violet-200">
                    REST API
                  </h3>
                </div>
                <p className="mb-6 text-center text-gray-300">
                  Direct HTTP access to all Sirius Scan features through RESTful
                  endpoints.
                </p>
                <ul className="mb-6 space-y-3 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <DocumentTextIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span>OpenAPI/Swagger specification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CommandLineIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span>Comprehensive Postman collection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <KeyIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span>API key authentication</span>
                  </li>
                </ul>
                <Link
                  href="/docs/api/rest/authentication"
                  className="group inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-violet-700/40 bg-violet-500/10 px-4 py-2 text-violet-400 transition-colors hover:border-violet-600/60 hover:bg-violet-500/20 hover:text-violet-300"
                >
                  <span>View REST API Documentation</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="rounded-xl border border-violet-700/40 bg-violet-900/5 p-6">
                <div className="mb-6 flex flex-col items-center text-center">
                  <CubeTransparentIcon className="mb-4 h-12 w-12 text-violet-400" />
                  <h3 className="text-2xl font-bold text-violet-200">Go SDK</h3>
                </div>
                <p className="mb-6 text-center text-gray-300">
                  Official Go SDK for native language integration and
                  application development.
                </p>
                <ul className="mb-6 space-y-3 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CodeBracketIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span>Type-safe API bindings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowPathIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span>Automatic retries and error handling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Cog8ToothIcon className="h-4 w-4 flex-shrink-0 text-violet-400" />
                    <span>Concurrent scanning support</span>
                  </li>
                </ul>
                <Link
                  href="/docs/api/sdk/go"
                  className="group inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-violet-700/40 bg-violet-500/10 px-4 py-2 text-violet-400 transition-colors hover:border-violet-600/60 hover:bg-violet-500/20 hover:text-violet-300"
                >
                  <span>View Go SDK Documentation</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Example */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-violet-200">
              Quick Example
            </h2>
            <p className="mb-4 text-gray-300">
              Get started with Sirius Scan using our Go SDK:
            </p>
            <CodePlayground
              examples={quickStartExample}
              defaultLanguage="go"
              title="Basic Usage"
            />
          </div>

          {/* Core Features */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-violet-200">
              Core Features
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                <h3 className="mb-2 font-semibold text-violet-200">
                  Host Management
                </h3>
                <p className="text-sm text-gray-400">
                  Comprehensive host tracking with detailed system information.
                  Add, update, and manage target hosts with support for:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>Host discovery and fingerprinting</li>
                  <li>OS and version detection</li>
                  <li>Port and service enumeration</li>
                  <li>Risk scoring and metrics</li>
                </ul>
              </div>
              <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                <h3 className="mb-2 font-semibold text-violet-200">
                  Vulnerability Management
                </h3>
                <p className="text-sm text-gray-400">
                  Advanced vulnerability assessment capabilities integrated with
                  NVD. Features include:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>CVE tracking and updates</li>
                  <li>CVSS scoring (v2.0-v4.0)</li>
                  <li>CPE configuration matching</li>
                  <li>Detailed vulnerability descriptions</li>
                </ul>
              </div>
              <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
                <h3 className="mb-2 font-semibold text-violet-200">
                  Advanced Features
                </h3>
                <p className="text-sm text-gray-400">
                  Enterprise-grade features for scalable scanning operations:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>Message queue integration</li>
                  <li>Key-value store for state management</li>
                  <li>Automatic connection retry</li>
                  <li>Context-aware operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-violet-200">
              Documentation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/docs/api/rest/authentication"
                className="group block no-underline"
              >
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-violet-200">
                      Authentication
                    </h3>
                    <ArrowRightIcon className="h-4 w-4 text-violet-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Learn how to authenticate your API requests
                  </p>
                </div>
              </Link>
              <Link
                href="/docs/api/rest/endpoints"
                className="group block no-underline"
              >
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-violet-200">
                      API Endpoints
                    </h3>
                    <ArrowRightIcon className="h-4 w-4 text-violet-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Browse all available REST API endpoints
                  </p>
                </div>
              </Link>
              <Link
                href="/docs/api/sdk/go"
                className="group block no-underline"
              >
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-violet-200">Go SDK</h3>
                    <ArrowRightIcon className="h-4 w-4 text-violet-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Official Go SDK documentation and examples
                  </p>
                </div>
              </Link>
              <Link
                href="/docs/api/rest/errors"
                className="group block no-underline"
              >
                <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-violet-200">
                      Error Handling
                    </h3>
                    <ArrowRightIcon className="h-4 w-4 text-violet-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    Learn how to handle API errors and edge cases
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default APIOverview;
