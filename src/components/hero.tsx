import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const focus = [
  { label: "Backend", value: "Go · NestJS · Express" },
  { label: "Frontend", value: "Next.js · React · TypeScript" },
  { label: "Data", value: "PostgreSQL · Prisma · Drizzle" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
      <div aria-hidden="true" className="accent-glow absolute inset-x-0 top-0 -z-10 h-[520px]" />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Open to fullstack &amp; backend roles
              </span>
            </div>

            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]">
              {siteConfig.name}
              <span className="mt-3 block text-muted">
                builds software that{" "}
                <span className="text-fg underline decoration-accent/40 decoration-2 underline-offset-[6px]">
                  does the work
                </span>
                .
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              Fullstack web developer and backend engineer working across product
              interfaces, APIs, and data-heavy systems. I turn operational
              requirements into maintainable software — from hotel and inventory
              platforms to multilingual hiring pipelines.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects/"
                prefetch={false}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
              >
                Explore projects
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={siteConfig.resumeFile}
                download={siteConfig.resumeFileName}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-surface px-5 text-sm font-medium transition-colors hover:border-accent/50"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download resume
              </a>
              <a
                href={siteConfig.portfolioFile}
                download={siteConfig.portfolioFileName}
                className="inline-flex h-11 items-center gap-1.5 rounded-full px-2 text-sm font-medium text-muted underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-fg hover:decoration-accent/60"
              >
                Portfolio PDF
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.location}
              </span>
              <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
              <span className="font-mono">Available for freelance &amp; contract work</span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl border border-line/60 bg-surface/30"
            />
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow)]">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  profile.json
                </span>
              </div>

              <div className="space-y-4 p-5 font-mono text-[12px] leading-relaxed sm:p-6">
                <p className="text-muted">
                  <span className="text-accent">$</span> whoami
                </p>
                <div className="space-y-1.5">
                  <p>
                    <span className="text-muted">name</span>{" "}
                    <span className="text-fg">“Farhan Nur Hakim”</span>
                  </p>
                  <p>
                    <span className="text-muted">alias</span>{" "}
                    <span className="text-fg">“{siteConfig.nickname}”</span>
                  </p>
                  <p>
                    <span className="text-muted">role</span>{" "}
                    <span className="text-fg">“Fullstack / Backend”</span>
                  </p>
                  <p>
                    <span className="text-muted">focus</span>{" "}
                    <span className="text-fg">[“web”, “APIs”, “data”]</span>
                  </p>
                </div>

                <div className="hairline" />

                <div className="space-y-3">
                  {focus.map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
                        {item.label}
                      </span>
                      <span className="text-fg">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="hairline" />

                <div className="flex items-center justify-between">
                  <span className="text-muted">public repos</span>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-1 text-accent hover:underline"
                  >
                    public repos →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-surface/60 px-4 py-3 backdrop-blur">
              <p className="text-xs text-muted">
                Currently building{" "}
                <span className="text-fg">enterprise web systems</span>
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                Active now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
