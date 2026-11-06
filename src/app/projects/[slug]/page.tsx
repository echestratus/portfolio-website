import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  ExternalLink,
  GitBranch,
  Info,
  Layers,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import type { Project } from "@/data/project-types";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const cover = project.cover ?? project.evidence.screenshots[0];
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.shortDescription,
      images: cover ? [{ url: cover.src, alt: cover.alt }] : undefined,
    },
  };
}

function statusTone(status: Project["status"]) {
  switch (status) {
    case "Live":
    case "Client project":
      return "border-accent/40 bg-accent-soft text-accent";
    case "In development":
      return "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300";
    default:
      return "border-line bg-surface-2 text-muted";
  }
}

function confidentialityLabel(project: Project) {
  if (project.confidentiality === "restricted") return "Internal system";
  if (project.confidentiality === "review_required") return "Private client / team work";
  return null;
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Layers;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-muted">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{label}</p>
        <p className="mt-1 text-[13px] font-medium leading-snug">{value}</p>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const hasLinks =
    Boolean(project.links.liveDemo) ||
    Boolean(project.links.github) ||
    Boolean(project.links.extra?.length);
  const confidentiality = confidentialityLabel(project);
  const cover = project.cover ?? project.evidence.screenshots[0];
  const gallery = project.evidence.screenshots.filter((image) => image.src !== cover?.src);
  const requestAccess =
    !project.links.liveDemo && !project.links.github && project.confidentiality !== "public";

  return (
    <article>
      <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14">
        <Link
          href="/projects/"
          prefetch={false}
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.status && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${statusTone(project.status)}`}
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
                  {project.status}
                </span>
              )}
              {confidentiality && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                  {confidentiality}
                </span>
              )}
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.category.join(" · ")}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-muted sm:text-xl">{project.tagline}</p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              {project.shortDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-[11px] text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            {hasLinks && (
              <div className="mt-8 flex flex-wrap gap-2.5">
                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover sm:h-10"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Visit live site
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-surface px-4 text-sm font-medium transition-colors hover:border-accent/50 sm:h-10"
                  >
                    <GitBranch className="h-4 w-4" aria-hidden="true" />
                    Repository
                  </a>
                )}
                {project.links.extra?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg sm:h-10"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}

            {requestAccess && (
              <div className="mt-8">
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Walkthrough request: ${project.title}`)}`}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover sm:h-10"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Request a walkthrough
                </a>
                <p className="mt-2.5 text-xs text-muted">
                  Client confidentiality applies. Source code and a live demo can be shared
                  privately on request.
                </p>
              </div>
            )}
          </div>

          <aside className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Project facts
            </p>
            <div className="mt-5 space-y-5">
              {project.role && <MetaItem icon={UserRound} label="Role" value={project.role} />}
              {project.year && <MetaItem icon={CalendarDays} label="Period" value={project.year} />}
              <MetaItem
                icon={Layers}
                label="Scope"
                value={project.category.join(", ")}
              />
              {project.status && <MetaItem icon={Check} label="Status" value={project.status} />}
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                <Info className="h-3 w-3" aria-hidden="true" />
                Evidence
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{project.evidence.note}</p>
            </div>

            {!hasLinks && !requestAccess && (
              <p className="mt-4 text-xs leading-relaxed text-muted">
                No public repository or demo is available for this project.
              </p>
            )}
            {requestAccess && (
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Private repository and internal deployment. Access can be arranged.
              </p>
            )}
          </aside>
        </div>
      </div>

      {cover && (
        <div className="mx-auto mt-10 max-w-6xl px-5 sm:mt-14 sm:px-8">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-surface-2">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_0.9fr] lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <section aria-labelledby="overview">
                <h2
                  id="overview"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                >
                  Overview
                </h2>
                <div className="prose-portfolio mt-4 max-w-none">
                  <p className="text-[15px]">{project.overview}</p>
                </div>
              </section>
            </Reveal>

            {(project.problem || project.solution) && (
              <Reveal>
                <section aria-labelledby="problem" className="mt-12">
                  <h2
                    id="problem"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                  >
                    Problem &amp; solution
                  </h2>
                  <div className="mt-4 grid gap-5 sm:grid-cols-2">
                    {project.problem && (
                      <div className="rounded-xl border border-line bg-surface p-5">
                        <p className="text-[13px] font-semibold">The problem</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="rounded-xl border border-line bg-surface p-5">
                        <p className="text-[13px] font-semibold">What was built</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            )}

            <Reveal>
              <section aria-labelledby="features" className="mt-12">
                <h2
                  id="features"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                >
                  Key features
                </h2>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {project.architecture && (
              <Reveal>
                <section aria-labelledby="architecture" className="mt-12">
                  <h2
                    id="architecture"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                  >
                    Technical implementation
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.architecture.summary}
                  </p>
                  <div className="mt-5 overflow-hidden rounded-xl border border-line">
                    {project.architecture.layers.map((layer, index) => (
                      <div
                        key={layer.label}
                        className={`grid gap-1.5 bg-surface px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 ${
                          index === 0 ? "" : "border-t border-line"
                        }`}
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                          {layer.label}
                        </p>
                        <p className="text-sm leading-relaxed text-muted">{layer.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {project.contributions && project.contributions.length > 0 && (
              <Reveal>
                <section aria-labelledby="contribution" className="mt-12">
                  <h2
                    id="contribution"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                  >
                    My contribution
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}

            {gallery.length > 0 && (
              <Reveal>
                <section aria-labelledby="visuals" className="mt-12">
                  <h2
                    id="visuals"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                  >
                    Visual showcase
                  </h2>
                  <div className="mt-4 columns-1 gap-4 sm:columns-2">
                    {gallery.map((image) => (
                      <figure
                        key={image.src}
                        className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-line bg-surface"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1600}
                          height={1000}
                          sizes="(min-width: 640px) 45vw, 100vw"
                          className="h-auto w-full"
                        />
                        {image.caption && (
                          <figcaption className="border-t border-line px-3 py-2 text-[11px] text-muted">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                At a glance
              </p>
              <dl className="mt-4 divide-y divide-line">
                <div className="flex items-start justify-between gap-4 py-3 first:pt-0">
                  <dt className="text-xs text-muted">Project</dt>
                  <dd className="text-right text-xs font-medium">{project.title}</dd>
                </div>
                {project.role && (
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-xs text-muted">Role</dt>
                    <dd className="max-w-[60%] text-right text-xs font-medium">{project.role}</dd>
                  </div>
                )}
                {project.year && (
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-xs text-muted">Period</dt>
                    <dd className="text-right text-xs font-medium">{project.year}</dd>
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 py-3">
                  <dt className="text-xs text-muted">Category</dt>
                  <dd className="max-w-[60%] text-right text-xs font-medium">
                    {project.category.join(", ")}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 py-3">
                  <dt className="text-xs text-muted">Source</dt>
                  <dd className="max-w-[60%] text-right text-xs font-medium">
                    {project.links.github
                      ? "Public repository"
                      : project.confidentiality === "restricted"
                        ? "Private repository"
                        : "Case study only"}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 py-3 last:pb-0">
                  <dt className="text-xs text-muted">Availability</dt>
                  <dd className="max-w-[60%] text-right text-xs font-medium">
                    {project.links.liveDemo
                      ? "Public deployment"
                      : project.confidentiality === "restricted"
                        ? "Internal / restricted"
                        : "Case study"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-4 rounded-xl border border-line bg-surface-2 p-5">
              <p className="text-xs font-medium">Need the full picture?</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                The portfolio PDF bundles every project summary into one document.
              </p>
              <Link
                href="/#contact"
                prefetch={false}
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-accent hover:underline"
              >
                Contact Farhan
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related" className="mt-20 border-t border-line pt-10">
            <div className="flex items-end justify-between gap-4">
              <h2 id="related" className="text-lg font-semibold tracking-[-0.01em]">
                Related projects
              </h2>
              <Link
                href="/projects/"
                prefetch={false}
                className="inline-flex min-h-11 min-w-11 items-center text-xs text-muted transition-colors hover:text-fg"
              >
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
