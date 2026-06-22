import { getServicesContent } from '@/lib/sanity/queries'
import ServicesContent from './ServicesContent'

export default async function Services() {
  const content = await getServicesContent()
  if (!content) return null
  return <ServicesContent content={content} />
}
