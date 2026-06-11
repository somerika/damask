export type Location = {
  id: string
  name: string
  address: string
  city: string
  phone: string
  email: string
  hours: { weekdays: string; saturday: string; sunday: string }
  timmaUrl: string | null
}

export const LOCATIONS: Location[] = [
  {
    id: 'kruunuvuorenranta',
    name: 'Kruunuvuorenranta',
    address: 'Haakoninlahdenkatu 1',
    city: '00590 Helsinki',
    phone: '+358 50 5899878',
    email: 'kruunuvuorenranta@damask.fi',
    hours: { weekdays: 'Mon–Fri  10–19', saturday: 'Sat  10–18', sunday: 'Sun  12–18' },
    timmaUrl: 'https://varaa.timma.fi/damaskparturikuruununvuorenranta',
  },
  {
    id: 'kallio',
    name: 'Kallio',
    address: 'Vaasankatu 4',
    city: '00500 Helsinki',
    phone: '+358 40 3240039',
    email: 'kallio@damask.fi',
    hours: { weekdays: 'Mon–Fri  10–19', saturday: 'Sat  10–18', sunday: 'Sun  12–18' },
    timmaUrl: 'https://varaa.timma.fi/damaskkallio',
  },
  {
    id: 'kannelmaki',
    name: 'Kannelmäki',
    address: 'Kantelettarenkuja 1',
    city: '00420 Helsinki',
    phone: '+358 45 2270130',
    email: 'kannelmaki@damask.fi',
    hours: { weekdays: 'Mon–Fri  10–19', saturday: 'Sat  10–18', sunday: 'Sun  12–18' },
    timmaUrl: 'https://varaa.timma.fi/damaskgroupoy',
  },
  {
    id: 'kivisto',
    name: 'Kivistö',
    address: 'Safiirikuja 5',
    city: '01700 Vantaa',
    phone: '+358 40 7587759',
    email: 'kivisto@damask.fi',
    hours: { weekdays: 'Mon–Fri  10–19', saturday: 'Sat  10–18', sunday: 'Sun  12–18' },
    timmaUrl: null,
  },
  {
    id: 'otaniemi',
    name: 'Otaniemi',
    address: 'Otaniementie 12',
    city: '02150 Espoo',
    phone: '+358 40 828 5660',
    email: 'otaniemi@damask.fi',
    hours: { weekdays: 'Mon–Fri  10–19', saturday: 'Sat  10–18', sunday: 'Sun  12–18' },
    timmaUrl: 'https://varaa.timma.fi/damaskotaniemi',
  },
]
