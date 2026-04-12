import { createContext } from 'react'
import type { Locale } from './locale'
import type { Messages } from './messages'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
