export type ServiceStatus = 'coming-soon' | 'alpha' | 'beta' | 'stable';

export type Service = {
  name: string;
  description: string;
  status: ServiceStatus;
  url?: string;
  screenshot: string;
  screenshotAlt: string;
};

export type Tool = {
  name: string;
  description: string;
  repoUrl: string;
};

export const services: Service[] = [
  {
    name: 'daramdrop',
    description:
      'A personal stash for things to look at later. Built for quick saving and easy retrieval.',
    status: 'alpha',
    url: 'https://daramdrop.com',
    screenshot: '/screenshots/daramdrop.png',
    screenshotAlt: 'daramdrop product preview',
  },
  {
    name: 'hewwo',
    description: 'A reimagination of contacts. Designed for social accounts, syncing, and sharing.',
    status: 'coming-soon',
    screenshot: '/screenshots/hewwo.png',
    screenshotAlt: 'hewwo product preview',
  },
  {
    name: 'tuneloupe',
    description:
      'A tool for studying songs. Designed for precise playback and structural analysis.',
    status: 'coming-soon',
    screenshot: '/screenshots/tuneloupe.png',
    screenshotAlt: 'tuneloupe product preview',
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

const STATUS_LABELS: Record<ServiceStatus, string> = {
  'coming-soon': 'coming soon',
  alpha: 'alpha',
  beta: 'beta',
  stable: 'stable',
};

export function statusLabel(status: ServiceStatus): string {
  return STATUS_LABELS[status];
}
