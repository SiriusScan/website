import React from "react";
import Link from "next/link";
import DocsLayout from "../../../../components/DocsLayout";
import {
  KeyIcon,
  CodeBracketIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const RestApiOverview = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold text-violet-200">REST API</h1>
        <p className="mb-8 text-xl text-gray-300">
          The Sirius Scan REST API provides programmatic access to all scanning
          and vulnerability management features. Use it to integrate Sirius Scan
          into your security workflows and automation pipelines.
        </p>

        {/* Quick Links */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Link href="/docs/api/rest/authentication" className="block">
            <div className="group rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10">
                <KeyIcon className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="mb-2 font-semibold text-violet-200">
                Authentication
              </h3>
              <p className="text-sm text-gray-400">
                Learn how to authenticate your API requests using API keys
              </p>
            </div>
          </Link>

          <Link href="/docs/api/rest/endpoints" className="block">
            <div className="group rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10">
                <CodeBracketIcon className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="mb-2 font-semibold text-violet-200">
                API Endpoints
              </h3>
              <p className="text-sm text-gray-400">
                Browse all available REST API endpoints and their usage
              </p>
            </div>
          </Link>

          <Link href="/docs/api/rest/errors" className="block">
            <div className="group rounded-lg border border-violet-700/40 bg-violet-900/5 p-6 transition-all hover:border-violet-600/60 hover:bg-violet-900/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10">
                <ExclamationTriangleIcon className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="mb-2 font-semibold text-violet-200">
                Error Handling
              </h3>
              <p className="text-sm text-gray-400">
                Learn how to handle API errors and edge cases
              </p>
            </div>
          </Link>
        </div>

        {/* Base URL */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Base URL
          </h2>
          <div className="rounded-lg border border-violet-700/40 bg-violet-900/5 p-6">
            <code className="text-lg text-violet-200">
              https://api.siriusscan.com/v1
            </code>
            <p className="mt-4 text-gray-400">
              All API endpoints are relative to this base URL. Make sure to
              include your API key in the Authorization header with all
              requests.
            </p>
          </div>
        </div>

        {/* Request Format */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Request Format
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>The API accepts requests with the following formats:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-violet-200">Content-Type</strong>:
                application/json for request bodies
              </li>
              <li>
                <strong className="text-violet-200">Authorization</strong>:
                Bearer token using your API key
              </li>
              <li>
                <strong className="text-violet-200">Query Parameters</strong>:
                URL encoded for GET requests
              </li>
            </ul>
          </div>
        </div>

        {/* Response Format */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Response Format
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>All responses are returned in JSON format and include:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-violet-200">Success Responses</strong>:
                Requested data in a consistent format
              </li>
              <li>
                <strong className="text-violet-200">Error Responses</strong>:
                Error details with code and message
              </li>
              <li>
                <strong className="text-violet-200">Pagination</strong>: Meta
                information for list endpoints
              </li>
            </ul>
          </div>
        </div>

        {/* Rate Limiting */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Rate Limiting
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              API requests are rate limited based on your subscription tier. The
              current limits are included in response headers:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <code className="text-violet-200">X-RateLimit-Limit</code>:
                Total requests allowed per hour
              </li>
              <li>
                <code className="text-violet-200">X-RateLimit-Remaining</code>:
                Remaining requests for the current period
              </li>
              <li>
                <code className="text-violet-200">X-RateLimit-Reset</code>: Time
                when the rate limit resets
              </li>
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-violet-200">
            Next Steps
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">Start exploring the API by:</p>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>
                <Link
                  href="/docs/api/rest/authentication"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Setting up authentication
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api/rest/endpoints"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Browsing available endpoints
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api/rest/errors"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Learning about error handling
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default RestApiOverview;
