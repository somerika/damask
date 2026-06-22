import {defineType, defineField} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'ID / slug',
      type: 'slug',
      description: 'Stable identifier used in code and links. Avoid changing once set.',
      options: {source: 'name', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'address',
      title: 'Street address',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'city',
      title: 'Postcode & city',
      type: 'string',
      description: 'e.g. "00500 Helsinki"',
      validation: (r) => r.required(),
    }),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({
      name: 'hours',
      title: 'Opening hours',
      type: 'object',
      options: {columns: 3},
      fields: [
        defineField({name: 'weekdays', title: 'Mon–Fri', type: 'string'}),
        defineField({name: 'saturday', title: 'Saturday', type: 'string'}),
        defineField({name: 'sunday', title: 'Sunday', type: 'string'}),
      ],
    }),
    defineField({
      name: 'timmaUrl',
      title: 'Timma booking URL',
      type: 'url',
      description: 'Leave empty if this location has no online booking yet.',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', subtitle: 'city'},
  },
})
