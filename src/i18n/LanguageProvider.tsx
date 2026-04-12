import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from './locale'
import { readStoredLocale, writeStoredLocale } from './locale'
import { LanguageContext } from './locale-context'
import { messagesByLocale } from './messages'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    writeStoredLocale(next)
  }, [])

  useEffect(() => {
    if (locale === 'zh-TW') document.documentElement.lang = 'zh-Hant'
    else if (locale === 'zh-CN') document.documentElement.lang = 'zh-Hans'
    else document.documentElement.lang = 'en'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: messagesByLocale[locale],
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
