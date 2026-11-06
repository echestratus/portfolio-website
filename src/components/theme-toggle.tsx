"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Theme toggle that writes directly to the document element. Keeping the state
 * in the DOM (rather than React) avoids a hydration mismatch and an effect that
 * immediately sets state on mount. The inline script in the root layout has
 * already applied the stored preference before paint; the icons are chosen with
 * CSS, so both match the server-rendered markup.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable in private modes; the toggle still works.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={[
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/70 text-muted transition-colors hover:border-line-strong hover:text-fg sm:h-9 sm:w-9",
        className ?? "",
      ].join(" ")}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
