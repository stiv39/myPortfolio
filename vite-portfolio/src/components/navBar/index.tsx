import { t } from 'i18next'
import { Trans } from 'react-i18next'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { NavBarProps } from './types'
import { Link } from 'react-scroll'

export const NavBar: React.FC<NavBarProps> = ({
  language,
  darkMode,
  handleDarkModeChange,
  handleLanguageChange,
}) => {
  const selected = language === 'en' ? 'sk' : 'en'

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl dark:text-white">
        <Trans i18nKey={'app.welcome'}>
          {'Welcome to my '}
          <span className="text-teal-600 font-medium">portfolio</span>
        </Trans>
      </h1>
      <ul className="flex items-center">
        <li className="px-4 py-2">
          <BsFillMoonStarsFill
            color={darkMode ? 'white' : 'black'}
            onClick={handleDarkModeChange}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li className="px-4 py-2">
          <img
            width={'20px'}
            src={`/flags/${selected}.svg`}
            onClick={handleLanguageChange}
          />
        </li>
        <li>
          <Link to="projects">
            <a
              className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              {t('app.resume')}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
