import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/#services' },
    { text: 'Engagements', href: '/#exampleengagements' },
    { text: 'Team', href: '/team' },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Category Page',
          href: '/categories'
        },
        {
          text: 'Tag Page',
          href: '/tags'
        },
      ],
    },
    { text: 'Github', href: 'https://github.com/archimage-solutions' },
  ],
  actions: [{
    variant: 'primary',
    target: '_blank',
    text: 'Contact Us',
    href: './contact',
    icon: 'tabler:mail',
  },],
};

export const footerData = {
  links: [
    // Push the links to the right
    {},
    {},
    {},
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/#about' },
        { text: 'Services', href: '/#services' },
        { text: 'Our Team', href: '/team' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/archimage-solutions-ltd' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/archimage-solutions' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="/"> Archimage Solutions</a> · All rights reserved.
  `,
};
