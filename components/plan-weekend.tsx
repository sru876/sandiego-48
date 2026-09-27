'use client'

import { useState } from 'react'
import { Check, Minus, Plus, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const vibes = [
  { id: 'beach', label: 'Beach bum', picks: ['Mission Beach boardwalk', 'Coronado Beach', 'Fiesta Island bonfire'] },
  { id: 'explorer', label: 'Explorer', picks: ['La Jolla sea caves kayak', 'Balboa Park', 'Sunset Cliffs'] },
  { id: 'foodie', label: 'Foodie', picks: ['Little Italy Mercato', 'Liberty Public Market', 'Taco crawl in PB'] },
] as const

const budgets = [
  { id: 'shoestring', label: 'Shoestring', multiplier: 0.75 },
  { id: 'balanced', label: 'Balanced', multiplier: 1 },
  { id: 'treat', label: 'Treat yourself', multiplier: 1.4 },
] as const

const BASE_STAY_TOTAL = 480
const BASE_OTHER_PER_PERSON = 180

export function PlanWeekend() {
  const [vibe, setVibe] = useState<(typeof vibes)[number]['id']>('explorer')
  const [budget, setBudget] = useState<(typeof budgets)[number]['id']>('balanced')
  const [people, setPeople] = useState(4)
  const [submitted, setSubmitted] = useState(false)

  const selectedVibe = vibes.find((v) => v.id === vibe)!
  const selectedBudget = budgets.find((b) => b.id === budget)!
  const perPerson = Math.round((BASE_STAY_TOTAL / people + BASE_OTHER_PER_PERSON) * selectedBudget.multiplier)

  return (
    <section id="plan" aria-labelledby="plan-heading" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-sand via-background to-accent p-6 ring-1 ring-border md:p-12">
          <SectionHeading
            id="plan-heading"
            eyebrow="Plan my weekend"
            title="Build your San Diego weekend"
            description="Pick your vibe, budget, and crew size. We’ll give you a game plan and a cost estimate."
          />

          <form
            className="mt-10 grid gap-8 lg:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="flex flex-col gap-8">
              <fieldset>
                <legend className="mb-3 font-semibold text-foreground">{"What's your vibe?"}</legend>
                <div className="flex flex-wrap gap-2">
                  {vibes.map((v) => (
                    <label
                      key={v.id}
                      className={cn(
                        'cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                        vibe === v.id
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-foreground hover:border-primary',
                      )}
                    >
                      <input
                        type="radio"
                        name="vibe"
                        value={v.id}
                        checked={vibe === v.id}
                        onChange={() => {
                          setVibe(v.id)
                          setSubmitted(false)
                        }}
                        className="sr-only"
                      />
                      {v.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 font-semibold text-foreground">Budget style</legend>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <label
                      key={b.id}
                      className={cn(
                        'cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                        budget === b.id
                          ? 'border-sunset bg-sunset text-sunset-foreground'
                          : 'border-border bg-card text-foreground hover:border-sunset',
                      )}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={b.id}
                        checked={budget === b.id}
                        onChange={() => {
                          setBudget(b.id)
                          setSubmitted(false)
                        }}
                        className="sr-only"
                      />
                      {b.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <p id="people-label" className="mb-3 font-semibold text-foreground">
                  How many friends are going?
                </p>
                <div className="flex w-fit items-center gap-4 rounded-full border border-border bg-card p-1.5" role="group" aria-labelledby="people-label">
                  <button
                    type="button"
                    onClick={() => {
                      setPeople((p) => Math.max(1, p - 1))
                      setSubmitted(false)
                    }}
                    disabled={people <= 1}
                    className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary disabled:opacity-40"
                  >
                    <Minus className="size-4" aria-hidden="true" />
                    <span className="sr-only">Remove a person</span>
                  </button>
                  <output aria-live="polite" className="min-w-16 text-center font-heading text-lg font-bold">
                    {people} {people === 1 ? 'person' : 'people'}
                  </output>
                  <button
                    type="button"
                    onClick={() => {
                      setPeople((p) => Math.min(8, p + 1))
                      setSubmitted(false)
                    }}
                    disabled={people >= 8}
                    className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary disabled:opacity-40"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                    <span className="sr-only">Add a person</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-ocean-deep sm:w-fit"
              >
                <Sparkles className="size-4" aria-hidden="true" />
                Plan My Weekend
              </button>
            </div>

            <div
              aria-live="polite"
              className={cn(
                'flex flex-col rounded-3xl bg-card p-6 ring-1 ring-border transition-opacity md:p-8',
                !submitted && 'opacity-70',
              )}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Your game plan</p>
              <p className="mt-3 font-heading text-5xl font-extrabold text-ocean-deep">
                ~${perPerson}
                <span className="ml-2 text-base font-medium text-muted-foreground">per person</span>
              </p>
              <p className="mt-2 text-muted-foreground">
                {selectedVibe.label} weekend · {selectedBudget.label} · {people} {people === 1 ? 'traveler' : 'travelers'}
              </p>

              <p className="mt-6 font-semibold text-foreground">Must-do stops</p>
              <ul className="mt-3 flex flex-col gap-3">
                {selectedVibe.picks.map((pick) => (
                  <li key={pick} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    {pick}
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  Sunset at Sunset Cliffs (non-negotiable)
                </li>
              </ul>

              <p className="mt-auto pt-6 text-sm text-muted-foreground">
                {submitted
                  ? 'Screenshot this and drop it in the group chat. See you at the beach!'
                  : 'Hit "Plan My Weekend" to lock it in.'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
