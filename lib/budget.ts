export const budgetItems = [
  { key: 'stay', label: 'Stay', detail: '2 nights, split 4 ways (Airbnb or hostel)', amount: 120 },
  { key: 'food', label: 'Food', detail: 'Tacos, brunch, and market snacks', amount: 90 },
  { key: 'transport', label: 'Getting around', detail: 'Gas split, trolley, scooters, ferry', amount: 40 },
  { key: 'activities', label: 'Activities', detail: 'Kayak rental, bikes, one museum', amount: 30 },
  { key: 'coffee', label: 'Coffee & treats', detail: 'Lattes, churros, ice cream', amount: 20 },
] as const

export const budgetTotal = budgetItems.reduce((sum, item) => sum + item.amount, 0)
