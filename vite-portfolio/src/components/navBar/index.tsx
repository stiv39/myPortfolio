import { BsFillMoonStarsFill } from 'react-icons/bs'
import { NavBarProps } from './types'

export const NavBar: React.FC<NavBarProps> = ({
  handleDarkModeChange,
  handleLanguageChange,
  language,
  darkMode,
}) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl dark:text-white">
        Welcome to my{' '}
        <span className="text-teal-600 font-medium">portfolio</span>
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
            src={`/flags/${language}.svg`}
            onClick={handleLanguageChange}
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
