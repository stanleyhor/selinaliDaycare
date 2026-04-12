import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Programs } from './components/Programs'
import { PhotoStrip } from './components/PhotoStrip'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useLanguage } from './i18n/useLanguage'
import styles from './App.module.css'

function App() {
  const { messages } = useLanguage()

  return (
    <div className={styles.app}>
      <a href="#main" className={styles.skip}>
        {messages.skipToMain}
      </a>
      <Header />
      <main id="main" className={styles.main} tabIndex={-1}>
        <Hero />
        <About />
        <Programs />
        <PhotoStrip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
