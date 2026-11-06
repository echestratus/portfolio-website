import type { Metadata } from "next";
import { Eyebrow } from "@/components/section-heading";
import { ProjectExplorer } from "@/components/project-explorer";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A catalog of fullstack, backend, enterprise, mobile, and computer-vision projects by Farhan Nur Hakim, with verified scope, technologies, and evidence.",
  alternates: { canonical: "/projects/" },
};

const stats = [
  { label: "Case studies", value: projects.length.toString().padStart(2, "0") },
  {
    label: "Live deployments",
    value: projects.filter((project) => project.links.liveDemo).length.toString().padStart(2, "0"),
  },
  {
    label: "Public repositories",
    value: projects
      .filter((project) => project.links.github)
      .length.toString()
      .padStart(2, "0"),
  },
  {
    label: "Documented since",
    value: "2023",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
      <Reveal>
        <Eyebrow>Project catalog</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
          Seventeen projects, documented with the evidence that exists.
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
          Some projects have public repositories and live deployments. Others are internal
          systems, client work, or academic projects documented through the portfolio PDF. Each
          case study states its scope and evidence rather than filling the gaps.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-12">
        <ProjectExplorer projects={projects} />
      </div>

      <Reveal delay={120}>
        <div className="mt-14 rounded-xl border border-line bg-surface p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            A note on evidence
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Public buttons only appear when a URL resolves. Internal hotel and inventory systems
            are described from their source code and quality materials, not from a public demo.
            Academic and client projects without a repository are presented as visual case studies
            and are labelled accordingly.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
