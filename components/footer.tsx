import Image from 'next/image'
import React from 'react'
import Kilroy from './kilroy'

export default function Footer() {
  return (
    <footer className='w-full bg-background/5 backdrop-blur-sm mt-auto'>
      <nav className='container flex max-w-3xl items-center lg:justify-start justify-between py-2'>
        <div className='px-2'>
          <a
              href="https://github.com/hunter-darling"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="hidden dark:block hover:opacity-50"
                src='/images/github-dark.svg'
                alt="GitHub"
                height="36"
                width="36"
              />
              <Image
                className="dark:hidden hover:opacity-50"
                src='/images/github-light.svg'
                alt="GitHub"
                height="36"
                width="36"
              />
            </a>
        </div>
        <div className='px-2'>
          <a
              href="https://linkedin.com/in/hunter-darling-55676b106"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="hidden dark:block hover:opacity-50"
                src='/images/linkedin-dark.svg'
                alt="LinkedIn"
                height="34"
                width="34"
              />
              <Image
                className="dark:hidden hover:opacity-50"
                src='/images/linkedin-light.svg'
                alt="LinkedIn"
                height="34"
                width="34"
              />
            </a>
        </div>
        <div className='px-2'>
          <Kilroy/>
        </div>
      </nav>
    </footer>
  )
}
