import type { ImageMetadata } from 'astro';
import daramdropShot from '../assets/screenshots/daramdrop.png';
import hewwoShot from '../assets/screenshots/hewwo.png';
import songloupeShot from '../assets/screenshots/songloupe.png';
import shigotoNoMoriShot from '../assets/screenshots/shigoto-no-mori.png';

export type ProjectStatus = 'coming-soon' | 'alpha' | 'beta' | 'stable';

export type Project = {
  name: string;
  description: string;
  status?: ProjectStatus;
  url?: string;
  screenshot: ImageMetadata;
  screenshotAlt: string;
};

export type Tool = {
  name: string;
  description: string;
  repoUrl: string;
};

export const apps: Project[] = [
  {
    name: 'daramdrop',
    description:
      'A personal stash for things to look at later. Built for quick saving and easy retrieval.',
    status: 'alpha',
    url: 'https://daramdrop.com',
    screenshot: daramdropShot,
    screenshotAlt: 'daramdrop project preview',
  },
  {
    name: 'hewwo',
    description: 'A reimagination of contacts. Designed for social accounts, syncing, and sharing.',
    status: 'coming-soon',
    screenshot: hewwoShot,
    screenshotAlt: 'hewwo project preview',
  },
  {
    name: 'songloupe',
    description:
      'A tool for studying songs. Designed for precise playback and structural analysis.',
    status: 'coming-soon',
    screenshot: songloupeShot,
    screenshotAlt: 'songloupe project preview',
  },
];

export const devApps: Project[] = [
  {
    name: 'shigoto-no-mori',
    description:
      'A desktop app for managing many git worktrees. Built around a focused GUI and one-click launchers per worktree.',
    url: 'https://github.com/sylophi/shigoto-no-mori',
    screenshot: shigotoNoMoriShot,
    screenshotAlt: 'shigoto-no-mori project preview',
  },
];

export const tools: Tool[] = [
  {
    name: 'port-pool',
    description: 'Simple port allocation for managing multiple dev environments.',
    repoUrl: 'https://github.com/sylophi/port-pool',
  },
  {
    name: 'repo-documenter',
    description: "Packages a repo's GitHub PR data into a portable archive.",
    repoUrl: 'https://github.com/sylophi/repo-documenter',
  },
];

export const social = {
  github: 'https://github.com/sylophi',
  twitter: 'https://x.com/sylophi',
  email: 'hi@sylophi.com',
} as const;

const STATUS_LABELS: Record<ProjectStatus, string> = {
  'coming-soon': 'coming soon',
  alpha: 'alpha',
  beta: 'beta',
  stable: 'stable',
};

export function statusLabel(status: ProjectStatus): string {
  return STATUS_LABELS[status];
}
