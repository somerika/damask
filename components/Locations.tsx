import { getLocations } from '@/lib/sanity/queries'
import LocationsContent from './LocationsContent'

export default async function Locations() {
  const locations = await getLocations()
  return <LocationsContent locations={locations} />
}
