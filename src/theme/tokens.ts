/**
 * Canonical theme — import this object from a future React Native app
 * into StyleSheet.create({ ... }) using the same keys.
 */
export const tokens = {
  colors: {
    cream: '#FFFBF5',
    skyLight: '#A8E6FF',
    sky: '#1CB0E6',
    skyDeep: '#0B7BAD',
    coral: '#FF6B57',
    coralDeep: '#E63E2E',
    white: '#FFFFFF',
    ink: '#2D2A32',
    inkMuted: '#5C5560',
    lilac: '#E4D4FF',
    accentYellow: '#FFE01A',
    /** Playful accents for gradients & highlights */
    mint: '#14D9B5',
    mintLight: '#7FF5E1',
    bubblegum: '#FF6BB3',
    sun: '#FFD93D',
    peach: '#FFC9A3',
    shadow: 'rgba(45, 42, 50, 0.1)',
    shadowStrong: 'rgba(45, 42, 50, 0.16)',
    shadowCoralTint: 'rgba(255, 107, 87, 0.18)',
    shadowSkyTint: 'rgba(11, 123, 173, 0.14)',
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    section: 72,
  },
  radii: {
    sm: 8,
    md: 16,
    lg: 24,
    pill: 9999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    hero: 44,
    heroLg: 52,
  },
  fontFamily: {
    display:
      '"Nunito", "Noto Sans TC", "Noto Sans SC", system-ui, sans-serif',
    body: '"DM Sans", "Noto Sans TC", "Noto Sans SC", system-ui, sans-serif',
  },
} as const

export type Tokens = typeof tokens
