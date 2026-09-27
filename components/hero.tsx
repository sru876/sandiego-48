import Image from 'next/image'
import { ArrowRight, CalendarDays, DollarSign, Waves } from 'lucide-react'

const stats = [
  { icon: CalendarDays, label: 'Fri – Sun', detail: '3 days, 2 nights' },
  { icon: DollarSign, label: '~$300', detail: 'per person' },
  { icon: Waves, label: '5 beaches', detail: 'within 20 min' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-san-diego.png"
        alt="San Diego beach at golden hour with palm trees and a pier"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/40 to-ocean-deep/10"
      />

      <div className="mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-12 pt-32 md:px-6 md:pb-20">
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          <span className="size-2 rounded-full bg-sunset" aria-hidden="true" />
          A weekend guide for college students
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
          48 Hours in <span className="text-sunset">San Diego</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
          Sun, surf, tacos, and sunsets on a student budget. Here&apos;s everything you need to pull off the perfect
          weekend getaway with your crew.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#plan"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-7 py-4 text-base font-semibold text-sunset-foreground shadow-lg shadow-sunset/30 transition-transform hover:-translate-y-0.5"
          >
            Plan My Weekend
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#itinerary"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            See the itinerary
          </a>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/12 p-4 text-white backdrop-blur-md ring-1 ring-white/20">
              <stat.icon className="mb-2 size-5 text-sunset" aria-hidden="true" />
              <dt className="sr-only">{stat.detail}</dt>
              <dd className="font-heading text-xl font-bold md:text-2xl">{stat.label}</dd>
              <dd className="text-xs text-white/80 md:text-sm">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
