import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MainViewProps } from './types'
import { NavBar, MyInfo, MySkills, MyProjects, MyLinks } from '../../components'

export const MainView: React.FC<MainViewProps> = ({
  currentLanguage,
  handleLanguageChange,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const { t } = useTranslation()

  const handleDarkModeChange = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <NavBar
            darkMode={darkMode}
            language={currentLanguage}
            handleDarkModeChange={handleDarkModeChange}
            handleLanguageChange={handleLanguageChange}
          />
          <MyInfo t={t} />
          <MyLinks />
        </section>
        {/* SKILLS */}
        <section>
          <MySkills t={t} />
          <div>
            <h3 className="text-3xl pt-6 pb-4 dark:text-white">
              {t('app.certifications')}
            </h3>
            <p className="font-medium dark:text-white">Microsoft Exam AZ-900</p>
          </div>
        </section>
        {/* PROJECTS */}
        <section id={'projects'}>
          <MyProjects t={t} />
        </section>
      </main>
    </div>
  )
}
