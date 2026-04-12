import { SITE } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import styles from './Footer.module.css'

export function Footer() {
  const { messages: m } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <strong className={styles.name}>{SITE.name}</strong>
          <span className={styles.sub}>{SITE.subtitle}</span>
        </div>
        <p className={styles.line}>
          {SITE.fullAddress} ·{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </p>
        <p className={styles.copy}>
          © {year} {SITE.name}. {m.footerRights}
        </p>
      </div>
    </footer>
  )
}
