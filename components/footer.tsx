import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='fixed inset-x-0 bottom-0 z-50 bg-background/75 py-6'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <ul className='flex items-center gap-6 text-sm font-light text-slate-300'>
          <li className='transition-colors hover:text-foreground'>
            <a
              href="https://github.com/hunter-darling"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src='/images/github-light.svg'
                alt="GitHub"
                height="36"
                width="36"
              />
            </a>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <a
              href="https://www.linkedin.com/in/hunter-darling-55676b106"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                  src='/images/linkedin-light.svg'
                  alt="LinkedIn"
                  height="34"
                  width="34"
                />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
