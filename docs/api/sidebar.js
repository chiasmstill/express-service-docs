/** @type {import('@docusaurus/plugin-content-docs').SidebarItem[]} */
const apiSidebar = [
  { type: 'doc', id: 'api/overview', label: 'Обзор API' },
  {
    type: 'category',
    label: 'Заказы',
    collapsed: false,
    items: [
      { type: 'doc', id: 'api/create-order', label: 'Создание заказа' },
      { type: 'doc', id: 'api/get-order',    label: 'Статус заказа'   },
      { type: 'doc', id: 'api/cancel-order', label: 'Отмена заказа'   },
    ],
  },
  {
    type: 'category',
    label: 'Услуги',
    collapsed: false,
    items: [
      { type: 'doc', id: 'api/list-services', label: 'Список услуг' },
    ],
  },
];

module.exports = apiSidebar;
