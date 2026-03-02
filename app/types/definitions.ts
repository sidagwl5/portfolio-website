export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SocialLinkFooter {
  label: string;
  url: string;
  icon: string;
}

export interface HeroData {
  badge: {
    primary: string;
    secondary: string;
  };
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  name: string;
  avatar: {
    url: string;
    alt: string;
  };
  cta: {
    download: string;
    contact: string;
  };
}

export interface AboutData {
  title: {
    prefix: string;
    main: string;
  };
  greeting: string;
  paragraphs: string[];
  image: {
    url: string;
    alt: string;
  };
  socials: SocialLink[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  points: string[];
  tags: string[];
  current: boolean;
}

export interface ExperienceData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  experiences: Experience[];
}

export interface ProjectColor {
  accent: string;
  glow: string;
  text: string;
  bg: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  icon: string;
  color: ProjectColor;
}

export interface ProjectsData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  projects: Project[];
}

export interface SkillsData {
  header: {
    badge: string;
    title: {
      main: string;
      accent: string;
    };
    description: string;
  };
  categories: {
    [key: string]: string[];
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialsData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  testimonials: Testimonial[];
}

export interface FooterData {
  contact: {
    badge: string;
    title: string;
    description: string;
    info: {
      label: string;
      value: string;
      link?: string;
      icon: string;
    }[];
  };
  socials: {
    title: string;
    links: SocialLinkFooter[];
  };
  personalInfo: {
    name: string;
    tagline: string;
    avatar: string;
  };
  footerLinks: {
    label: string;
    url: string;
  }[];
  metadata: {
    copyright: string;
  };
}
