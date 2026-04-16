import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';

const FeatureCard: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <View style={styles.featureCard}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureTitle}>{title}</Text>
  </View>
);

export const About: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: '🛡️', title: t('about.features.safe') },
    { icon: '🥗', title: t('about.features.meals') },
    { icon: '📚', title: t('about.features.bilingual') },
    { icon: '💝', title: t('about.features.caring') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('about.title')}</Text>
        
        <View style={styles.content}>
          <View style={styles.textContent}>
            <Text style={styles.welcome}>{t('about.welcome')}</Text>
            <Text style={styles.description}>{t('about.description')}</Text>
            
            <Text style={styles.philosophyTitle}>{t('about.philosophy_title')}</Text>
            <Text style={styles.philosophy}>{t('about.philosophy')}</Text>
          </View>

          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: spacing.xxxl,
  },
  inner: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  sectionTitle: {
    fontSize: typography.fontSizes.xxxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  content: {
    ...(Platform.OS === 'web' && {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.xl,
    }),
  },
  textContent: {
    flex: Platform.OS === 'web' ? 1 : undefined,
    minWidth: Platform.OS === 'web' ? 300 : undefined,
  },
  welcome: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: typography.fontSizes.md,
    color: colors.textLight,
    lineHeight: typography.fontSizes.md * typography.lineHeights.relaxed,
    marginBottom: spacing.lg,
  },
  philosophyTitle: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.accent,
    marginBottom: spacing.sm,
  },
  philosophy: {
    fontSize: typography.fontSizes.md,
    color: colors.textLight,
    lineHeight: typography.fontSizes.md * typography.lineHeights.relaxed,
  },
  featuresGrid: {
    flex: Platform.OS === 'web' ? 1 : undefined,
    minWidth: Platform.OS === 'web' ? 300 : undefined,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: Platform.OS === 'web' ? 0 : spacing.xl,
    justifyContent: 'center',
  },
  featureCard: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    width: Platform.OS === 'web' ? '45%' : '47%',
    minWidth: 140,
    ...shadows.md,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  featureTitle: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
    color: colors.text,
    textAlign: 'center',
  },
});

export default About;
