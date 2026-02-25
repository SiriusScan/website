#!/usr/bin/env node

/**
 * Docs link checker for SiriusScan website.
 * Scans MDX and TSX files under src/pages/docs for markdown-style and
 * JSX-style internal links and validates they resolve to existing routes
 * or public assets. External links are checked for reachability.
 *
 * Usage:
 *   node scripts/check-links.js [--ci]
 *
 * --ci  Treat warnings as errors (non-zero exit on any failure)
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const DOCS_DIR = path.resolve(__dirname, "../src/pages/docs");
const PAGES_DIR = path.resolve(__dirname, "../src/pages");
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const CI_MODE = process.argv.includes("--ci");

const IGNORED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "example.com",
  "your-server",
];

const EXTERNAL_TIMEOUT_MS = 8000;
const MAX_EXTERNAL_RETRIES = 2;

const results = { pass: 0, fail: 0, warn: 0, skip: 0 };
const externalCache = new Map();

function collectFiles(dir, exts) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(collectFiles(full, exts));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      files.push(full);
    }
  }
  return files;
}

function extractLinks(content) {
  const links = [];

  // Markdown links: [text](url)
  const mdRe = /\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  while ((m = mdRe.exec(content))) {
    links.push(m[2].split("#")[0].split("?")[0].trim());
  }

  // JSX href="..." or src="..."
  const jsxRe = /(?:href|src)=["']([^"']+)["']/g;
  while ((m = jsxRe.exec(content))) {
    links.push(m[1].split("#")[0].split("?")[0].trim());
  }

  return links.filter((l) => l.length > 0);
}

function resolveInternalRoute(link) {
  // Strip leading slash
  const rel = link.replace(/^\//, "");
  // Try as page route
  const candidates = [
    path.join(PAGES_DIR, rel + ".tsx"),
    path.join(PAGES_DIR, rel + ".mdx"),
    path.join(PAGES_DIR, rel, "index.tsx"),
    path.join(PAGES_DIR, rel, "index.mdx"),
  ];
  return candidates.some((c) => fs.existsSync(c));
}

function resolvePublicAsset(link) {
  const rel = link.replace(/^\//, "");
  return fs.existsSync(path.join(PUBLIC_DIR, rel));
}

function checkExternalLink(url) {
  if (externalCache.has(url)) return externalCache.get(url);

  const promise = new Promise((resolve) => {
    let attempts = 0;

    function attempt() {
      attempts++;
      const mod = url.startsWith("https") ? https : http;
      const req = mod.get(url, { timeout: EXTERNAL_TIMEOUT_MS, headers: { "User-Agent": "SiriusScan-LinkChecker/1.0" } }, (res) => {
        const ok = res.statusCode < 400;
        resolve({ ok, status: res.statusCode });
      });

      req.on("error", () => {
        if (attempts < MAX_EXTERNAL_RETRIES) {
          setTimeout(attempt, 1000);
        } else {
          resolve({ ok: false, status: "ERR" });
        }
      });

      req.on("timeout", () => {
        req.destroy();
        if (attempts < MAX_EXTERNAL_RETRIES) {
          setTimeout(attempt, 1000);
        } else {
          resolve({ ok: false, status: "TIMEOUT" });
        }
      });
    }

    attempt();
  });

  externalCache.set(url, promise);
  return promise;
}

async function main() {
  const files = collectFiles(DOCS_DIR, [".mdx", ".tsx"]);
  console.log(`\nScanning ${files.length} docs files for links...\n`);

  const externalChecks = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const links = extractLinks(content);
    const rel = path.relative(path.resolve(__dirname, ".."), file);

    for (const link of links) {
      if (link.startsWith("http://") || link.startsWith("https://")) {
        const host = new URL(link).hostname;
        if (IGNORED_HOSTS.some((h) => host.includes(h))) {
          results.skip++;
          continue;
        }
        externalChecks.push({ file: rel, link });
      } else if (link.startsWith("/")) {
        if (resolveInternalRoute(link) || resolvePublicAsset(link)) {
          results.pass++;
        } else {
          results.fail++;
          console.log(`  FAIL  ${rel}`);
          console.log(`        ${link}  (not found as page or public asset)\n`);
        }
      } else if (link.startsWith("mailto:") || link.startsWith("tel:")) {
        results.skip++;
      } else {
        results.skip++;
      }
    }
  }

  // Check external links (batched)
  if (externalChecks.length > 0) {
    console.log(`Checking ${externalChecks.length} external links...\n`);
    const BATCH = 5;
    for (let i = 0; i < externalChecks.length; i += BATCH) {
      const batch = externalChecks.slice(i, i + BATCH);
      const promises = batch.map(async ({ file, link }) => {
        const result = await checkExternalLink(link);
        if (result.ok) {
          results.pass++;
        } else {
          results.warn++;
          console.log(`  WARN  ${file}`);
          console.log(`        ${link}  (status: ${result.status})\n`);
        }
      });
      await Promise.all(promises);
    }
  }

  // Summary
  console.log("─".repeat(50));
  console.log(
    `  Pass: ${results.pass}  |  Fail: ${results.fail}  |  Warn: ${results.warn}  |  Skip: ${results.skip}`
  );
  console.log("─".repeat(50));

  const exitCode = results.fail > 0 || (CI_MODE && results.warn > 0) ? 1 : 0;
  if (exitCode === 0) {
    console.log("\n  All checks passed.\n");
  } else {
    console.log("\n  Link check failed. Fix the issues above.\n");
  }
  process.exit(exitCode);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
