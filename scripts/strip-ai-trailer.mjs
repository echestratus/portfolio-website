#!/usr/bin/env node
/**
 * Strips AI co-author trailers from the current HEAD commit.
 *
 * Some toolchains append `Co-authored-by: Cursor <cursoragent@cursor.com>` to
 * every commit. The repository rules forbid that trailer, so this script
 * rebuilds HEAD with an identical tree, parents, and message minus those lines.
 * It only touches the local branch pointer; nothing is pushed.
 *
 * Usage: npm run fix:trailer
 */
import { execFileSync } from "node:child_process";

const git = (...args) =>
  execFileSync("git", args, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });

const trailerPattern = /^co-authored-by:.*(cursor|agent|bot).*$/i;

const branch = git("rev-parse", "--abbrev-ref", "HEAD").trim();
if (!branch || branch === "HEAD") {
  console.error("[trailer] Detached HEAD; refusing to rewrite.");
  process.exit(1);
}

const rawMessage = git("log", "-1", "--pretty=%B");
const cleaned = rawMessage
  .split(/\r?\n/)
  .filter((line) => !trailerPattern.test(line.trim()))
  .join("\n")
  .replace(/\n{3,}$/g, "\n")
  .trimEnd();

if (cleaned === rawMessage.trimEnd()) {
  console.log("[trailer] Nothing to strip.");
  process.exit(0);
}

const tree = git("write-tree").trim();
const parents = git("rev-list", "--parents", "-n", "1", "HEAD").trim().split(/\s+/).slice(1);

const args = ["commit-tree", tree];
for (const parent of parents) args.push("-p", parent);
const newSha = execFileSync("git", args, { input: `${cleaned}\n`, encoding: "utf8" }).trim();

git("update-ref", `refs/heads/${branch}`, newSha);
console.log(`[trailer] Rewrote ${branch} -> ${newSha.slice(0, 7)}: ${cleaned.split("\n")[0]}`);
