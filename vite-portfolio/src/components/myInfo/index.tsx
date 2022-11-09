import React, { useState } from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Card } from '../card'
import { NavBar } from './../navBar/index'
import { useTranslation } from 'react-i18next'
import { MyInfoProps } from './types'

export const MyInfo: React.FC<MyInfoProps> = ({
  currentLanguage,
  handleLanguageChange,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const { t } = useTranslation()
  const handleDarkModeChange = () => setDarkMode(!darkMode)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <NavBar
            handleDarkModeChange={handleDarkModeChange}
            language={currentLanguage}
            handleLanguageChange={handleLanguageChange}
          />
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              FirstName LastName
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
              Fullstack web dev
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quod beatae debitis veniam quia distinctio quibusdam nihil
              similique autem aliquid voluptatibus veritatis dicta temporibus
              ratione dolore mollitia natus, ullam animi!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3">
            <a
              href="https://www.linkedin.com/in/jarsinsky-norbert/"
              target={'_blank'}
            >
              <AiFillLinkedin className="text-blue-700" />
            </a>
            <a href="https://github.com/stiv39" target={'_blank'}>
              <AiFillGithub />
            </a>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quod beatae debitis veniam quia distinctio quibusdam nihil
              similique autem aliquid voluptatibus veritatis dicta temporibus
              ratione dolore mollitia natus, ullam animi!
            </p>
          </div>

          <div className="flex">
            <Card
              heading={'heading'}
              subheading={'subheading'}
              content={'content'}
              bullets={['1', '2']}
            />
            <Card
              heading={'heading'}
              subheading={'subheading'}
              content={'content'}
              bullets={['1', '2']}
            />
            <Card
              heading={'heading'}
              subheading={'subheading'}
              content={'content'}
              bullets={['1', '2']}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
