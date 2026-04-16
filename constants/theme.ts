import { Platform, ViewStyle } from 'react-native';

export const colors = {
  primary: '#FF6B6B',
  primaryLight: '#FF8E8E',
  primaryDark: '#E85555',
  secondary: '#FFE66D',
  secondaryLight: '#FFF0A3',
  secondaryDark: '#E6CF5A',
  accent: '#4ECDC4',
  accentLight: '#7EDDD6',
  accentDark: '#3DBDB5',
  background: '#FFF9F0',
  backgroundAlt: '#FFF5E6',
  surface: '#FFFFFF',
  text: '#2D3436',
  textLight: '#636E72',
  textMuted: '#B2BEC3',
  white: '#FFFFFF',
  black: '#000000',
  success: '#00B894',
  warning: '#FDCB6E',
  error: '#E17055',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const typography = {
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    display: 48,
  },
  fontWeights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

const createShadow = (offsetY: number, opacity: number, radius: number, elevation: number): ViewStyle => {
  if (Platform.OS === 'web') {
    return {
      boxShadow: `0 ${offsetY}px ${radius}px rgba(0, 0, 0, ${opacity})`,
    } as ViewStyle;
  }
  return {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: offsetY },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation,
  };
};

export const shadows = {
  sm: createShadow(1, 0.1, 2, 2),
  md: createShadow(2, 0.15, 4, 4),
  lg: createShadow(4, 0.2, 8, 8),
};

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
};

export type Theme = typeof theme;
