import { Sun } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-sand/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
        <p className="flex items-center gap-2 font-heading font-bold text-ocean-deep">
          <Sun className="size-4 text-sunset" aria-hidden="true" />
          48 Hours in San Diego
        </p>
        <p className="text-sm text-muted-foreground">
          Prices are estimates. Always check hours and bring sunscreen.
        </p>
      </div>
    </footer>
  )
}
