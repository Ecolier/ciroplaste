import { CollectionConfig } from 'payload/types'

const Articles: CollectionConfig = {
  slug: 'articles',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'title',
        type: 'text',
    },
    {
        name: 'subtitle',
        type: 'text',
    },
    {
        name: 'callout',
        type: 'relationship',
        relationTo: ['media']
    },
    {
        name: 'content',
        type: 'richText'
    },
    {
        name: 'author',
        type: 'relationship',
        relationTo: ['users']
    },
  ],
}

export default Articles
