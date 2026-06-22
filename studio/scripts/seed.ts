import {getCliClient} from 'sanity/cli'

// Run with:  npx sanity exec scripts/seed.ts --with-user-token
// Idempotent: uses fixed _ids + createOrReplace, so re-running overwrites
// the seeded docs instead of duplicating them.

const client = getCliClient()

type Locale = {en: string; fi: string}
const L = (en: string, fi: string): Locale => ({en, fi})

let keyCounter = 0
const key = () => `k${(keyCounter++).toString(36)}${Math.random().toString(36).slice(2, 7)}`

const item = (name: Locale, price: Locale) => ({
  _key: key(),
  _type: 'serviceItem',
  name,
  price,
})

const category = (title: Locale, services: ReturnType<typeof item>[]) => ({
  _key: key(),
  _type: 'serviceCategory',
  title,
  services,
})

const HOURS = {weekdays: 'Mon–Fri 10–19', saturday: 'Sat 10–18', sunday: 'Sun 12–18'}

const locations = [
  {slug: 'kruunuvuorenranta', name: 'Kruunuvuorenranta', address: 'Haakoninlahdenkatu 1', city: '00590 Helsinki', phone: '+358 50 5899878', email: 'kruunuvuorenranta@damask.fi', timmaUrl: 'https://varaa.timma.fi/damaskparturikuruununvuorenranta'},
  {slug: 'kallio', name: 'Kallio', address: 'Vaasankatu 4', city: '00500 Helsinki', phone: '+358 40 3240039', email: 'kallio@damask.fi', timmaUrl: 'https://varaa.timma.fi/damaskkallio'},
  {slug: 'kannelmaki', name: 'Kannelmäki', address: 'Kantelettarenkuja 1', city: '00420 Helsinki', phone: '+358 45 2270130', email: 'kannelmaki@damask.fi', timmaUrl: 'https://varaa.timma.fi/damaskgroupoy'},
  {slug: 'kivisto', name: 'Kivistö', address: 'Safirikuja 3', city: '01700 Vantaa', phone: '+358 40 7587759', email: 'kivisto@damask.fi', timmaUrl: null},
  {slug: 'otaniemi', name: 'Otaniemi', address: 'Otaniementie 12', city: '02150 Espoo', phone: '+358 40 828 5660', email: 'otaniemi@damask.fi', timmaUrl: 'https://varaa.timma.fi/damaskotaniemi'},
].map((l, i) => ({
  _id: `location-${l.slug}`,
  _type: 'location',
  name: l.name,
  slug: {_type: 'slug', current: l.slug},
  address: l.address,
  city: l.city,
  phone: l.phone,
  email: l.email,
  hours: {...HOURS},
  ...(l.timmaUrl ? {timmaUrl: l.timmaUrl} : {}),
  order: i + 1,
}))

const servicesPage = {
  _id: 'servicesPage',
  _type: 'servicesPage',
  eyebrow: L('Pricing', 'Hinnasto'),
  heading: L('Services &\nPricing.', 'Palvelut &\nHinnasto.'),
  subtitle: L(
    'All prices include VAT. Walk-ins welcome — booking recommended for color services.',
    'Kaikki hinnat sisältävät ALV:n. Tervetuloa myös ilman ajanvarausta — väripalveluihin ajanvaraus on suositeltava.',
  ),
  bookLabel: L('Book Now', 'Varaa aika'),
  categories: [
    category(L('Hair', 'Hiukset'), [
      item(L('Haircut', 'Hiustenleikkaus'), L('From €25', 'Alkaen €25')),
      item(L('Style Change Cut', 'Mallinmuutosleikkaus'), L('From €30', 'Alkaen €30')),
      item(L('Hair Coloring', 'Hiusten värjäys'), L('From €49', 'Alkaen €49')),
      item(L('Highlight Coloring', 'Hiusraidat'), L('From €59', 'Alkaen €59')),
      item(L('Hair Straightening', 'Hiusten suoristus'), L('From €49', 'Alkaen €49')),
      item(L('Perm', 'Permanentti'), L('From €89', 'Alkaen €89')),
      item(L('Hair Tattoo', 'Hiustatuointi'), L('From €15', 'Alkaen €15')),
      item(L('Children (under 12)', 'Lasten hiustenleikkaus (alle 12v)'), L('€20', '€20')),
      item(L('Hair Wash', 'Hiustenpesu'), L('€10', '€10')),
    ]),
    category(L('Beard & Shave', 'Parta & Ajelu'), [
      item(L('Machine Shave', 'Koneparranajo'), L('€10', '€10')),
      item(L('Blade Shave', 'Teräajelu'), L('€15', '€15')),
      item(L('Beard Shaping', 'Parran muotoilu'), L('€20', '€20')),
    ]),
    category(L('Skin Care', 'Ihohoito'), [
      item(L('Hand Facial (20 min)', 'Manuaalinen kasvohoito (20 min)'), L('€20', '€20')),
      item(L('Machine Facial (60 min)', 'Laitteellinen kasvohoito (60 min)'), L('€50', '€50')),
    ]),
    category(L('Hair Removal', 'Karvanpoisto'), [
      item(L('Wax Hair Removal', 'Karvan poisto vahalla'), L('From €20', 'Alkaen €20')),
      item(L('Thread Hair Removal', 'Karvan poisto langalla'), L('From €15', 'Alkaen €15')),
    ]),
    category(L('Other', 'Muut'), [
      item(L('Ear Cleaning', 'Korvanpuhdistus'), L('€15', '€15')),
    ]),
  ],
  womens: {
    eyebrow: L("Women's Services", 'Naisten Palvelut'),
    note: L('Available at Otaniemi location only', 'Saatavilla vain Otaniemen toimipisteessä'),
    categories: [
      category(L("Women's Haircuts", 'Naisten Hiustenleikkaukset'), [
        item(L("Women's Haircut (incl. washing)", 'Kampaamoleikkaus (sis. pesu)'), L('From €40', 'Alkaen €40')),
      ]),
      category(L("Women's Color", 'Naisten Väri'), [
        item(L("Women's Coloring & Highlights", 'Naisten hiusraidat'), L('From €99', 'Alkaen €99')),
        item(L("Women's Hair Coloring", 'Naisten hiusten värjäys'), L('From €139', 'Alkaen €139')),
      ]),
      category(L("Women's Treatments", 'Naisten Hoidot'), [
        item(L("Women's Keratin Straightening", 'Naisten hiusten suoristus'), L('From €99', 'Alkaen €99')),
        item(L("Women's Hair Curling", 'Naisten hiusten kihartaminen'), L('From €149', 'Alkaen €149')),
      ]),
    ],
  },
}

async function run() {
  const docs = [...locations, servicesPage]
  const tx = docs.reduce((t, doc) => t.createOrReplace(doc), client.transaction())
  await tx.commit()
  console.log(`Seeded ${docs.length} documents: ${locations.length} locations + Services & Pricing`)
}

run().then(
  () => process.exit(0),
  (err) => {
    console.error(err)
    process.exit(1)
  },
)
