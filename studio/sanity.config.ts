import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {TagIcon, PinIcon} from '@sanity/icons'
import {schemaTypes} from './schemaTypes'

// Documents that should exist exactly once (edited in place, not created/deleted).
const SINGLETONS = [{type: 'servicesPage', title: 'Services & Pricing', icon: TagIcon}]
const SINGLETON_IDS = SINGLETONS.map((s) => s.type)

export default defineConfig({
  name: 'default',
  title: 'Damask',

  projectId: 'ew2ovyr4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...SINGLETONS.map((s) =>
              S.listItem()
                .title(s.title)
                .icon(s.icon)
                .id(s.type)
                .child(S.document().schemaType(s.type).documentId(s.type).title(s.title)),
            ),
            S.divider(),
            S.documentTypeListItem('location').title('Locations').icon(PinIcon),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Hide singletons from the global "create new" menu so they can't be duplicated.
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => !SINGLETON_IDS.includes(item.templateId)),
  },
})
