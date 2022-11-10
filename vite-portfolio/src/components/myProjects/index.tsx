import React from 'react'
import { Card } from '../card'
import { MyProjectsProps } from './types'

export const MyProjects: React.FC<MyProjectsProps> = ({ t }) => {
  return (
    <>
      <div>
        <h3 className="text-3xl  dark:text-white">{t('app.projects')}</h3>
      </div>
      <div className="flex">
        <Card
          heading={'Volvo'}
          subheading={'Feb 2018 - April 2020'}
          content={'Fullstack developer'}
          bottomContent={
            'Sitecore 8.2, C#, ASP.NET MVC, WEB API, NUnit, Selenium, Specflow, WebDriver I.O., Bootstrap, HTML5, CSS3, AngularJS, React, Azure, Git, DocumentDB'
          }
        />
        <Card
          heading={'EuroWag'}
          subheading={'May 2020 - Aug 2022'}
          content={'Frontend Developer'}
          bottomContent={
            'React, Typescript, Redux, Redux-Saga, Material-UI, Webpack, Yarn, Git'
          }
        />
        <Card
          heading={'VUB'}
          subheading={'Aug 2022 - Nov 2022'}
          content={'Fullstack developer'}
          bottomContent={
            'React, Typescript, Redux, Saga, Material-UI, Webpack, Yarn, Git C#, .NET, WebApi, SQL, Azure DevOps'
          }
        />
      </div>
    </>
  )
}
