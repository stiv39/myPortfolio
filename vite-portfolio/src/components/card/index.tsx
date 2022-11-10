import React from 'react'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  link,
  subheading,
  content,
  bottomContent,
}) => {
  return (
    <div className="text-center shadow-xl rounded-xl my-10 flex-1 pl-10 pr-10 ">
      <div>
        <img src={link} className="h-20 m-auto" />
      </div>
      <p className="py-2 mt-4 font-medium dark:text-white">{subheading}</p>
      <h4 className="py-4 text-teal-600 font-semibold text-xl dark:text-white">
        {content}
      </h4>
      <p className="text-grey-800 font-semibold py-1 dark:text-white">
        {bottomContent}
      </p>
    </div>
  )
}
