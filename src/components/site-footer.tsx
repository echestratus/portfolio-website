import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig, navigation } from "@/data/site";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-medium">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.shortRole}. Available for fullstack, backend, and web
              engineering work.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch={false}
                      className="inline-flex min-h-11 min-w-11 items-center text-muted transition-colors hover:text-fg sm:min-h-0 sm:min-w-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Resources</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={siteConfig.resumeFile}
                    download={siteConfig.resumeFileName}
                    className="inline-flex min-h-11 items-center gap-1 text-muted transition-colors hover:text-fg sm:min-h-0"
                  >
                    Portfolio PDF
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex min-h-11 items-center gap-1 text-muted transition-colors hover:text-fg sm:min-h-0"
                  >
                    Contact
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All project descriptions are based on
            verified local sources.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
            Built with Next.js · Static export · Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
