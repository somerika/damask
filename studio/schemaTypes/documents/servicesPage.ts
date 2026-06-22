import {defineType, defineField, defineArrayMember} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'localeString', validation: (r) => r.required()}),
    defineField({name: 'price', title: 'Price', type: 'localeString'}),
  ],
  preview: {
    select: {title: 'name.en', subtitle: 'price.en'},
  },
})

export const serviceCategory = defineType({
  name: 'serviceCategory',
  title: 'Category',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'localeString', validation: (r) => r.required()}),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [defineArrayMember({type: 'serviceItem'})],
    }),
  ],
  preview: {
    select: {title: 'title.en', services: 'services'},
    prepare({title, services}) {
      const count = Array.isArray(services) ? services.length : 0
      return {title: title || 'Category', subtitle: `${count} service${count === 1 ? '' : 's'}`}
    },
  },
})

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services & Pricing',
  type: 'document',
  icon: TagIcon,
  groups: [
    {name: 'header', title: 'Header', default: true},
    {name: 'main', title: 'Services'},
    {name: 'womens', title: "Women's services"},
  ],
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'localeString', group: 'header'}),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeText',
      description: 'Use a line break to control where the big title wraps.',
      group: 'header',
    }),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'localeText', group: 'header'}),
    defineField({name: 'bookLabel', title: 'Book button label', type: 'localeString', group: 'header'}),
    defineField({
      name: 'categories',
      title: 'Service categories',
      type: 'array',
      group: 'main',
      of: [defineArrayMember({type: 'serviceCategory'})],
    }),
    defineField({
      name: 'womens',
      title: "Women's services",
      type: 'object',
      group: 'womens',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'localeString'}),
        defineField({name: 'note', title: 'Note', type: 'localeString'}),
        defineField({
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [defineArrayMember({type: 'serviceCategory'})],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Services & Pricing'}),
  },
})
