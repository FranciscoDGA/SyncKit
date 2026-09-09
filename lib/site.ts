export const siteConfig = {
  name: 'SyncKit',
  title: 'SyncKit - Digital Productivity, No-Code Automations, and SaaS Tools',
  description:
    'Practical guides, honest tool reviews, and no-code automations to help you build smarter workflows. Tested by real professionals.',
  url: 'https://synckit.blog',
  locale: 'en_US',
  author: 'SyncKit',
  email: 'hello@synckit.blog',
  social: {
    twitter: '@synckit',
    github: 'https://github.com/FranciscoDGA/SyncKit',
  },
  categories: [
    { name: 'Productivity', slug: 'productivity', description: 'Proven strategies to get more done in less time.' },
    { name: 'Automations', slug: 'automations', description: 'Workflow automation tutorials for no-code and low-code tools.' },
    { name: 'SaaS Tools', slug: 'saas-tools', description: 'In-depth reviews and comparisons of the best software tools.' },
    { name: 'No-Code', slug: 'no-code', description: 'Build apps, sites, and systems without writing code.' },
  ],
};

export type SiteConfig = typeof siteConfig;
