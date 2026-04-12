export type Locale = 'en' | 'zh-TW' | 'zh-CN'

export const LOCALE_STORAGE_KEY = 'selinali-locale'

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'zh-TW' || value === 'zh-CN'
}

/** Read persisted locale; default English. Safe for SSR / no window. */
export function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    const raw = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(raw)) return raw
  } catch {
    /* private mode, etc. */
  }
  return DEFAULT_LOCALE
}

export function writeStoredLocale(locale: Locale): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    /* ignore */
  }
}
