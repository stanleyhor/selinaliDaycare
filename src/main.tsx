import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n/LanguageProvider'
import { applyThemeToDocument } from './theme/applyTheme'
import './styles/global.css'
import App from './App.tsx'

applyThemeToDocument(document.documentElement)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
