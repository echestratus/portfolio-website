"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isHome = pathname === "/";
  const resolveHref = (href: string) => (isHome ? href.replace("/#", "#") : href);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          prefetch={false}
          aria-label={`${siteConfig.name} — home`}
          onClick={() => setOpen(false)}
          className="group -m-1.5 flex min-h-11 items-center gap-3 p-1.5 sm:m-0 sm:min-h-0 sm:p-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong bg-surface font-mono text-[11px] font-semibold tracking-tight text-accent transition-colors group-hover:border-accent/50">
            FH
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[13px] font-medium tracking-tight">{siteConfig.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Software Engineer
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isProjects = item.href.startsWith("/projects");
            const active = isProjects && pathname.startsWith("/projects");
            return (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                prefetch={false}
                className={[
                  "rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                  active ? "text-fg" : "text-muted hover:text-fg",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resumeFile}
            download={siteConfig.resumeFileName}
            className="hidden h-9 items-center rounded-full border border-line bg-surface px-4 text-[12px] font-medium text-fg transition-colors hover:border-line-strong sm:inline-flex"
          >
            Download CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/70 text-fg md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                prefetch={false}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-line/60 py-3 text-sm text-muted last:border-0 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.resumeFile}
              download={siteConfig.resumeFileName}
              className="flex min-h-11 items-center py-3 text-sm font-medium text-accent"
            >
              Download CV (PDF)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
