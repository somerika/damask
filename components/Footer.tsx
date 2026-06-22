import { getLocations } from '@/lib/sanity/queries'
import FooterContent from './FooterContent'

export default async function Footer() {
  const locations = await getLocations()
  return <FooterContent locations={locations} />
}
