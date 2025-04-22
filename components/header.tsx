import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/5 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-3xl'>HD</Link>
        </div>
          <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
            <li>
              <Link href='/about' className="inline-flex text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">About</Link>
            </li>
            <li>
              <Link href='/projects' className="inline-flex text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">Projects</Link>
            </li>
            <li>
              <a href="mailto:hunterperryd@gmail.com?subject=Howdy Partner!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">Contact</a>
            </li>
          </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
