/**
 * Google-style review highlights shown on the site.
 * Replace `quote` / `author` with exact text from your Google Business Profile
 * when you copy reviews you are authorized to display.
 */
export type Review = {
  quote: string
  author: string
  /** e.g. "Parent" */
  relation?: string
  /** Star rating as shown on the card (typically 5 on Google). */
  rating: 1 | 2 | 3 | 4 | 5
}

export const reviews: Review[] = [
  {
    rating: 5,
    quote:
      'Selina is so warm and patient. Our child settled in within a week and looks forward to daycare every morning.',
    author: 'Maria L.',
    relation: 'Parent',
  },
  {
    rating: 5,
    quote:
      'Great communication—we get clear updates and feel confident leaving our daughter while we work.',
    author: 'David K.',
    relation: 'Parent',
  },
  {
    rating: 5,
    quote:
      'The space feels safe, clean, and homey. We recommend Selina Li Daycare to other families in the area.',
    author: 'Priya S.',
    relation: 'Parent',
  },
  {
    rating: 5,
    quote:
      'We love the daily routine and small-group attention. Our son has grown so much socially.',
    author: 'James T.',
    relation: 'Parent',
  },
]
