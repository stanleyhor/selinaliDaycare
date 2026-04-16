import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography } from '@/constants/theme';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topSection}>
          <Text style={styles.logo}>Selina Li Daycare</Text>
          <Text style={styles.tagline}>{t('footer.tagline')}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.bottomSection}>
          <Text style={styles.copyright}>
            © {currentYear} Selina Li Daycare. {t('footer.rights')}.
          </Text>
          <Text style={styles.designed}>{t('footer.designed')}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.text,
    paddingVertical: spacing.xl,
  },
  inner: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  logo: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  tagline: {
    fontSize: typography.fontSizes.md,
    color: colors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: colors.textLight,
    opacity: 0.2,
    marginBottom: spacing.lg,
  },
  bottomSection: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  copyright: {
    fontSize: typography.fontSizes.sm,
    color: colors.textMuted,
    textAlign: 'center',
  },
  designed: {
    fontSize: typography.fontSizes.xs,
    color: colors.textMuted,
    textAlign: 'center',
    opacity: 0.7,
  },
});

export default Footer;
