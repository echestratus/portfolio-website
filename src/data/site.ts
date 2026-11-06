/**
 * Public site configuration.
 *
 * `url` is used for canonical links, Open Graph metadata, robots.txt and
 * sitemap.xml. Update it once the Cloudflare Pages project is created, or set
 * NEXT_PUBLIC_SITE_URL in the Pages build environment variables. Anything
 * below is verified from the local project sources, the PDF portfolio, or the
 * author's Git identity — do not add links that do not resolve.
 */
export const siteConfig = {
  name: "Farhan Nur Hakim",
  role: "Fullstack Web Developer & Backend Engineer",
  shortRole: "Fullstack & Backend Engineer",
  description:
    "Fullstack web developer and backend engineer building practical software across web, enterprise, and computer-vision projects. Go, Next.js, React, PostgreSQL, and API-driven systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://farhan-nur-hakim.pages.dev",
  email: "farhanz.nh.13@gmail.com",
  github: "https://github.com/echestratus",
  linkedin: "",
  location: "Indonesia",
  resumeFile: "/farhan-nur-hakim-portfolio.pdf",
  resumeFileName: "Farhan-Nur-Hakim-Portfolio.pdf",
} as const;

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
] as const;
