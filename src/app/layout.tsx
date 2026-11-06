import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Farhan Nur Hakim",
    "fullstack developer",
    "backend engineer",
    "Golang developer",
    "Next.js developer",
    "React developer",
    "software engineer Indonesia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='light'||(!t&&!d)){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}if('IntersectionObserver' in window){document.documentElement.dataset.js='true';}}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
  knowsAbout: [
    "Fullstack web development",
    "Backend engineering",
    "Go (Golang)",
    "Next.js",
    "React",
    "PostgreSQL",
    "REST APIs",
    "Software architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      {/*
        Browser extensions (translation, AI sidebars, password managers) inject
        attributes such as `__processed_<uuid>__` onto <body> before React
        hydrates. Those attributes are not ours and cannot be removed from the
        page, so the warning is suppressed at this level only; every child is
        still checked.
      */}
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
