import { MainView } from './views/main'
import { I18nProvider } from './providers'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState<string>('en')

  const handleLanguageChange = () =>
    setLanguage(language === 'en' ? 'sk' : 'en')
  return (
    <I18nProvider url={'http://localhost:5173'} language={language}>
      <MainView
        currentLanguage={language}
        handleLanguageChange={handleLanguageChange}
      />
    </I18nProvider>
  )
}

export default App
