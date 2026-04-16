import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';
import { reviews } from '@/constants/data';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = Platform.OS === 'web' ? 350 : SCREEN_WIDTH - spacing.lg * 2;

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <View style={styles.starContainer}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Text
        key={star}
        style={[styles.star, star <= rating && styles.starFilled]}
      >
        ★
      </Text>
    ))}
  </View>
);

interface ReviewCardProps {
  review: (typeof reviews)[0];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <View style={styles.reviewCard}>
    <View style={styles.reviewHeader}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{review.author.charAt(0)}</Text>
      </View>
      <View style={styles.authorInfo}>
        <Text style={styles.authorName}>{review.author}</Text>
        <View style={styles.sourceContainer}>
          <Text style={styles.source}>{review.source}</Text>
          <Text style={styles.date}>{review.date}</Text>
        </View>
      </View>
    </View>
    <StarRating rating={review.rating} />
    <Text style={styles.reviewText}>"{review.text}"</Text>
  </View>
);

export const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (CARD_WIDTH + spacing.md));
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      x: index * (CARD_WIDTH + spacing.md),
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('reviews.title')}</Text>
        <Text style={styles.subtitle}>{t('reviews.subtitle')}</Text>

        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled={Platform.OS !== 'web'}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToInterval={Platform.OS !== 'web' ? CARD_WIDTH + spacing.md : undefined}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {reviews.map((_, index) => (
            <Pressable
              key={index}
              onPress={() => scrollToIndex(index)}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.xxxl,
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  sectionTitle: {
    fontSize: typography.fontSizes.xxxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.xl,
    opacity: 0.9,
    paddingHorizontal: spacing.lg,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  reviewCard: {
    backgroundColor: colors.white,
    padding: spacing.xl,
    borderRadius: borderRadius.xl,
    width: CARD_WIDTH,
    ...shadows.lg,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  source: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    fontWeight: typography.fontWeights.medium,
  },
  date: {
    fontSize: typography.fontSizes.sm,
    color: colors.textMuted,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  star: {
    fontSize: 20,
    color: colors.textMuted,
    marginRight: 2,
  },
  starFilled: {
    color: colors.secondary,
  },
  reviewText: {
    fontSize: typography.fontSizes.md,
    color: colors.textLight,
    lineHeight: typography.fontSizes.md * typography.lineHeights.relaxed,
    fontStyle: 'italic',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    opacity: 0.4,
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1.2 }],
  },
});

export default Reviews;
