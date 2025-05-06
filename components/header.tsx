import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/5 py-4 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-3xl md:text-2xl sm:text-xl hover:text-green-700 hover:font-bold'>HD</Link>
        </div>
          <ul className='flex items-center gap-2 md:gap-3 sm:gap-1 text-sm md:text-xs sm:text-xs font-light text-muted-foreground'>
            <li>
              <Link href='/about' className="inline-flex text-secondary-foreground 
              mx-1 md:mx-2 sm:mx-0 px-2 md:px-3 sm:px-1 py-1 md:py-2 
              rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">About</Link>
            </li>
            <li>
              <Link href='/projects' className="inline-flex text-secondary-foreground 
              mx-1 md:mx-2 sm:mx-0 px-2 md:px-3 sm:px-1 py-1 md:py-2 
              rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">Projects</Link>
            </li>
            {/* <li>
              <Link href='/blog' className="inline-flex text-secondary-foreground 
              mx-1 md:mx-2 sm:mx-0 px-2 md:px-3 sm:px-1 py-1 md:py-2 
              rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">Blog</Link>
            </li> */}
            <li>
              <a href="mailto:hunterperryd@gmail.com?subject=Howdy Partner!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-secondary-foreground 
              mx-1 md:mx-2 sm:mx-0 px-2 md:px-3 sm:px-1 py-1 md:py-2 
              rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">Contact</a>
            </li>
          </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
