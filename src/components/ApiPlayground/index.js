import React, { useState } from 'react';
import styles from './styles.module.css';

const METHOD_COLORS = {
  GET: '#61affe',
  POST: '#49cc90',
  PUT: '#fca130',
  DELETE: '#f93e3e',
};

function setNested(obj, path, value) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

function buildBody(fields, values) {
  const result = {};
  fields.forEach(f => {
    const raw = values[f.name];
    const val = f.type === 'number' ? (raw === '' ? '' : Number(raw)) : raw;
    setNested(result, f.name, val);
  });
  return result;
}

function removeEmpty(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  const out = {};
  for (const k of Object.keys(obj)) {
    const v = removeEmpty(obj[k]);
    if (v !== '' && v !== undefined) out[k] = v;
  }
  return out;
}

function validateField(f, val) {
  if (f.type === 'select') return null;
  if (f.required && val === '') return 'Обязательное поле';
  if (f.type === 'number' && val !== '' && isNaN(Number(val))) return 'Ожидается число';
  if (f.type === 'phone' && val !== '' && !/^[+\d()\-\s]+$/.test(val)) return 'Только цифры, +, -, (, )';
  return null;
}

export default function ApiPlayground({
  method,
  endpoint,
  authRequired = true,
  pathParams = [],
  bodyFields = [],
  mockResponse,
  mockStatus = 200,
}) {
  const allFields = [...pathParams, ...bodyFields];
  const [values, setValues] = useState(() => {
    const init = {};
    allFields.forEach(f => {
      init[f.name] = f.type === 'select' ? (f.options?.[0] ?? '') : '';
    });
    return init;
  });
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState(null);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  const baseUrl = 'https://api.express-service.test/v1';

  function resolveEndpoint() {
    return pathParams.reduce(
      (path, p) => path.replace(`{${p.name}}`, values[p.name] || `{${p.name}}`),
      endpoint
    );
  }

  function buildRequestText() {
    const url = `${baseUrl}${resolveEndpoint()}`;
    const lines = [`${method} ${url}`];
    if (authRequired) lines.push(`Authorization: Bearer ${token || '<ваш_токен>'}`);
    if (bodyFields.length > 0) {
      lines.push('Content-Type: application/json');
      lines.push('');
      const body = removeEmpty(buildBody(bodyFields, values));
      lines.push(JSON.stringify(body, null, 2));
    }
    return lines.join('\n');
  }

  function setFieldError(name, err) {
    setErrors(e => ({ ...e, [name]: err }));
  }

  function handleSend() {
    const newErrors = {};
    let hasErrors = false;
    allFields.forEach(f => {
      const err = validateField(f, values[f.name]);
      if (err) {
        newErrors[f.name] = err;
        hasErrors = true;
      }
    });
    setErrors(newErrors);

    let tErr = null;
    if (authRequired && token === '') {
      tErr = 'Введите токен авторизации';
      hasErrors = true;
    }
    setTokenError(tErr);

    if (hasErrors) return;

    setLoading(true);
    setResponse(null);
    setTimeout(() => {
      setResponse({ status: mockStatus, body: mockResponse });
      setLoading(false);
    }, 700);
  }

  const setValue = (name, val) => setValues(v => ({ ...v, [name]: val }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span
          className={styles.methodBadge}
          style={{ backgroundColor: METHOD_COLORS[method] || '#888' }}
        >
          {method}
        </span>
        <span className={styles.endpointPath}>{endpoint}</span>
      </div>

      {authRequired && (
        <div className={styles.tokenField}>
          <label className={styles.tokenLabel}>🔑 Токен авторизации</label>
          <input
            className={`${styles.input} ${tokenError ? styles.inputError : ''}`}
            type="text"
            placeholder="Bearer ваш_токен"
            value={token}
            onChange={e => {
              setToken(e.target.value);
              if (tokenError && e.target.value !== '') setTokenError(null);
            }}
          />
          {tokenError && <span className={styles.fieldError}>{tokenError}</span>}
        </div>
      )}

      <div className={styles.body}>
        {pathParams.length > 0 && (
          <>
            <div className={styles.sectionTitle}>Path-параметры</div>
            {pathParams.map(f => (
              <Field
                key={f.name}
                f={f}
                values={values}
                setValue={setValue}
                isPath
                error={errors[f.name]}
                setError={setFieldError}
              />
            ))}
            {bodyFields.length > 0 && <div className={styles.divider} />}
          </>
        )}

        {bodyFields.length > 0 && (
          <>
            <div className={styles.sectionTitle}>Тело запроса (JSON)</div>
            {bodyFields.map(f => (
              <Field
                key={f.name}
                f={f}
                values={values}
                setValue={setValue}
                error={errors[f.name]}
                setError={setFieldError}
              />
            ))}
          </>
        )}

        <button className={styles.previewToggle} onClick={() => setShowRequest(s => !s)}>
          {showRequest ? '▲ Скрыть запрос' : '▼ Показать запрос'}
        </button>

        {showRequest && (
          <pre className={styles.requestPreview}>{buildRequestText()}</pre>
        )}

        <button className={styles.sendButton} onClick={handleSend} disabled={loading}>
          {loading ? 'Отправка…' : 'Отправить запрос'}
        </button>

        {response && (
          <div className={styles.response}>
            <div className={styles.responseHeader}>
              <span
                className={`${styles.statusBadge} ${
                  response.status < 300 ? styles.statusOk : styles.statusError
                }`}
              >
                {response.status}
              </span>
              <span className={styles.responseLabel}>Ответ сервера</span>
            </div>
            <pre className={styles.responseBody}>
              {JSON.stringify(response.body, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ f, values, setValue, isPath, error, setError }) {
  function validate(val) {
    return validateField(f, val);
  }

  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>
        {f.name}
        {f.required && <span className={styles.required}> *</span>}
        {isPath && <span className={styles.paramTag}>path</span>}
      </label>
      {f.type === 'select' ? (
        <select
          className={styles.select}
          value={values[f.name]}
          onChange={e => setValue(f.name, e.target.value)}
        >
          {f.options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          type="text"
          inputMode={f.type === 'number' ? 'decimal' : f.type === 'phone' ? 'tel' : 'text'}
          placeholder={f.placeholder || ''}
          value={values[f.name]}
          onChange={e => {
            setValue(f.name, e.target.value);
            if (error) setError(f.name, validate(e.target.value));
          }}
          onBlur={e => setError(f.name, validate(e.target.value))}
        />
      )}
      {error && <span className={styles.fieldError}>{error}</span>}
      {f.hint && <span className={styles.hint}>{f.hint}</span>}
    </div>
  );
}
