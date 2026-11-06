import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/project-types";
import { cn } from "@/lib/utils";

function ProjectCover({ project, priority }: { project: Project; priority?: boolean }) {
  if (project.cover) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
      </div>
    );
  }

  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-surface-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl"
      />
      <span className="relative font-mono text-5xl font-medium tracking-tighter text-fg/15">
        {initials}
      </span>
      <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {project.category[0]}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  priority,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={`/projects/${project.slug}/`}
        prefetch={false}
        className="block overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
        aria-label={`${project.title} — project case study`}
      >
        <ProjectCover project={project} priority={priority} />
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {project.category.join(" · ")}
              </p>
              <h3 className="mt-2.5 text-lg font-semibold tracking-[-0.01em] sm:text-xl">
                {project.title}
              </h3>
              {project.organization && (
                <p className="mt-1.5 text-[11px] leading-snug text-muted">{project.organization}</p>
              )}
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </div>
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[10px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
