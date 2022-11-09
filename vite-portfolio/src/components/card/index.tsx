import React from 'react'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  heading,
  subheading,
  content,
  bullets,
}) => {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 ">
      <h3 className="text-large font-medium pt-8 pb-2 dark:text-white">
        {heading}
      </h3>
      <p className="py-2 dark:text-white">{subheading}</p>
      <h4 className="py-4 text-teal-600 dark:text-white">{content}</h4>
      {bullets &&
        bullets.map((bullet) => (
          <p className="text-grey-800 py-1 dark:text-white">{bullet}</p>
        ))}
    </div>
  )
}
