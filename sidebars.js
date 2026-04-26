/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Пользовательское руководство — явная конфигурация
  userGuideSidebar: [
    { type: 'doc', id: 'user-guide/quick-start',   label: 'Быстрый старт'        },
    { type: 'doc', id: 'user-guide/tracking',      label: 'Отслеживание заказа'  },
    { type: 'doc', id: 'user-guide/create-order',  label: 'Оформление заказа'    },
    { type: 'doc', id: 'user-guide/payment',       label: 'Оплата и тарифы'      },
  ],

  // API-документация
  apiSidebar: [
    {
      type: 'doc',
      id: 'api/overview',
      label: 'Обзор API',
    },
    {
      type: 'category',
      label: 'Заказы',
      collapsed: false,
      items: [
        { type: 'doc', id: 'api/create-order',  label: 'Создание заказа' },
        { type: 'doc', id: 'api/get-order',     label: 'Статус заказа'   },
        { type: 'doc', id: 'api/cancel-order',  label: 'Отмена заказа'   },
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
  ],
};

module.exports = sidebars;
