import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        This page does not exist.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        The link may be outdated, or the project may have moved. The catalog has every published
        case study.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          prefetch={false}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-contrast sm:h-10"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
        <Link
          href="/projects/"
          prefetch={false}
          className="inline-flex h-11 items-center rounded-full border border-line px-4 text-sm font-medium sm:h-10"
        >
          Browse projects
        </Link>
      </div>
    </div>
  );
}
