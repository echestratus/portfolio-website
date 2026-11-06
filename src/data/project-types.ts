export type EvidenceLevel = 1 | 2 | 3 | 4;

export type ProjectStatus =
  | "Live"
  | "Team project"
  | "Client project"
  | "In development"
  | "Prototype"
  | "Academic project"
  | "Case study";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArchitectureLayer {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  category: string[];
  technologies: string[];
  features: string[];
  problem?: string;
  solution?: string;
  architecture?: {
    summary: string;
    layers: ArchitectureLayer[];
  };
  contributions?: string[];
  status?: ProjectStatus;
  year?: string;
  role?: string;
  organization?: string;
  evidence: {
    level: EvidenceLevel;
    screenshots: ProjectImage[];
    note?: string;
  };
  links: {
    github?: string;
    liveDemo?: string;
    extra?: { label: string; url: string }[];
  };
  confidentiality: "public" | "restricted" | "review_required";
  featured: boolean;
  cover?: ProjectImage;
}
