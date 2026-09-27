import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Itinerary } from '@/components/itinerary'
import { ThingsToDo } from '@/components/things-to-do'
import { FoodAndCoffee } from '@/components/food-and-coffee'
import { Budget } from '@/components/budget'
import { PlanWeekend } from '@/components/plan-weekend'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Itinerary />
        <ThingsToDo />
        <FoodAndCoffee />
        <Budget />
        <PlanWeekend />
      </main>
      <SiteFooter />
    </>
  )
}
