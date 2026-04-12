import { backgroundImages } from '../data/backgroundImages'
import { SITE } from '../data/site'
import { reviews } from '../data/reviews'
import { useLanguage } from '../i18n/useLanguage'
import styles from './Testimonials.module.css'

function StarRow({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div
      className={styles.stars}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? styles.starOn : styles.starOff}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  )
}

export function Testimonials() {
  const { messages: m } = useLanguage()
  const hasReviews = reviews.length > 0

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="reviews-title"
    >
      <div
        className={styles.bgPhoto}
        style={{ backgroundImage: `url(${backgroundImages.testimonials})` }}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 id="reviews-title" className={styles.title}>
          {m.reviewsTitle}
        </h2>
        <p className={styles.intro}>{m.reviewsIntro}</p>

        {hasReviews ? (
          <ul className={styles.track}>
            {reviews.map((r, i) => (
              <li key={`${r.author}-${i}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.googleBadge}>
                    {m.reviewsBadgeGoogle}
                  </span>
                  <StarRow rating={r.rating} />
                </div>
                <blockquote className={styles.quote}>
                  <p>&ldquo;{r.quote}&rdquo;</p>
                </blockquote>
                <footer className={styles.meta}>
                  — {r.author}
                  {r.relation ? `, ${r.relation}` : ''}
                </footer>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>{m.reviewsEmpty}</p>
        )}

        <div className={styles.cta}>
          <a
            href={SITE.googleReviewsUrl}
            className={styles.googleBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {m.reviewsGoogleCta}
          </a>
        </div>
      </div>
    </section>
  )
}
