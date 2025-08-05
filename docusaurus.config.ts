// docusaurus.config.ts

import type { Config } from '@docusaurus/types';
import path from 'path';

const config: Config = {
  title: 'Junoir Knowledgebase',
  tagline: 'All my project documentation',
  url: 'https://all-origin.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'All-Origin',
  projectName: 'junoir-docs',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/junior-knowledge',
          routeBasePath: '/',
          sidebarPath: path.resolve(__dirname, 'sidebars.ts'),
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Junior Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'main',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          href: 'https://github.com/All-Origin/junior-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} ALL ORIGIN. BrainZ.`,
    },
  },
};

export default config;
