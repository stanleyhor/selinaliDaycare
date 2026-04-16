import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';
import { dailySchedule } from '@/constants/data';

const activityIcons: Record<string, string> = {
  arrival_freeplay: '🚗',
  breakfast: '🥣',
  chinese_lessons: '📚',
  arts_crafts: '🎨',
  outdoor_play: '🌳',
  lunch: '🍱',
  nap_time: '😴',
  snack: '🍎',
  activities: '🎮',
  dinner: '🍽️',
  pickup: '👋',
};

interface ScheduleItemProps {
  time: string;
  activity: string;
  index: number;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity, index }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <View style={[styles.scheduleItem, isEven && styles.scheduleItemAlt]}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{activityIcons[activity] || '📌'}</Text>
      </View>
      <View style={styles.activityContainer}>
        <Text style={styles.activity}>
          {t(`schedule.activities.${activity}`)}
        </Text>
      </View>
    </View>
  );
};

export const Schedule: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('schedule.title')}</Text>
        <Text style={styles.subtitle}>{t('schedule.subtitle')}</Text>

        <View style={styles.scheduleCard}>
          {dailySchedule.map((item, index) => (
            <ScheduleItem
              key={item.time}
              time={item.time}
              activity={item.activity}
              index={index}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.xxxl,
  },
  inner: {
    maxWidth: 800,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  sectionTitle: {
    fontSize: typography.fontSizes.xxxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  scheduleCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.lg,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  scheduleItemAlt: {
    backgroundColor: colors.backgroundAlt,
  },
  timeContainer: {
    width: Platform.OS === 'web' ? 150 : 100,
  },
  time: {
    fontSize: Platform.OS === 'web' ? typography.fontSizes.md : typography.fontSizes.sm,
    fontWeight: typography.fontWeights.semibold,
    color: colors.primary,
  },
  iconContainer: {
    width: 50,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  activityContainer: {
    flex: 1,
  },
  activity: {
    fontSize: typography.fontSizes.md,
    color: colors.text,
    fontWeight: typography.fontWeights.medium,
  },
});

export default Schedule;
