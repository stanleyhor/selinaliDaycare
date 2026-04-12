import { backgroundImages } from '../data/backgroundImages'
import { useLanguage } from '../i18n/useLanguage'
import styles from './Programs.module.css'

export function Programs() {
  const { messages: m } = useLanguage()
  const items = m.programsItems

  return (
    <section
      id="programs"
      className={styles.section}
      aria-labelledby="programs-title"
    >
      <div
        className={styles.bgPhoto}
        style={{ backgroundImage: `url(${backgroundImages.programs})` }}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 id="programs-title" className={styles.title}>
          {m.programsTitle}
        </h2>
        <p className={styles.intro}>{m.programsIntro}</p>
        <ul className={styles.cards}>
          {items.map((item, index) => (
            <li key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
