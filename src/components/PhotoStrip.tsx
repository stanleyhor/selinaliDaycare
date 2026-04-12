import { galleryStripImages } from '../data/backgroundImages'
import { useLanguage } from '../i18n/useLanguage'
import styles from './PhotoStrip.module.css'

export function PhotoStrip() {
  const { messages: m } = useLanguage()

  return (
    <section
      id="gallery"
      className={styles.section}
      aria-labelledby="photo-strip-title"
    >
      <div className={styles.inner}>
        <h2 id="photo-strip-title" className={styles.title}>
          {m.photoStripTitle}
        </h2>
        <p className={styles.intro}>{m.photoStripIntro}</p>
        <ul className={styles.track}>
          {galleryStripImages.map((src, i) => (
            <li key={`${src}-${i}`} className={styles.item}>
              <img
                className={styles.img}
                src={src}
                alt=""
                width={280}
                height={210}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
