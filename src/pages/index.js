import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const stats = [
  { value: '200+', label: 'курьеров на линии' },
  { value: '98%',  label: 'доставок вовремя'  },
  { value: '4.9★', label: 'средняя оценка'    },
  { value: '24/7', label: 'поддержка'         },
];

const steps = [
  {
    num: '1',
    title: 'Оформите заказ',
    desc: 'Укажите адреса отправителя и получателя, выберите тип доставки и оплатите онлайн за 2 минуты.',
  },
  {
    num: '2',
    title: 'Курьер заберёт посылку',
    desc: 'Курьер приедет в согласованное время. Для Экспресс‑доставки — в течение 30 минут.',
  },
  {
    num: '3',
    title: 'Получатель получит посылку',
    desc: 'Доставка с электронной подписью получателя и уведомлением о каждом этапе пути.',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Курьерская служба</div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Доставка документов и посылок по городу и области.
            Быстро, надёжно и с онлайн‑отслеживанием.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--lg', styles.btnPrimary)}
              to="/docs/user-guide/quick-start">
              Документация для пользователей
            </Link>
            <Link
              className={clsx('button button--lg', styles.btnSecondary)}
              to="/docs/api/overview">
              API для разработчиков
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroStats}>
        <div className="container">
          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Как это работает</h2>
        <p className={styles.sectionSubtitle}>Три простых шага — и посылка уже в пути</p>
        <div className={styles.stepsRow}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className={styles.bottomCta}>
      <div className="container">
        <h2 className={styles.ctaTitle}>Готовы начать?</h2>
        <p className={styles.ctaSubtitle}>
          Изучите документацию или подключайтесь сразу через API
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/user-guide/quick-start">
            Быстрый старт
          </Link>
          <Link
            className={clsx('button button--lg', styles.btnSecondary)}
            to="/docs/api/overview">
            Документация API
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Курьерская служба для документов и посылок — быстрая доставка для вашего бизнеса">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HowItWorks />
        <BottomCta />
      </main>
    </Layout>
  );
}
