export type Theme = 'dark' | 'light';

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Language' | 'Tools & Design';
  icon: string; // fallback icon name
  color: string; // brand hover color (hex or tailwind class)
  svgPath?: string; // Custom SVG path or elements for high-res logo
  svgViewBox?: string; // Custom viewBox if needed
  level: number; // 0-100 for visual mastery bar
  description: string; // Context/friendly hint
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
  role?: string;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
