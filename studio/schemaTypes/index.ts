import { localeString, localeText } from './objects/locale'
import { location } from './documents/location'
import { servicesPage, serviceCategory, serviceItem } from './documents/servicesPage'

export const schemaTypes = [
  // Objects
  localeString,
  localeText,
  serviceItem,
  serviceCategory,
  // Documents
  location,
  servicesPage,
]
