'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button 
      size="sm"
      variant="outline"
      className={resolvedTheme === 'light' ? "hover:bg-orange-400/20 hover:border-orange-400" : "hover:bg-purple-400/20 hover:border-purple-400"}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}>
        {resolvedTheme === 'light' ? (
          <SunIcon className='size-4 text-orange-500' />          
        ) : (
          <MoonIcon className='size-4 text-purple-400' />
        )}
        <span className='sr-only'>{resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </Button>
  )
}
