import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Animated,
  Platform,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius } from '@/constants/theme';

interface HeroProps {
  scrollY?: Animated.Value;
  onCtaPress?: () => void;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const HERO_HEIGHT = Platform.OS === 'web' ? 600 : SCREEN_HEIGHT * 0.7;

export const Hero: React.FC<HeroProps> = ({ scrollY, onCtaPress }) => {
  const { t } = useTranslation();

  const parallaxTransform = scrollY
    ? {
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [0, HERO_HEIGHT],
              outputRange: [0, HERO_HEIGHT * 0.4],
              extrapolate: 'clamp',
            }),
          },
        ],
      }
    : {};

  const contentOpacity = scrollY
    ? {
        opacity: scrollY.interpolate({
          inputRange: [0, HERO_HEIGHT * 0.5],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }
    : {};

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.backgroundContainer, parallaxTransform]}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80',
          }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay} />
        </ImageBackground>
      </Animated.View>

      <Animated.View style={[styles.content, contentOpacity]}>
        <View style={styles.decorCircle1} />
        <View style={styles.decorCircle2} />
        
        <Text style={styles.title}>{t('hero.title')}</Text>
        <Text style={styles.subtitle}>{t('hero.subtitle')}</Text>
        <Text style={styles.description}>{t('hero.description')}</Text>

        <Pressable
          onPress={onCtaPress}
          style={({ pressed }) => [
            styles.ctaButton,
            pressed && styles.ctaButtonPressed,
          ]}
        >
          <Text style={styles.ctaButtonText}>{t('hero.cta')}</Text>
        </Pressable>
      </Animated.View>

      <View style={styles.waveContainer}>
        <View style={styles.wave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HERO_HEIGHT,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 107, 107, 0.75)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    zIndex: 10,
  },
  decorCircle1: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    opacity: 0.3,
  },
  decorCircle2: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.accent,
    opacity: 0.2,
  },
  title: {
    fontSize: Platform.OS === 'web' ? typography.fontSizes.display : typography.fontSizes.xxxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.sm,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  description: {
    fontSize: typography.fontSizes.lg,
    color: colors.white,
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: typography.fontSizes.lg * typography.lineHeights.relaxed,
    marginBottom: spacing.xl,
  },
  ctaButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
      },
    }),
  },
  ctaButtonPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },
  ctaButtonText: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
  },
  waveContainer: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 50,
    overflow: 'hidden',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: colors.background,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transform: [{ scaleX: 2 }],
  },
});

export default Hero;
