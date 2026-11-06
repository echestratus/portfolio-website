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
  nickname: "Hakim",
  role: "Fullstack Web Developer & Backend Engineer",
  shortRole: "Fullstack & Backend Engineer",
  description:
    "Fullstack web developer and backend engineer building practical software across web, enterprise, and computer-vision projects. Go, Next.js, React, PostgreSQL, and API-driven systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://farhan-nur-hakim.pages.dev",
  email: "farhanz.nh.13@gmail.com",
  phone: "+62 821-1915-1861",
  github: "https://github.com/echestratus",
  linkedin: "https://www.linkedin.com/in/farhan-nur-hakim/",
  location: "Kota Tasikmalaya, West Java, Indonesia",
  shortLocation: "Indonesia",
  employer: "PT EGI Resources",
  resumeFile: "/farhan-nur-hakim-resume.pdf",
  resumeFileName: "Farhan-Nur-Hakim-Resume.pdf",
  portfolioFile: "/farhan-nur-hakim-portfolio.pdf",
  portfolioFileName: "Farhan-Nur-Hakim-Portfolio.pdf",
} as const;

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
] as const;
