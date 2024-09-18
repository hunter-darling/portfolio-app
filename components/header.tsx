import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/5 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>HD</Link>
        </div>
          <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/about'>About</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/projects'>Projects</Link>
            </li>
            {/* <li className='transition-colors hover:text-foreground'>
              <Link href='/work-examples'>Work Examples</Link>
            </li> */}
            <li className='transition-colors hover:text-foreground'>
              <a href="mailto:hunterperryd@gmail.com?subject=Howdy Partner!"
              target="_blank"
              rel="noreferrer"
              >Contact</a>
            </li>
            {/* <li className='transition-colors hover:text-foreground'>
              <Link href='/booklist'>Currently Reading</Link>
            </li> */}
          </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
