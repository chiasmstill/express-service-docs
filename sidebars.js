const userGuideSidebar = require('./docs/user-guide/sidebar');
const apiSidebar = require('./docs/api/sidebar');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Пользователям',
      collapsed: false,
      items: userGuideSidebar,
    },
    {
      type: 'category',
      label: 'Разработчикам',
      collapsed: false,
      items: apiSidebar,
    },
  ],

  userGuideSidebar,
  apiSidebar,
};

module.exports = sidebars;
