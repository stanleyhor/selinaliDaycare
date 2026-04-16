import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Animated,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, shadows } from '@/constants/theme';
import { changeLanguage, languageOptions } from '@/i18n';

const MOBILE_BREAKPOINT = 768;

interface NavbarProps {
  scrollY?: Animated.Value;
  onNavPress?: (section: string) => void;
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return Dimensions.get('window').width;
  });

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export const Navbar: React.FC<NavbarProps> = ({ scrollY, onNavPress }) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < MOBILE_BREAKPOINT;

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'programs', label: t('nav.programs') },
    { key: 'reviews', label: t('nav.reviews') },
    { key: 'gallery', label: t('nav.gallery') },
    { key: 'schedule', label: t('nav.schedule') },
    { key: 'faq', label: t('nav.faq') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const handleLanguageChange = async (langCode: string) => {
    await changeLanguage(langCode);
  };

  const handleNavPress = (section: string) => {
    onNavPress?.(section);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Pressable onPress={() => handleNavPress('hero')}>
          <Text style={styles.logo}>{t('nav.logo')}</Text>
        </Pressable>

        {!isMobile && (
          <View style={styles.navItems}>
            {navItems.map((item) => (
              <Pressable
                key={item.key}
                onPress={() => handleNavPress(item.key)}
                style={({ pressed }) => [
                  styles.navItem,
                  pressed && styles.navItemPressed,
                ]}
              >
                <Text style={styles.navItemText}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        )}

        <View style={styles.rightSection}>
          <View style={styles.languageSwitcher}>
            {languageOptions.map((lang, index) => (
              <React.Fragment key={lang.code}>
                <Pressable
                  onPress={() => handleLanguageChange(lang.code)}
                  style={({ pressed }) => [
                    styles.langButton,
                    i18n.language === lang.code && styles.langButtonActive,
                    pressed && styles.langButtonPressed,
                  ]}
                >
                  <Text
                    style={[
                      styles.langButtonText,
                      i18n.language === lang.code && styles.langButtonTextActive,
                    ]}
                  >
                    {lang.label}
                  </Text>
                </Pressable>
                {index < languageOptions.length - 1 && (
                  <Text style={styles.langDivider}>|</Text>
                )}
              </React.Fragment>
            ))}
          </View>

          {isMobile && (
            <Pressable
              onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.menuButton}
            >
              <Text style={styles.menuIcon}>{mobileMenuOpen ? '✕' : '☰'}</Text>
            </Pressable>
          )}
        </View>
      </View>

      {mobileMenuOpen && isMobile && (
        <View style={styles.mobileMenu}>
          {navItems.map((item) => (
            <Pressable
              key={item.key}
              onPress={() => handleNavPress(item.key)}
              style={styles.mobileMenuItem}
            >
              <Text style={styles.mobileMenuItemText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...shadows.md,
    position: Platform.OS === 'web' ? ('sticky' as any) : 'relative',
    top: 0,
    zIndex: 100,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  logo: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold,
    color: colors.primary,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  navItem: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 4,
  },
  navItemPressed: {
    backgroundColor: colors.backgroundAlt,
  },
  navItemText: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
    color: colors.text,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  languageSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  langButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 4,
  },
  langButtonActive: {
    backgroundColor: colors.primary,
  },
  langButtonPressed: {
    opacity: 0.7,
  },
  langButtonText: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
    color: colors.textLight,
  },
  langButtonTextActive: {
    color: colors.white,
  },
  langDivider: {
    color: colors.textMuted,
    fontSize: typography.fontSizes.sm,
  },
  menuButton: {
    padding: spacing.sm,
  },
  menuIcon: {
    fontSize: typography.fontSizes.xl,
    color: colors.text,
  },
  mobileMenu: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  mobileMenuItem: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  mobileMenuItemText: {
    fontSize: typography.fontSizes.md,
    color: colors.text,
  },
});

export default Navbar;
