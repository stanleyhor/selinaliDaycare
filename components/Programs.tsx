import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';

const programIcons: Record<string, string> = {
  infant: '👶',
  toddler: '🧒',
  preschool: '📖',
  chinese: '🏮',
};

interface ProgramCardProps {
  programKey: string;
  ageRange: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ programKey, ageRange }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.programCard}>
      <View style={styles.iconContainer}>
        <Text style={styles.programIcon}>{programIcons[programKey]}</Text>
      </View>
      <Text style={styles.programTitle}>
        {t(`programs.${programKey}.title`)}
      </Text>
      <Text style={styles.ageRange}>{ageRange}</Text>
      <Text style={styles.programDescription}>
        {t(`programs.${programKey}.description`)}
      </Text>
    </View>
  );
};

export const Programs: React.FC = () => {
  const { t } = useTranslation();

  const programs = [
    { key: 'infant', ageRange: '0-18 months' },
    { key: 'toddler', ageRange: '18 months - 3 years' },
    { key: 'preschool', ageRange: '3-5 years' },
    { key: 'chinese', ageRange: 'All ages' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('programs.title')}</Text>
        <Text style={styles.subtitle}>{t('programs.subtitle')}</Text>

        <View style={styles.programsGrid}>
          {programs.map((program) => (
            <ProgramCard
              key={program.key}
              programKey={program.key}
              ageRange={program.ageRange}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  programsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    justifyContent: 'center',
  },
  programCard: {
    backgroundColor: colors.background,
    padding: spacing.xl,
    borderRadius: borderRadius.xl,
    width: Platform.OS === 'web' ? 280 : '100%',
    alignItems: 'center',
    ...shadows.sm,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  programIcon: {
    fontSize: 40,
  },
  programTitle: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  ageRange: {
    fontSize: typography.fontSizes.sm,
    color: colors.accent,
    fontWeight: typography.fontWeights.semibold,
    marginBottom: spacing.md,
  },
  programDescription: {
    fontSize: typography.fontSizes.sm,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: typography.fontSizes.sm * typography.lineHeights.relaxed,
  },
});

export default Programs;
