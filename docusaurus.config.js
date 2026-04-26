// @ts-check
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Экспресс сервис',
  tagline: 'Быстрая доставка для вашего бизнеса',
  favicon: 'img/favicon.ico',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Экспресс сервис',
        logo: {
          alt: 'Логотип Экспресс сервис',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'Главная',
            position: 'left',
            activeBaseRegex: '^/$',
          },
          {
            to: '/docs/user-guide/quick-start',
            label: 'Пользователям',
            position: 'left',
          },
          {
            to: '/docs/api/overview',
            label: 'Разработчикам',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Пользователям',
            items: [
              {
                label: 'Быстрый старт',
                to: '/docs/user-guide/quick-start',
              },
              {
                label: 'Оформление заказа',
                to: '/docs/user-guide/create-order',
              },
              {
                label: 'Отслеживание',
                to: '/docs/user-guide/tracking',
              },
              {
                label: 'Оплата и тарифы',
                to: '/docs/user-guide/payment',
              },
            ],
          },
          {
            title: 'Разработчикам',
            items: [
              {
                label: 'Обзор API',
                to: '/docs/api/overview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Экспресс сервис. Учебный проект для курса технических писателей.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
