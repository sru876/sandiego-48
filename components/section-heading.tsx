import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 id={id} className="text-4xl font-extrabold tracking-tight text-ocean-deep md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
