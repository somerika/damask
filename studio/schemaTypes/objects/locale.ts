import { defineType, defineField } from 'sanity'

// Field-level localization for Damask's two fixed languages (EN/FI).
// Maps 1:1 to the site's client-side language toggle ({ en, fi }).
export const localeString = defineType({
  name: 'localeString',
  title: 'Localized string',
  type: 'object',
  options: { columns: 2 },
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'fi', title: 'Suomi', type: 'string' }),
  ],
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized text',
  type: 'object',
  options: { columns: 2 },
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
    defineField({ name: 'fi', title: 'Suomi', type: 'text', rows: 3 }),
  ],
})
