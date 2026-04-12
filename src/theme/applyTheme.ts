import { tokens } from './tokens'

function px(n: number): string {
  return `${n}px`
}

/**
 * Maps `tokens` to CSS custom properties on `:root` for use in CSS Modules / global.css.
 */
export function applyThemeToDocument(root: HTMLElement): void {
  const { colors, space, radii, fontSize, fontFamily } = tokens

  const set = (name: string, value: string) => {
    root.style.setProperty(name, value)
  }

  set('--color-cream', colors.cream)
  set('--color-sky-light', colors.skyLight)
  set('--color-sky', colors.sky)
  set('--color-sky-deep', colors.skyDeep)
  set('--color-coral', colors.coral)
  set('--color-coral-deep', colors.coralDeep)
  set('--color-white', colors.white)
  set('--color-ink', colors.ink)
  set('--color-ink-muted', colors.inkMuted)
  set('--color-lilac', colors.lilac)
  set('--color-accent-yellow', colors.accentYellow)
  set('--color-mint', colors.mint)
  set('--color-mint-light', colors.mintLight)
  set('--color-bubblegum', colors.bubblegum)
  set('--color-sun', colors.sun)
  set('--color-peach', colors.peach)
  set('--color-shadow', colors.shadow)
  set('--color-shadow-strong', colors.shadowStrong)
  set('--color-shadow-coral-tint', colors.shadowCoralTint)
  set('--color-shadow-sky-tint', colors.shadowSkyTint)

  set('--space-xs', px(space.xs))
  set('--space-sm', px(space.sm))
  set('--space-md', px(space.md))
  set('--space-lg', px(space.lg))
  set('--space-xl', px(space.xl))
  set('--space-xxl', px(space.xxl))
  set('--space-section', px(space.section))

  set('--radius-sm', px(radii.sm))
  set('--radius-md', px(radii.md))
  set('--radius-lg', px(radii.lg))
  set('--radius-pill', px(radii.pill))

  set('--font-size-xs', px(fontSize.xs))
  set('--font-size-sm', px(fontSize.sm))
  set('--font-size-md', px(fontSize.md))
  set('--font-size-lg', px(fontSize.lg))
  set('--font-size-xl', px(fontSize.xl))
  set('--font-size-xxl', px(fontSize.xxl))
  set('--font-size-hero', px(fontSize.hero))
  set('--font-size-hero-lg', px(fontSize.heroLg))

  set('--font-display', fontFamily.display)
  set('--font-body', fontFamily.body)

  set(
    '--shadow-card',
    `0 6px 22px ${colors.shadowCoralTint}, 0 3px 10px ${colors.shadowSkyTint}`,
  )
  set(
    '--shadow-float',
    `0 14px 44px ${colors.shadowStrong}, 0 6px 16px ${colors.shadowCoralTint}`,
  )
}
