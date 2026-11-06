"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import type { Project } from "@/data/project-types";
import { ProjectCard } from "@/components/project-card";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const project of projects) project.category.forEach((item) => set.add(item));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const technologies = useMemo(() => {
    const set = new Set<string>();
    for (const project of projects) project.technologies.forEach((item) => set.add(item));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category.includes(category);
      const matchesTech = technology === "All" || project.technologies.includes(technology);
      const haystack = [
        project.title,
        project.tagline,
        project.shortDescription,
        project.category.join(" "),
        project.technologies.join(" "),
        project.features.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = q.length === 0 || haystack.includes(q);
      return matchesCategory && matchesTech && matchesQuery;
    });
  }, [projects, query, category, technology]);

  const hasFilters = query !== "" || category !== "All" || technology !== "All";

  function reset() {
    setQuery("");
    setCategory("All");
    setTechnology("All");
  }

  return (
    <div>
      <div className="rounded-xl border border-line bg-surface p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by project, technology, or feature…"
              className="h-11 w-full rounded-lg border border-line bg-bg pl-10 pr-3 text-base text-fg placeholder:text-muted/80 focus:border-accent/60 focus:outline-none sm:h-10 sm:text-sm"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <SlidersHorizontal
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted"
              />
              <label htmlFor="technology-filter" className="sr-only">
                Filter by technology
              </label>
              <select
                id="technology-filter"
                value={technology}
                onChange={(event) => setTechnology(event.target.value)}
                className="h-11 w-full appearance-none rounded-lg border border-line bg-bg pl-9 pr-8 text-base text-fg focus:border-accent/60 focus:outline-none sm:h-10 sm:w-56 sm:text-sm"
              >
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech === "All" ? "All technologies" : tech}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted"
              />
            </div>
            {hasFilters && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-line px-3 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg sm:h-10"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {categories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className={[
                  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors sm:min-h-0 sm:min-w-0",
                  active
                    ? "border-accent/40 bg-accent-soft text-accent"
                    : "border-line bg-bg text-muted hover:border-line-strong hover:text-fg",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
        {hasFilters && (
          <p className="text-xs text-muted">
            Filtered from {projects.length} total
          </p>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index === 0} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-line bg-surface px-6 py-16 text-center">
          <p className="text-sm font-medium">No projects match those filters.</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            Try a broader search term, or reset the filters to see the complete catalog.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 inline-flex h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-contrast sm:h-9"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
