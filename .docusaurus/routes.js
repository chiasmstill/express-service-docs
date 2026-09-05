import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c78'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5d8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e52'),
            routes: [
              {
                path: '/docs/api/cancel-order',
                component: ComponentCreator('/docs/api/cancel-order', '0e9'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/create-order',
                component: ComponentCreator('/docs/api/create-order', 'f23'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/get-order',
                component: ComponentCreator('/docs/api/get-order', 'ee6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/list-services',
                component: ComponentCreator('/docs/api/list-services', '6fc'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/overview',
                component: ComponentCreator('/docs/api/overview', 'dfa'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/tracking-history',
                component: ComponentCreator('/docs/api/tracking-history', '512'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/user-guide/account',
                component: ComponentCreator('/docs/user-guide/account', '082'),
                exact: true,
                sidebar: "userGuideSidebar"
              },
              {
                path: '/docs/user-guide/create-order',
                component: ComponentCreator('/docs/user-guide/create-order', 'c7f'),
                exact: true,
                sidebar: "userGuideSidebar"
              },
              {
                path: '/docs/user-guide/payment',
                component: ComponentCreator('/docs/user-guide/payment', 'aed'),
                exact: true
              },
              {
                path: '/docs/user-guide/payment-business',
                component: ComponentCreator('/docs/user-guide/payment-business', '2d3'),
                exact: true,
                sidebar: "userGuideSidebar"
              },
              {
                path: '/docs/user-guide/payment-individuals',
                component: ComponentCreator('/docs/user-guide/payment-individuals', 'b44'),
                exact: true,
                sidebar: "userGuideSidebar"
              },
              {
                path: '/docs/user-guide/quick-start',
                component: ComponentCreator('/docs/user-guide/quick-start', '609'),
                exact: true,
                sidebar: "userGuideSidebar"
              },
              {
                path: '/docs/user-guide/tracking',
                component: ComponentCreator('/docs/user-guide/tracking', '014'),
                exact: true,
                sidebar: "userGuideSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
