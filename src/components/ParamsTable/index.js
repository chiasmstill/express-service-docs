import React from 'react';
import styles from './styles.module.css';

/**
 * ParamsTable — параметры API в стиле Redoc.
 *
 * Param {
 *   name:          string    — имя параметра
 *   type?:         string    — string | number | integer | boolean | array | object
 *   required?:     boolean
 *   in?:           string    — path | query | header | body
 *   description:   string
 *   example?:      any
 *   enum?:         string[] | Array<{value: string, description: string}>
 *   constraints?:  string    — «Минимум: 0.1 · Максимум: 30»
 *   default?:      any
 * }
 */
export default function ParamsTable({ title, params, defaultOpen = true }) {
  const content = (
    <>
      {params.map(param => (
        <Param key={param.name} param={param} />
      ))}
    </>
  );

  if (!title) {
    return (
      <div className={styles.section}>
        {content}
      </div>
    );
  }

  return (
    <details className={styles.section} open={defaultOpen}>
      <summary className={styles.sectionHeader}>
        <span className={styles.arrow}>▾</span>
        {title}
      </summary>
      {content}
    </details>
  );
}

function Param({ param }) {
  // enum может быть массивом строк или массивом {value, description}
  const enumItems = param.enum
    ? param.enum.map(e =>
        typeof e === 'string' ? { value: e, description: null } : e
      )
    : null;

  const hasEnumDescriptions = enumItems && enumItems.some(e => e.description);

  return (
    <div className={styles.param}>
      <div className={styles.paramAccent} />
      <div className={styles.paramBody}>

        {/* Строка: имя + тип + required + in */}
        <div className={styles.nameLine}>
          <code className={styles.name}>{param.name}</code>
          {param.type && (
            <span className={styles.type}>{param.type}</span>
          )}
          {param.required && (
            <span className={styles.required}>required</span>
          )}
          {param.in && (
            <span className={styles.inTag}>{param.in}</span>
          )}
        </div>

        {/* Описание */}
        {param.description && (
          <div className={styles.description}>{param.description}</div>
        )}

        {/* Enum — инлайн и/или с пояснениями */}
        {enumItems && (
          <div className={styles.enumSection}>
            <div className={styles.enumInline}>
              Возможные значения:{' '}
              {enumItems.map((e, i) => (
                <span key={e.value}>
                  <span className={styles.enumTag}>{e.value}</span>
                  {i < enumItems.length - 1 && <span style={{ color: 'var(--ifm-color-emphasis-500)' }}>, </span>}
                </span>
              ))}
            </div>
            {hasEnumDescriptions && (
              <div className={styles.enumRows}>
                {enumItems.filter(e => e.description).map(e => (
                  <div key={e.value} className={styles.enumRow}>
                    <span className={styles.enumTag}>{e.value}</span>
                    <span className={styles.enumRowDesc}>— {e.description}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Пример */}
        {param.example !== undefined && (
          <div className={styles.example}>
            Пример: <code>{String(param.example)}</code>
          </div>
        )}

        {/* default / constraints */}
        {(param.default !== undefined || param.constraints) && (
          <div className={styles.meta}>
            {param.default !== undefined && (
              <span>По умолчанию: <code>{String(param.default)}</code></span>
            )}
            {param.constraints && (
              <span>{param.constraints}</span>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
