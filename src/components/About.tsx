import { backgroundImages } from '../data/backgroundImages'
import { useLanguage } from '../i18n/useLanguage'
import styles from './About.module.css'

export function About() {
  const { messages: m } = useLanguage()

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div
        className={styles.bgPhoto}
        style={{ backgroundImage: `url(${backgroundImages.about})` }}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 id="about-title" className={styles.title}>
          {m.aboutTitle}
        </h2>
        <div className={styles.grid}>
          <p className={styles.copy}>{m.aboutCopy}</p>
          <ul className={styles.list} aria-label={m.aboutFactsLabel}>
            <li>
              <strong>{m.aboutHours}</strong> {m.aboutHoursDetail}
            </li>
            <li>{m.aboutAges}</li>
            <li>{m.aboutLocation}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
