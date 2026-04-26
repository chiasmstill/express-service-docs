import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Скорость',
    emoji: '🚀',
    bg: '#e6f4ee',
    description:
      'Экспресс‑доставка за 2–4 часа по городу. Ваши документы и посылки прибудут вовремя — мы ценим каждую минуту вашего времени.',
  },
  {
    title: 'Надёжность',
    emoji: '🛡️',
    bg: '#e8eef5',
    description:
      'Страхование каждой посылки, профессиональные курьеры и подтверждение доставки с электронной подписью получателя.',
  },
  {
    title: 'Онлайн‑отслеживание',
    emoji: '📍',
    bg: '#f5f0e6',
    description:
      'Следите за статусом заказа в реальном времени через личный кабинет или API. Уведомления на каждом этапе доставки.',
  },
];

function Feature({ emoji, bg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap} style={{ background: bg }}>
          <span className={styles.featureEmoji}>{emoji}</span>
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
