import { useEffect, useId, useState } from 'react'
import { SITE } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import styles from './Header.module.css'

const MOBILE_HEADER_MQ = '(max-width: 720px)'

export function Header() {
  const { locale, setLocale, messages: m } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [compactHeader, setCompactHeader] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(MOBILE_HEADER_MQ).matches,
  )
  const menuPanelId = useId()

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_HEADER_MQ)
    const sync = () => setCompactHeader(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const nav: { href: string; label: string }[] = [
    { href: '#about', label: m.navAbout },
    { href: '#programs', label: m.navPrograms },
    { href: '#testimonials', label: m.navReviews },
    { href: '#contact', label: m.navContact },
  ]

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 721px)')
    const onChange = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={styles.header}>
      {menuOpen ? (
        <button
          type="button"
          className={styles.menuBackdrop}
          aria-label={m.menuClose}
          onClick={closeMenu}
        />
      ) : null}
      <div className={styles.inner}>
        <a href="#main" className={styles.brand}>
          <span className={styles.brandMain}>{SITE.name}</span>
          <span className={styles.brandSub}>{SITE.subtitle}</span>
        </a>
        <nav className={styles.navDesktop} aria-label={m.headerNavLabel}>
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls={menuPanelId}
            aria-label={menuOpen ? m.menuClose : m.menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={styles.menuIcon}
              data-open={menuOpen}
              aria-hidden
            >
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
            </span>
          </button>
          <div
            className={styles.lang}
            role="group"
            aria-label={m.langSwitchHint}
          >
            <button
              type="button"
              className={styles.langBtn}
              data-active={locale === 'en'}
              aria-pressed={locale === 'en'}
              aria-label={m.langEnglish}
              onClick={() => setLocale('en')}
            >
              {compactHeader ? m.langEnglishShort : m.langEnglish}
            </button>
            <button
              type="button"
              className={styles.langBtn}
              data-active={locale === 'zh-TW'}
              aria-pressed={locale === 'zh-TW'}
              aria-label={m.langZh}
              onClick={() => setLocale('zh-TW')}
            >
              {compactHeader ? m.langZhShort : m.langZh}
            </button>
            <button
              type="button"
              className={styles.langBtn}
              data-active={locale === 'zh-CN'}
              aria-pressed={locale === 'zh-CN'}
              aria-label={m.langZhCN}
              onClick={() => setLocale('zh-CN')}
            >
              {compactHeader ? m.langZhCNShort : m.langZhCN}
            </button>
          </div>
          <a href={`tel:${SITE.phoneTel}`} className={styles.call}>
            {m.headerCall} {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <nav
        id={menuPanelId}
        className={styles.navPanel}
        aria-label={m.headerNavLabel}
        hidden={!menuOpen}
      >
        <ul className={styles.navPanelList}>
          {nav.map((item) => (
            <li key={item.href} className={styles.navPanelItem}>
              <a
                href={item.href}
                className={styles.navPanelLink}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
