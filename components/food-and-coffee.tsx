import Image from 'next/image'
import { Coffee, UtensilsCrossed } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const food = [
  { name: 'Taco Stand', area: 'Pacific Beach', order: 'Al pastor + fish taco', price: '$' },
  { name: 'Lucha Libre Taco Shop', area: 'Mission Hills', order: 'Surfin’ California burrito', price: '$' },
  { name: 'Liberty Public Market', area: 'Point Loma', order: 'Share plates from 30+ stalls', price: '$$' },
  { name: 'Phil’s BBQ', area: 'Point Loma', order: 'El Toro tri-tip sandwich', price: '$$' },
]

const coffee = [
  { name: 'Better Buzz', area: 'Pacific Beach', order: 'Vanilla Bean Latte', price: '$' },
  { name: 'Communal Coffee', area: 'North Park', order: 'Lavender honey cold brew', price: '$' },
  { name: 'James Coffee Co.', area: 'Little Italy', order: 'Oat cortado', price: '$' },
  { name: 'Bird Rock Coffee', area: 'La Jolla', order: 'Single-origin pour over', price: '$' },
]

function SpotList({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: typeof Coffee
  items: typeof food
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-bold text-ocean-deep">{title}</h3>
      </div>
      <ul className="mt-6 divide-y divide-border">
        {items.map((spot) => (
          <li key={spot.name} className="flex items-start justify-between gap-4 py-4">
            <div>
              <p className="font-semibold text-foreground">{spot.name}</p>
              <p className="text-sm text-muted-foreground">
                {spot.area} · <span className="text-foreground/80">Try: {spot.order}</span>
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-sm font-bold text-primary">
              {spot.price}
              <span className="sr-only"> price level</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FoodAndCoffee() {
  return (
    <section id="food" aria-labelledby="food-heading" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            id="food-heading"
            eyebrow="Food & coffee"
            title="Eat like a local (and cheaply)"
            description="San Diego runs on tacos and iced lattes. These student-approved spots won’t drain your wallet."
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/tacos.png"
              alt="Fish tacos and carne asada tacos with lime and salsa"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
              Budget tip: Taco Tuesday is real here
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SpotList title="Food" icon={UtensilsCrossed} items={food} />
          <SpotList title="Coffee" icon={Coffee} items={coffee} />
        </div>
      </div>
    </section>
  )
}
