import Image from 'next/image'
import { Bike, Palette, Sailboat, Sunset } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const featured = [
  {
    image: '/images/la-jolla.png',
    alt: 'Sea lions resting on rocks at La Jolla Cove',
    title: 'La Jolla Cove',
    price: 'Free',
    description: 'Watch sea lions nap, explore tide pools, and kayak into the sea caves.',
  },
  {
    image: '/images/balboa-park.png',
    alt: 'Ornate Spanish-style tower reflected in a lily pond at Balboa Park',
    title: 'Balboa Park',
    price: 'Free – $25',
    description: 'Gardens, 17 museums, and street performers. Many museums are free on Tuesdays.',
  },
  {
    image: '/images/sunset-cliffs.png',
    alt: 'Friends sitting on Sunset Cliffs as the sun sets over the Pacific',
    title: 'Sunset Cliffs',
    price: 'Free',
    description: 'Dramatic sandstone arches and the most photogenic sunset in the city.',
  },
]

const quickHits = [
  { icon: Bike, title: 'Bike the boardwalk', detail: 'Mission Beach · ~$15' },
  { icon: Sailboat, title: 'Coronado ferry', detail: 'Downtown · $8 each way' },
  { icon: Palette, title: 'Chicano Park murals', detail: 'Barrio Logan · Free' },
  { icon: Sunset, title: 'Bonfire at Fiesta Island', detail: 'Mission Bay · Free' },
]

export function ThingsToDo() {
  return (
    <section id="things-to-do" aria-labelledby="todo-heading" className="scroll-mt-16 bg-sand/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="todo-heading"
          eyebrow="Things to do"
          title="Big views, small price tags"
          description="The best parts of San Diego are outdoors, and most of them cost absolutely nothing."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <li key={item.title} className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ocean-deep">
                  {item.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ocean-deep">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickHits.map((item) => (
            <li key={item.title} className="flex items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
