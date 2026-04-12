import { backgroundImages } from '../data/backgroundImages'
import { SITE } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import styles from './Contact.module.css'

export function Contact() {
  const { messages: m } = useLanguage()

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div
        className={styles.bgPhoto}
        style={{ backgroundImage: `url(${backgroundImages.contact})` }}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 id="contact-title" className={styles.title}>
          {m.contactTitle}
        </h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{m.contactCardTitle}</h3>
            <address className={styles.address}>
              {SITE.name}
              <br />
              {SITE.addressLine}
              <br />
              {SITE.cityStateZip}
            </address>
            <p className={styles.phone}>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </p>
            <p className={styles.note}>{m.contactNote}</p>
            <a
              href={SITE.mapsOpenUrl}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {m.contactMapsLink}
            </a>
          </div>
          <div className={styles.mapWrap}>
            <iframe
              title={m.mapIframeTitle}
              className={styles.map}
              src={SITE.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
