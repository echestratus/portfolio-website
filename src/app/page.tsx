import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Database,
  Download,
  Layers,
  Mail,
  Sparkles,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects, projects } from "@/data/projects";
import { about, capabilities, education, experience, principles, skillGroups } from "@/data/profile";
import { siteConfig } from "@/data/site";

const capabilityIcons = [Layers, Database, Braces, Sparkles];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Systems built for real operations."
            description="Four case studies where the interesting part is not the landing page, but the data model, the permissions, and what happens when a shift is busy."
            action={
              <Link
                href="/projects/"
                prefetch={false}
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium transition-colors hover:border-line-strong sm:h-10"
              >
                All {projects.length} projects
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <ProjectCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="What I do"
              title="From schema to screen, and the release after that."
              description="I work best on problems that cross layers — a workflow that needs a database constraint, an API contract, a printable document, and a phone-friendly interface."
            />
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? Layers;
              return (
                <Reveal key={capability.title} delay={index * 50} className="bg-bg">
                  <div className="flex h-full flex-col p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em]">
                      {capability.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {capability.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {capability.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-[10px] text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-balance sm:text-3xl">
                Engineering for the part after the demo.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{about.intro}</p>

              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="bg-surface p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-[13px] font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="prose-portfolio max-w-none">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-line bg-surface p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                  <Layers className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Education
                  </p>
                  <h3 className="mt-2 text-[15px] font-semibold">{education.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{education.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {education.focus.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[10px] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                How I work
              </p>
              <ul className="mt-4 space-y-4">
                {principles.map((principle) => (
                  <li key={principle.title} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <div>
                      <p className="text-sm font-medium">{principle.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Project experience"
              title="A record of what was shipped, not a list of job titles."
              description="Each entry links to the case study for scope, technical detail, and the evidence behind it."
            />
          </Reveal>

          <ol className="mt-10 border-t border-line">
            {experience.map((item, index) => (
              <Reveal key={item.title} delay={index * 40} as="li">
                <Link
                  href={item.href}
                  prefetch={false}
                  className="group grid gap-3 border-b border-line py-6 transition-colors hover:bg-surface/50 sm:grid-cols-[7rem_1fr_auto] sm:gap-6 sm:px-2"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:pt-1">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{item.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {item.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-[10px] text-muted"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="hidden h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:mt-1 sm:block"
                  />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Skills & technologies"
              title="Tools chosen for the problem, not the trend."
              description="No invented proficiency percentages — just the stacks that appear in the projects documented here."
            />
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 40} className="bg-bg">
                <div className="h-full p-6">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-[12px] text-fg/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">
              Skill coverage is derived from inspected source code and project manifests. Where a
              technology appears only in a portfolio description and could not be verified, it is
              not listed here.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
              />
              <div className="relative max-w-2xl">
                <Eyebrow>Contact</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">
                  Let&apos;s build something that has to work.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  I am open to fullstack and backend roles, and to selected freelance work. The
                  fastest way to reach me is email. The portfolio PDF is available below if you
                  need a single document to share internally.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${siteConfig.email}?subject=Portfolio%20inquiry`}
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.resumeFile}
                    download={siteConfig.resumeFileName}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-bg px-5 text-sm font-medium transition-colors hover:border-accent/50"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download portfolio PDF
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
                  <span className="font-mono">{siteConfig.location}</span>
                  <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-fg"
                  >
                    github.com/echestratus
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
