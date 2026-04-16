export const contactInfo = {
  name: 'Selina Li Daycare',
  address: '1267 Avon Ave',
  city: 'San Leandro',
  state: 'CA',
  zip: '94579',
  phone: '(510) 712-1968',
  hours: {
    weekdays: '8:30 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },
};

export const reviews = [
  {
    id: '1',
    author: 'Alene Cheung',
    rating: 5,
    text: "Ms Li is the best teacher I've ever met. She is very patient, considerate and knowledgeable. Her profession was very helpful for my daughter on her separation anxiety. The place is beautiful and comfortable. My daughter loves all of it!",
    source: 'Google',
    date: '2024',
  },
  {
    id: '2',
    author: 'Amy Jiang',
    rating: 5,
    text: "Ms. Li's Daycare was recommended to us by a friend and we are so grateful for her referral! Ms. Li and her staff are friendly, professional, and genuinely care for all their students.",
    source: 'Google',
    date: '2024',
  },
  {
    id: '3',
    author: 'Katie Tu',
    rating: 5,
    text: 'I highly recommend this daycare. Ms. Li and her assistant are very caring and patient. Children there learn, play, sing and dance everyday. They have special events for holidays like Easter and Halloween.',
    source: 'Google',
    date: '2024',
  },
  {
    id: '4',
    author: 'Karen Ko',
    rating: 5,
    text: 'Ms. Selina Li is caring and enthusiastic person. Her place is neat and bright. The meals she provides are varied and nutritious. The most important thing is that my son goes to daycare happily every day.',
    source: 'Google',
    date: '2024',
  },
  {
    id: '5',
    author: 'MissCara W',
    rating: 5,
    text: 'Great daycare for our 12 month old. He is always happy when we drop him off and pick him up. Ms Li and the staff are nice and enthusiastic.',
    source: 'Google',
    date: '2024',
  },
  {
    id: '6',
    author: 'D Li',
    rating: 5,
    text: 'Highly recommend Ms. Li! She and her assistant are very friendly. They teach children Mandarin and Cantonese, do crafts, and take them to the park to play! Ms. Li is nice and professional! They care about the kids. Overall, my daughter loves going there every day!',
    source: 'Google',
    date: '2024',
  },
  {
    id: '7',
    author: 'Xiaodan Zhang',
    rating: 5,
    text: 'Beautiful environment, top-notch teachers, good daycare.',
    source: 'Google',
    date: '2024',
  },
];

export const dailySchedule = [
  { time: '8:30 AM - 9:00 AM', activity: 'arrival_freeplay' },
  { time: '9:00 AM - 9:30 AM', activity: 'breakfast' },
  { time: '9:30 AM - 10:30 AM', activity: 'chinese_lessons' },
  { time: '10:30 AM - 11:30 AM', activity: 'arts_crafts' },
  { time: '11:30 AM - 12:30 PM', activity: 'outdoor_play' },
  { time: '12:30 PM - 1:30 PM', activity: 'lunch' },
  { time: '1:30 PM - 3:00 PM', activity: 'nap_time' },
  { time: '3:00 PM - 3:30 PM', activity: 'snack' },
  { time: '3:30 PM - 5:00 PM', activity: 'activities' },
];

export const programs = [
  {
    id: 'infant',
    icon: 'baby',
    ageRange: '0-18 months',
  },
  {
    id: 'toddler',
    icon: 'child',
    ageRange: '18 months - 3 years',
  },
  {
    id: 'preschool',
    icon: 'school',
    ageRange: '3-5 years',
  },
  {
    id: 'chinese',
    icon: 'language',
    ageRange: 'All ages',
  },
];

export const faqItems = [
  { id: 'hours', question: 'faq_hours_q', answer: 'faq_hours_a' },
  { id: 'meals', question: 'faq_meals_q', answer: 'faq_meals_a' },
  { id: 'enrollment', question: 'faq_enrollment_q', answer: 'faq_enrollment_a' },
  { id: 'curriculum', question: 'faq_curriculum_q', answer: 'faq_curriculum_a' },
  { id: 'safety', question: 'faq_safety_q', answer: 'faq_safety_a' },
  { id: 'communication', question: 'faq_communication_q', answer: 'faq_communication_a' },
];

export const galleryImages = [
  { id: '1', uri: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400', alt: 'Children playing' },
  { id: '2', uri: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400', alt: 'Arts and crafts' },
  { id: '3', uri: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400', alt: 'Reading time' },
  { id: '4', uri: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400', alt: 'Outdoor activities' },
  { id: '5', uri: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400', alt: 'Learning together' },
  { id: '6', uri: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400', alt: 'Creative play' },
];
