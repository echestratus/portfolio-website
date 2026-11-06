#!/usr/bin/env node
/**
 * Builds the two public PDFs from the HTML sources in `documents/`.
 *
 *   documents/resume.html    -> public/farhan-nur-hakim-resume.pdf
 *   documents/portfolio.html -> public/farhan-nur-hakim-portfolio.pdf
 *
 * Requires a Chromium-based browser (Chrome, Edge, Chromium, or Brave).
 * The generated PDFs keep real, selectable text, which is what makes the resume
 * parseable by applicant tracking systems.
 *
 * Usage: npm run build:documents
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const candidates =
  process.platform === "win32"
    ? [
        "C:/Program Files/Google/Chrome/Application/chrome.exe",
        "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
        "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
      ]
    : process.platform === "darwin"
      ? [
          "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
          "/Applications/Chromium.app/Contents/MacOS/Chromium",
        ]
      : [
          "/usr/bin/google-chrome",
          "/usr/bin/chromium",
          "/usr/bin/chromium-browser",
          "/usr/bin/microsoft-edge",
        ];

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error(
    "[documents] No Chromium-based browser found. Install Chrome or Edge, then run again.",
  );
  process.exit(1);
}

const jobs = [
  { source: "documents/resume.html", target: "public/farhan-nur-hakim-resume.pdf" },
  { source: "documents/portfolio.html", target: "public/farhan-nur-hakim-portfolio.pdf" },
];

mkdirSync(join(root, "public"), { recursive: true });

for (const job of jobs) {
  const source = join(root, job.source);
  const target = join(root, job.target);
  if (!existsSync(source)) {
    console.error(`[documents] Missing source: ${job.source}`);
    process.exit(1);
  }

  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-pdf-header-footer",
      "--no-sandbox",
      "--virtual-time-budget=12000",
      `--print-to-pdf=${target}`,
      pathToFileURL(source).href,
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );

  const size = statSync(target).size;
  console.log(
    `[documents] ${job.source} -> ${job.target} (${Math.round(size / 1024)} KB)`,
  );
}
