'use client'

import { useState } from 'react'
import { Menu, Sun, X } from 'lucide-react'

const links = [
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#things-to-do', label: 'Things to Do' },
  { href: '#food', label: 'Food & Coffee' },
  { href: '#budget', label: 'Budget' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-bold text-ocean-deep">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sun className="size-4" aria-hidden="true" />
          </span>
          48 Hours in SD
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#plan"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ocean-deep md:inline-flex"
        >
          Plan My Weekend
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex size-10 items-center justify-center rounded-full text-ocean-deep hover:bg-secondary md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 bg-background px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#plan"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
          >
            Plan My Weekend
          </a>
        </nav>
      )}
    </header>
  )
}
