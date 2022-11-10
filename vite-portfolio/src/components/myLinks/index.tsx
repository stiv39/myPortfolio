import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export const MyLinks = () => {
  return (
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
  )
}
