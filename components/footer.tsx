import Image from 'next/image'
import React from 'react'
import Kilroy from './kilroy'

export default function Footer() {
  return (
    <footer className='bottom-0 z-50 bg-background/5 pb-6'>
      <nav className='container flex max-w-3xl items-center lg:justify-start justify-between'>
        <div className='px-2'>
          <a
              href="https://github.com/hunter-darling"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="hidden dark:block"
                src='/images/github-dark.svg'
                alt="GitHub"
                height="36"
                width="36"
              />
              <Image
                className="dark:hidden"
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
                className="hidden dark:block"
                src='/images/linkedin-dark.svg'
                alt="LinkedIn"
                height="34"
                width="34"
              />
              <Image
                className="dark:hidden"
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
        {/* <ul className='flex items-center gap-6 text-sm font-light text-slate-300'>
          <li className='transition-colors hover:text-foreground'>
            <a
              href="https://github.com/hunter-darling"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="hidden dark:block"
                src='/images/github-dark.svg'
                alt="GitHub"
                height="36"
                width="36"
              />
              <Image
                className="dark:hidden"
                src='/images/github-light.svg'
                alt="GitHub"
                height="36"
                width="36"
              />
            </a>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <a
              href="https://linkedin.com/in/hunter-darling-55676b106"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="hidden dark:block"
                src='/images/linkedin-dark.svg'
                alt="LinkedIn"
                height="34"
                width="34"
              />
              <Image
                className="dark:hidden"
                src='/images/linkedin-light.svg'
                alt="LinkedIn"
                height="34"
                width="34"
              />
            </a>
          </li>
          <li className="transition-colors hover:text-foreground justify-end">
            <Kilroy/>
          </li>
        </ul> */}
      </nav>
    </footer>
  )
}
