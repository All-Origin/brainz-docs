// docusaurus.config.ts

import type { Config } from '@docusaurus/types';
import path from 'path';

const config: Config = {
  title: 'Brainz Knowledgebase',
  tagline: 'All my project documentation',
  url: 'https://all-origin.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'All-Origin',
  projectName: 'brainz-docs',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/brainz-knowledge',
          routeBasePath: '/',
          sidebarPath: path.resolve(__dirname, 'sidebars.ts'),
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Brainz Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'main',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          href: 'https://github.com/All-Origin/brainz-docs',
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
