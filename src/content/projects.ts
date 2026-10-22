import type { ImageMetadata } from 'astro';
import daramdropShot from '../assets/screenshots/daramdrop.png';
import songloupeShot from '../assets/screenshots/songloupe.png';
import shigotoNoMoriShot from '../assets/screenshots/shigoto-no-mori.png';

export type ProjectStatus = 'coming-soon' | 'in-development' | 'alpha' | 'beta' | 'stable';

export type Project = {
  name: string;
  description: string;
  status?: ProjectStatus;
  url?: string;
  repoUrl?: string;
  screenshot: ImageMetadata;
  screenshotAlt: string;
};

export type Tool = {
  name: string;
  description: string;
  repoUrl?: string;
  status?: ProjectStatus;
  // Path under public/, without extension; a -dark variant is served in dark mode
  icon?: string;
};

export const webApps: Project[] = [
  {
    name: 'daramdrop',
    description:
      'A personal stash for things to look at later. Built for quick saving and deep retrieval.',
    status: 'in-development',
    screenshot: daramdropShot,
    screenshotAlt: 'daramdrop project preview',
  },
];

export const webAppTools: Tool[] = [
  {
    name: 'Schedule Compare',
    description: 'An app for UBC students to see which courses they share with friends.',
    status: 'in-development',
    repoUrl: 'https://github.com/spinbow/schedulecompare',
  },
];

export const musicAudioApps: Project[] = [
  {
    name: 'songloupe',
    description:
      'A tool for studying songs. Designed for precise playback and structural analysis.',
    status: 'alpha',
    url: 'https://songloupe.com/',
    screenshot: songloupeShot,
    screenshotAlt: 'songloupe project preview',
  },
];

export const musicAudioTools: Tool[] = [
  {
    name: 'LiVer',
    description: 'A version manager for Ableton Live sets.',
    status: 'in-development',
  },
];

export const gameTools: Tool[] = [
  {
    name: 'mise-en-scene',
    description:
      'A lightweight game engine built around TypeScript and inspired by Godot Engine. Everything renders as React components.',
    repoUrl: 'https://github.com/sylophi/mise-en-scene',
  },
];

export const devApps: Project[] = [
  {
    name: 'shigoto-no-mori',
    description:
      'A desktop app for managing many git worktrees. Built around a focused GUI and one-click launchers per worktree.',
    url: 'https://shigomori.com/',
    repoUrl: 'https://github.com/sylophi/shigoto-no-mori',
    screenshot: shigotoNoMoriShot,
    screenshotAlt: 'shigoto-no-mori project preview',
  },
];

export const tools: Tool[] = [
  {
    name: 'PReviewer',
    description:
      'A git diffing tool that reviews changes in a full editor with project-wide context.',
    repoUrl: 'https://github.com/sylophi/PReviewer',
  },
  {
    name: 'repo-documenter',
    description: "Packages a repo's GitHub PR data into a portable archive.",
    repoUrl: 'https://github.com/sylophi/repo-documenter',
  },
];

// Each tool lives at github.com/dittofleet/<name>, with icons copied from its repo into public/dittofleet/
function dittofleetTool(name: string, description: string): Tool {
  return {
    name,
    description,
    repoUrl: `https://github.com/dittofleet/${name}`,
    icon: `/dittofleet/${name}`,
  };
}

export const dittofleet = {
  url: 'https://github.com/dittofleet',
  description: 'Tools for easier multi-environment agentic development.',
  groups: [
    {
      name: 'For agents',
      tools: [
        dittofleetTool(
          'weblab',
          'Test and explore web apps in a real browser, with screenshots, video and traces.',
        ),
        dittofleetTool(
          'dropcube',
          'A write-only file drop for agents on remote machines, with private links for you.',
        ),
        dittofleetTool(
          'navi',
          'Hey, listen! Phone notifications from coding agents, through ntfy.',
        ),
        dittofleetTool('whatagain', 'A todo list for coding agents, scoped to repos.'),
        dittofleetTool(
          'rm-to-trash',
          'rm, but to the Trash, so anything an agent deletes can be recovered.',
        ),
        dittofleetTool('skills', 'Agent skills for multi-environment development.'),
      ],
    },
    {
      name: 'For running many environments',
      tools: [
        dittofleetTool(
          'port-pool',
          'Hands out unique ports so you can test several worktrees in parallel.',
        ),
        dittofleetTool('lichen', 'Keeps dotfiles, configs and agent skills in sync across Macs.'),
        dittofleetTool(
          'crosstalk',
          'Lets the apps on your Macs message each other and share status and settings.',
        ),
        dittofleetTool('knockout', 'Shuts a Mac down from another one, through crosstalk.'),
        dittofleetTool('terrier', 'One registry of your repos, shared by all your other tools.'),
      ],
    },
    {
      name: 'For your Mac',
      tools: [
        dittofleetTool('headroom', 'A menu bar app for your Claude and Codex usage limits.'),
        dittofleetTool('figment', 'Virtual displays of any size, including 4K and HiDPI.'),
      ],
    },
  ],
};

export const social = {
  github: 'https://github.com/sylophi',
  twitter: 'https://x.com/sylophi',
  email: 'hi@sylophi.com',
} as const;

const STATUS_LABELS: Record<ProjectStatus, string> = {
  'coming-soon': 'coming soon',
  'in-development': 'in development',
  alpha: 'alpha',
  beta: 'beta',
  stable: 'stable',
};

export function statusLabel(status: ProjectStatus): string {
  return STATUS_LABELS[status];
}
