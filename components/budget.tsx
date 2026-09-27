import { PiggyBank } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { budgetItems, budgetTotal } from '@/lib/budget'

const tips = [
  'Split an Airbnb with 3–4 friends instead of booking a hotel.',
  'Pack a cooler with drinks and snacks for beach days.',
  'Use the MTS trolley ($2.50) instead of rideshares downtown.',
  'Bring your student ID for museum discounts.',
]

export function Budget() {
  return (
    <section id="budget" aria-labelledby="budget-heading" className="scroll-mt-16 bg-ocean-deep py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Estimated budget</p>
          <h2 id="budget-heading" className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About ${budgetTotal} for the whole weekend
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Per person, based on a group of four driving in and sharing a place. Your mileage (literally) may vary.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <p className="flex items-center gap-2 font-heading text-lg font-bold">
              <PiggyBank className="size-5 text-primary" aria-hidden="true" />
              Save-money tips
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-3 text-white/85">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-6 text-card-foreground md:p-8 lg:col-span-3">
          <ul className="flex flex-col gap-6">
            {budgetItems.map((item) => {
              const pct = Math.round((item.amount / budgetTotal) * 100)
              return (
                <li key={item.key}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                    <p className="font-heading text-xl font-bold text-ocean-deep">${item.amount}</p>
                  </div>
                  <div
                    className="mt-3 h-2.5 overflow-hidden rounded-full bg-sand"
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${item.label}: ${pct}% of budget`}
                  >
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-sunset" style={{ width: `${pct}%` }} />
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 flex items-center justify-between rounded-2xl bg-accent px-5 py-4">
            <p className="font-semibold text-accent-foreground">Total per person</p>
            <p className="font-heading text-3xl font-extrabold text-accent-foreground">${budgetTotal}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
