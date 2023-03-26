module.exports = {
  title: 'Alive Protocol',
  tagline: 'Decentralized live streaming protocol on IPFS and Skynet',
  url: 'https://aliveprotocol.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Alive Protocol',
      logo: {
        alt: 'Alive Protocol Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [{
            to: 'https://crowdin.com/project/alivedocs',
            label: 'Help Us Translate'
          }],
          className: 'default'
        },
        {
          href: 'https://github.com/aliveprotocol',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'How It Works',
              to: 'docs/howitworks'
            },
            {
              label: 'Get Started',
              to: 'docs/getstarted/stream-on-hive-cli',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Hive',
              href: 'https://peakd.com/@aliveprotocol',
            },
            {
              label: 'Sting Chat',
              href: 'https://chat.peakd.com/t/hive-169420/0',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ZWj5NqaBeF',
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aliveprotocol',
            },
            {
              label: 'Vote for Hive witness',
              href: 'https://hivesigner.com/sign/account-witness-vote?witness=techcoderx&approve=1'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alive Protocol and its contributors. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/aliveprotocol/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/aliveprotocol/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
