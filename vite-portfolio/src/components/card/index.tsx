import React from 'react'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  heading,
  subheading,
  content,
  bottomContent,
}) => {
  return (
    <div className="text-center shadow-xl rounded-xl my-10 flex-1 ">
      <h3 className="text-3xl font-medium pt-5 pb-2 dark:text-white">
        {heading}
      </h3>
      <p className="py-2 dark:text-white">{subheading}</p>
      <h4 className="py-4 text-teal-600 dark:text-white">{content}</h4>
      <p className="text-grey-800 font-semibold py-1 dark:text-white">
        {bottomContent}
      </p>
    </div>
  )
}
