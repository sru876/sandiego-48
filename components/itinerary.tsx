'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Stop = { time: string; title: string; place: string; note: string }

const days: { id: string; day: string; theme: string; stops: Stop[] }[] = [
  {
    id: 'fri',
    day: 'Friday',
    theme: 'Arrive & catch the sunset',
    stops: [
      { time: '3:00 PM', title: 'Roll into town', place: 'Pacific Beach', note: 'Drop your bags and change into flip-flops.' },
      { time: '4:30 PM', title: 'Boardwalk cruise', place: 'Mission Beach Boardwalk', note: 'Rent bikes or scooters and ride the 3-mile strip.' },
      { time: '6:45 PM', title: 'Golden hour', place: 'Crystal Pier', note: 'Grab a spot on the sand before the sky turns orange.' },
      { time: '8:00 PM', title: 'Taco night', place: 'Taco Stand, PB', note: 'Carne asada and fish tacos under $5 each.' },
    ],
  },
  {
    id: 'sat',
    day: 'Saturday',
    theme: 'Coast, culture & cliffs',
    stops: [
      { time: '8:30 AM', title: 'Coffee + pastries', place: 'Little Italy', note: 'Stroll the Saturday Mercato farmers market.' },
      { time: '10:30 AM', title: 'Sea lions & kayaks', place: 'La Jolla Cove', note: 'Snorkel or kayak the sea caves (book ahead).' },
      { time: '2:00 PM', title: 'Museums & gardens', place: 'Balboa Park', note: 'Wander free gardens and the Spanish Village art studios.' },
      { time: '6:30 PM', title: 'Sunset picnic', place: 'Sunset Cliffs', note: 'Bring snacks and a blanket. Best free show in town.' },
      { time: '8:30 PM', title: 'Night out', place: 'Gaslamp Quarter', note: 'Rooftop views, street food, and live music.' },
    ],
  },
  {
    id: 'sun',
    day: 'Sunday',
    theme: 'Brunch, beach & goodbye',
    stops: [
      { time: '9:00 AM', title: 'Big brunch', place: 'North Park', note: 'Split a stack of pancakes and a breakfast burrito.' },
      { time: '11:00 AM', title: 'Harbor walk', place: 'Seaport Village', note: 'Walk the Embarcadero and spot the USS Midway.' },
      { time: '12:30 PM', title: 'Ferry to Coronado', place: 'Coronado Beach', note: 'Sparkly gold sand and one last swim.' },
      { time: '3:30 PM', title: 'Head home', place: 'Old Town', note: 'Grab churros for the road trip back.' },
    ],
  },
]

export function Itinerary() {
  const [active, setActive] = useState(days[0].id)
  const current = days.find((d) => d.id === active) ?? days[0]

  return (
    <section id="itinerary" aria-labelledby="itinerary-heading" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="itinerary-heading"
          eyebrow="The itinerary"
          title="Your Friday to Sunday, sorted"
          description="A relaxed, flexible plan that hits the highlights without burning you out. Swap anything you like."
        />

        <div role="tablist" aria-label="Choose a day" className="mt-10 flex gap-2 overflow-x-auto rounded-full bg-sand p-1.5 sm:w-fit">
          {days.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              id={`tab-${d.id}`}
              aria-selected={active === d.id}
              aria-controls={`panel-${d.id}`}
              onClick={() => setActive(d.id)}
              className={cn(
                'flex-1 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:flex-none',
                active === d.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-sand-foreground hover:bg-white/60',
              )}
            >
              {d.day}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-8 rounded-3xl border border-border bg-card p-6 md:p-10"
        >
          <h3 className="text-2xl font-bold text-ocean-deep md:text-3xl">
            {current.day}: <span className="text-primary">{current.theme}</span>
          </h3>

          <ol className="mt-8 flex flex-col">
            {current.stops.map((stop, i) => (
              <li key={stop.title} className="relative flex gap-4 pb-8 last:pb-0 md:gap-8">
                {i < current.stops.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[5.5px] top-4 h-full w-px bg-border md:left-[calc(6rem+5.5px)]" />
                )}
                <p className="hidden w-24 shrink-0 pt-0.5 text-sm font-semibold text-muted-foreground md:block">{stop.time}</p>
                <span aria-hidden="true" className="relative mt-1.5 size-3 shrink-0 rounded-full bg-sunset ring-4 ring-accent" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground md:hidden">{stop.time}</p>
                  <p className="font-heading text-lg font-bold text-foreground">{stop.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {stop.place}
                  </p>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{stop.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
