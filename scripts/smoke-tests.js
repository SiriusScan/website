#!/usr/bin/env node

/**
 * Post-deploy smoke tests for SiriusScan website.
 * Validates that key public routes return 200 and contain expected content.
 *
 * Usage:
 *   node scripts/smoke-tests.js [--base-url=<url>] [--retries=<n>] [--timeout=<ms>]
 *
 * Defaults:
 *   --base-url  https://sirius.opensecurity.com
 *   --retries   3
 *   --timeout   10000
 */

const https = require("https");
const http = require("http");

function parseArgs() {
  const args = {
    baseUrl: "https://sirius.opensecurity.com",
    retries: 3,
    timeout: 10000,
  };
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--base-url=")) args.baseUrl = arg.split("=")[1];
    else if (arg.startsWith("--retries="))
      args.retries = parseInt(arg.split("=")[1], 10);
    else if (arg.startsWith("--timeout="))
      args.timeout = parseInt(arg.split("=")[1], 10);
  }
  args.baseUrl = args.baseUrl.replace(/\/+$/, "");
  return args;
}

const ROUTES = [
  { path: "/", expect: "Sirius Scan" },
  { path: "/features", expect: "Features" },
  { path: "/community", expect: "Community" },
  { path: "/docs", expect: "Documentation" },
  { path: "/get-started", expect: "Get Started with" },
  { path: "/get-started/downloads", expect: "Download" },
  { path: "/docs/getting-started/installation", expect: "Install" },
  { path: "/docs/getting-started/interface-tour", expect: "Interface Tour" },
];

function fetchPage(url, timeout) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(
      url,
      { timeout, headers: { "User-Agent": "SiriusScan-SmokeTest/1.0" } },
      (res) => {
        let body = "";
        res.on("data", (c) => (body += c));
        res.on("end", () => resolve({ status: res.statusCode, body }));
      },
    );
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("TIMEOUT"));
    });
  });
}

async function testRoute(baseUrl, route, retries, timeout) {
  const url = `${baseUrl}${route.path}`;
  let lastErr;

  for (let i = 0; i < retries; i++) {
    try {
      const { status, body } = await fetchPage(url, timeout);
      if (status !== 200)
        return { ok: false, path: route.path, reason: `HTTP ${status}` };
      if (route.expect && !body.includes(route.expect)) {
        return {
          ok: false,
          path: route.path,
          reason: `Missing expected content: "${route.expect}"`,
        };
      }
      return { ok: true, path: route.path };
    } catch (e) {
      lastErr = e;
      if (i < retries - 1) await new Promise((r) => setTimeout(r, 2000));
    }
  }
  return {
    ok: false,
    path: route.path,
    reason: lastErr?.message || "Unknown error",
  };
}

async function main() {
  const args = parseArgs();
  console.log(
    `\nSmoke testing ${args.baseUrl} (retries: ${args.retries}, timeout: ${args.timeout}ms)\n`,
  );

  const results = [];
  for (const route of ROUTES) {
    const result = await testRoute(
      args.baseUrl,
      route,
      args.retries,
      args.timeout,
    );
    results.push(result);
    const icon = result.ok ? "PASS" : "FAIL";
    console.log(
      `  ${icon}  ${route.path}${result.reason ? `  (${result.reason})` : ""}`,
    );
  }

  const passed = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok).length;

  console.log(`\n${"─".repeat(50)}`);
  console.log(`  ${passed}/${results.length} routes passed, ${failed} failed`);
  console.log("─".repeat(50));

  if (failed > 0) {
    console.log("\n  Smoke tests FAILED.\n");
    process.exit(1);
  } else {
    console.log("\n  All smoke tests passed.\n");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
