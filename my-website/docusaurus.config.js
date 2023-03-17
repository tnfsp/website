// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { ALGOLIA_API_KEYN8VTM1LPAT, 19da408b84e8b9e95c4dc2cebd0892dc, wilsocnchao.com } = process.env;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '春熊の心臟醫學',
  tagline: '心臟外科的生活與挑戰',
  favicon: 'img/favicon.ico',

  url: '',
  baseUrl: '',

  organizationName: 'tnfsp',
  projectName: 'website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/your-github-username/your-project-name/edit/main/',
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/your-github-username/your-project-name/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '春熊の心臟醫學',
      logo: {
        alt: '春熊の心臟醫學 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '介紹',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/your-github-username/your-project-name',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '內容',
          items: [
            {
              label: '介紹',
              to: '/docs/intro',
            },
            {
              label: '醫學',
              to: '/docs/medicine',
            },
            {
              label: '日常',
              to: '/docs/daily',
            },
          ],
        },
        {
          title: '聯繫方式',
          items: [
            {
              label: '郵件',
              href: 'mailto:aa2670095@gmail.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hsiang0401',
            },
            {
              label: 'IG',
              href: 'https://www.instagram.com/momobear_doctor/',
            },
            {
              label: 'FB',
              href: 'https://www.facebook.com/profile.php?id=100090214056788',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '搜索',
              to: '/search',
