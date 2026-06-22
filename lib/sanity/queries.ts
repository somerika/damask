import { defineQuery } from 'next-sanity'
import { client } from './client'

export type Lang = 'en' | 'fi'

// ---- Locations ----

export type SanityLocation = {
  id: string
  name: string
  address: string
  city: string
  phone: string
  email: string
  hours: { weekdays: string; saturday: string; sunday: string }
  timmaUrl: string | null
}

const LOCATIONS_QUERY = defineQuery(`*[_type == "location"] | order(order asc){
  "id": slug.current,
  name, address, city, phone, email,
  hours{weekdays, saturday, sunday},
  timmaUrl
}`)

export async function getLocations(): Promise<SanityLocation[]> {
  return client.fetch(LOCATIONS_QUERY, {}, { next: { tags: ['location'], revalidate: 60 } })
}

// ---- Services & Pricing ----

export type ServiceItem = { name: string; price?: string }
export type ServiceCategory = { title: string; services: ServiceItem[] }
export type ServicesView = {
  eyebrow: string
  h2: string[]
  subtitle: string
  book: string
  categories: ServiceCategory[]
  womens: { eyebrow: string; note: string; categories: ServiceCategory[] }
}
export type ServicesContent = Record<Lang, ServicesView>

type Locale = { en?: string; fi?: string } | null
type RawCategory = { title: Locale; services: { name: Locale; price: Locale }[] | null } | null
type RawServices = {
  eyebrow: Locale
  heading: Locale
  subtitle: Locale
  bookLabel: Locale
  categories: RawCategory[] | null
  womens: { eyebrow: Locale; note: Locale; categories: RawCategory[] | null } | null
} | null

const SERVICES_QUERY = defineQuery(`*[_id == "servicesPage"][0]{
  eyebrow, heading, subtitle, bookLabel,
  categories[]{ title, services[]{ name, price } },
  womens{ eyebrow, note, categories[]{ title, services[]{ name, price } } }
}`)

const pick = (v: Locale, lang: Lang): string => v?.[lang] ?? v?.en ?? ''

const mapCategories = (cats: RawCategory[] | null | undefined, lang: Lang): ServiceCategory[] =>
  (cats ?? []).filter(Boolean).map((c) => ({
    title: pick(c!.title, lang),
    services: (c!.services ?? []).map((s) => ({
      name: pick(s.name, lang),
      price: pick(s.price, lang) || undefined,
    })),
  }))

const buildView = (data: NonNullable<RawServices>, lang: Lang): ServicesView => ({
  eyebrow: pick(data.eyebrow, lang),
  h2: pick(data.heading, lang).split('\n'),
  subtitle: pick(data.subtitle, lang),
  book: pick(data.bookLabel, lang),
  categories: mapCategories(data.categories, lang),
  womens: {
    eyebrow: pick(data.womens?.eyebrow ?? null, lang),
    note: pick(data.womens?.note ?? null, lang),
    categories: mapCategories(data.womens?.categories, lang),
  },
})

export async function getServicesContent(): Promise<ServicesContent | null> {
  const data = (await client.fetch(
    SERVICES_QUERY,
    {},
    { next: { tags: ['servicesPage'], revalidate: 60 } }
  )) as RawServices
  if (!data) return null
  return { en: buildView(data, 'en'), fi: buildView(data, 'fi') }
}
