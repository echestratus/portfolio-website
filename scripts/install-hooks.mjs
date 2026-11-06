#!/usr/bin/env node
/**
 * Installs a pre-push hook that runs `npm run verify`.
 *
 * Called by `npm ci` / `npm install` through the "prepare" script. It is a
 * no-op when there is no Git directory (for example a tarball) and when the
 * build runs inside Cloudflare Pages, so it can never affect a deployment.
 */
import { existsSync, mkdirSync, chmodSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const isCI = Boolean(process.env.CF_PAGES || process.env.CI);
const gitDir = join(process.cwd(), ".git");

if (isCI) {
  console.log("[hooks] CI environment detected, skipping pre-push hook.");
  process.exit(0);
}

if (!existsSync(gitDir)) {
  console.log("[hooks] No .git directory, skipping pre-push hook.");
  process.exit(0);
}

const hooksDir = join(gitDir, "hooks");
mkdirSync(hooksDir, { recursive: true });

const hookPath = join(hooksDir, "pre-push");
const hook = `#!/bin/sh
# Installed by scripts/install-hooks.mjs
if [ "$PORTFOLIO_SKIP_VERIFY" = "1" ]; then
  echo "[pre-push] PORTFOLIO_SKIP_VERIFY=1, skipping verification."
  exit 0
fi
echo "[pre-push] Running npm run verify..."
npm run verify
`;

writeFileSync(hookPath, hook, { encoding: "utf8" });
try {
  chmodSync(hookPath, 0o755);
} catch {
  // Windows ignores POSIX modes; Git for Windows still runs the hook.
}

console.log(`[hooks] Installed pre-push hook at ${hookPath}`);
