import React from 'react'
import { MySkillsProps } from './types'
import {
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiMaterialui,
  SiDotnet,
  SiCsharp,
  SiMicrosoftazure,
  SiGit,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
} from 'react-icons/si'

export const MySkills: React.FC<MySkillsProps> = ({ t }) => {
  return (
    <div>
      <h3 className="text-3xl py-6 dark:text-white">{t('app.skills')}</h3>
      <div className="flex justify-center gap-8">
        <SiHtml5 className="text-5xl dark:text-white text-orange-700" />
        <SiCss3 className="text-5xl dark:text-white text-blue-600" />
        <SiReact className="text-5xl dark:text-white text-cyan-500" />
        <SiRedux className="text-5xl dark:text-white text-purple-800" />
        <SiReduxsaga className="text-5xl dark:text-white text-purple-800" />
        <SiMaterialui className="text-5xl dark:text-white text-blue-500" />
        <SiGit className="text-5xl dark:text-white text-orange-700" />
        <SiJavascript className="text-5xl dark:text-white text-yellow-500" />
        <SiTypescript className="text-5xl dark:text-white text-blue-500" />
        <SiTailwindcss className="text-5xl dark:text-white text-blue-400" />
        <SiCsharp className="text-5xl dark:text-white text-purple-800" />
        <SiDotnet className="text-5xl dark:text-white text-purple-900" />
        <SiMicrosoftazure className="text-5xl dark:text-white text-blue-600" />
        <SiMysql className="text-5xl dark:text-white text-cyan-800" />
      </div>
    </div>
  )
}
