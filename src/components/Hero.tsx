import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { backgroundImages } from '../data/backgroundImages'
import { SITE } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import styles from './Hero.module.css'

export function Hero() {
  const { messages: m } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const yBlob1 = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 140],
  )
  const yBlob2 = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 80],
  )
  const yBlob3 = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 50],
  )
  const yContent = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 40],
  )
  const yPhoto = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 55],
  )
  const yPhotoAccent = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 28],
  )
  const yBlob4 = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 100],
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <motion.div
        className={styles.photoBg}
        style={{
          y: yPhoto,
          backgroundImage: `url(${backgroundImages.hero})`,
        }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.photoBgAccent}
        style={{
          y: yPhotoAccent,
          backgroundImage: `url(${backgroundImages.heroAccent})`,
        }}
        aria-hidden="true"
      />
      <div className={styles.photoOverlay} aria-hidden="true" />
      <motion.div
        className={styles.blob1}
        style={{ y: yBlob1 }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.blob2}
        style={{ y: yBlob2 }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.blob3}
        style={{ y: yBlob3 }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.blob4}
        style={{ y: yBlob4 }}
        aria-hidden="true"
      />

      <motion.div className={styles.content} style={{ y: yContent }}>
        <p className={styles.eyebrow}>{m.heroEyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.titleLine}>{m.heroTitleBefore}</span>{' '}
          <span className={styles.titleAccent}>{m.heroTitleAccent}</span>
        </h1>
        <p className={styles.lead}>{m.heroLead}</p>
        <div className={styles.actions}>
          <a href={`tel:${SITE.phoneTel}`} className={styles.btnPrimary}>
            {m.heroCtaCall} {SITE.phoneDisplay}
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            {m.heroCtaContact}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
