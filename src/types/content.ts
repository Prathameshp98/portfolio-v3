/** Shared content types for the portfolio's data layer. */

export interface NavLink {
  label: string;
  href: string;
}

export interface MarqueeItem {
  word: string;
  /** accent colour for the trailing star separator */
  color: string;
}

/** A word in the manifesto; `color` highlights it once scrolled past. */
export interface ManifestoWord {
  word: string;
  color?: string;
}

export interface SkillGroup {
  label: string;
  /** colour of the card's offset drop-shadow */
  shadow: string;
  items: string[];
}

export interface Project {
  href: string;
  /** screenshot URL; empty string means no thumbnail/preview */
  img: string;
  index: string;
  title: string;
  alt: string;
  desc: string;
  tags: string;
  year: string;
  borderBottom?: boolean;
}

export interface ArchiveItem {
  href: string;
  /** modifier class controlling the hover accent (e.g. "arc-yellow") */
  accentClass: string;
  title: string;
  year: string;
  wip?: boolean;
  desc: string;
  tags: string;
}

export interface Post {
  href: string;
  /** modifier class controlling the hover shadow accent (e.g. "post-blue") */
  accentClass: string;
  img: string;
  alt: string;
  meta: string;
  title: string;
  /** "Read →" link colour */
  color: string;
}

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyHref: string;
  companyColor: string;
  dotColor: string;
  current?: boolean;
  period: string;
  summary: string;
  links?: ExperienceLink[];
  tags: string[];
}

export interface Certification {
  href: string;
  /** modifier class controlling the hover shadow accent (e.g. "cert-blue") */
  accentClass: string;
  title: string;
  org: string;
  period: string;
  desc: string;
}

export interface Social {
  label: string;
  href: string;
}
