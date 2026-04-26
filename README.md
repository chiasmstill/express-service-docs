# Экспресс сервис — учебный проект Docusaurus

Демонстрационный проект документации для курса технических писателей.
На его примере показаны:

- лендинг с компонентами Docusaurus;
- пользовательская документация (MDX, табы, детали, сниппеты, изображения);
- документация REST API через Redoc.

## Запуск

```bash
# Установка зависимостей
yarn install

# Режим разработки (открывает http://localhost:3000)
yarn start

# Сборка статики
yarn build

# Предпросмотр собранного сайта
yarn serve
```

## Структура проекта

```
express-service-docs/
├── docusaurus.config.js   # Конфигурация сайта
├── sidebars.js            # Настройка сайдбаров
├── package.json
├── src/
│   ├── pages/
│   │   └── index.js       # Главная страница (лендинг)
│   └── components/
│       ├── HomepageFeatures/  # Три карточки преимуществ
│       └── ApiDoc/            # Обёртка для Redoc
├── docs/
│   ├── _snippets/         # Переиспользуемые блоки текста
│   ├── user-guide/        # Пользовательская документация
│   └── api/               # Документация API
└── static/
    ├── img/               # Изображения
    └── openapi.yaml       # Спецификация OpenAPI
```

## Технологии

- [Docusaurus 3](https://docusaurus.io/) — генератор сайта документации
- [MDX](https://mdxjs.com/) — Markdown + React-компоненты
- [Redoc](https://redocly.com/redoc/) — отображение OpenAPI-спецификации

---

> Проект предназначен исключительно для учебных целей.
