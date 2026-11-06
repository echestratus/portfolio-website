import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * The two downloadable documents: an ATS-friendly resume and the portfolio deck.
 * Both files are generated from `documents/` by `npm run build:documents`.
 */
export function DownloadButtons({ className }: { className?: string }) {
  return (
    <div className={["flex flex-wrap items-center gap-3", className].filter(Boolean).join(" ")}>
      <a
        href={siteConfig.resumeFile}
        download={siteConfig.resumeFileName}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download resume
      </a>
      <a
        href={siteConfig.portfolioFile}
        download={siteConfig.portfolioFileName}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-surface px-5 text-sm font-medium transition-colors hover:border-accent/50"
      >
        <FileText className="h-4 w-4" aria-hidden="true" />
        Download portfolio
      </a>
    </div>
  );
}
