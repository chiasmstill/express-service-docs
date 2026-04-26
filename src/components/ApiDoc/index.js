import React, { useState, useEffect } from 'react';

/**
 * ApiDoc — обёртка для Redoc.
 * Используем динамический импорт, чтобы избежать проблем с SSR (server-side rendering),
 * так как Redoc работает только в браузере.
 *
 * @param {{ specUrl: string }} props
 */
export default function ApiDoc({ specUrl }) {
  const [RedocComponent, setRedocComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    import('redoc')
      .then(({ RedocStandalone }) => {
        setRedocComponent(() => RedocStandalone);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="alert alert--danger" role="alert">
        <strong>Ошибка загрузки документации API:</strong> {error}
      </div>
    );
  }

  if (!RedocComponent) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--ifm-color-secondary)' }}>
        Загрузка документации API…
      </div>
    );
  }

  return (
    <RedocComponent
      specUrl={specUrl}
      options={{
        nativeScrollbars: true,
        disableSearch: false,
        hideDownloadButton: true,
        theme: {
          colors: {
            primary: { main: '#2e8b57' },
          },
          typography: {
            fontSize: '15px',
            fontFamily: 'var(--ifm-font-family-base)',
            headings: {
              fontFamily: 'var(--ifm-heading-font-family)',
            },
          },
          sidebar: {
            width: '0',
          },
          rightPanel: {
            width: '0',
            backgroundColor: 'transparent',
          },
        },
      }}
    />
  );
}
