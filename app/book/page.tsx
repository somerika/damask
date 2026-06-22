import { getLocations } from '@/lib/sanity/queries'
import BookContent from './BookContent'

export default async function BookPage() {
  const locations = await getLocations()
  return <BookContent locations={locations} />
}
